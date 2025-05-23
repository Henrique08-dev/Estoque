import { useEffect, useState } from 'react';
import './Circuito.css';

const Circuito = () => {
    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");
    const [editando, setEditando] = useState(null);
    const [novoNome, setNovoNome] = useState("");

    const apiUrl = 'http://localhost:3000/duplas';

    useEffect(() => {
        listarDuplas();
    }, []);

    const listarDuplas = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setLista(data);
    };

    const adicionaItem = async (form) => {
        form.preventDefault();
        if (!novoItem) {
            return;
        }
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: novoItem }),
            });
            if (response.ok) {
                setNovoItem("");
                listarDuplas();
            } else {
                const errorData = await response.json();
                alert(errorData.message); 
                console.error('Erro ao adicionar dupla:', errorData);
            }
        } catch (error) {
            console.error('Erro de rede:', error);
        }
    };

    const editarDupla = async (index) => {
        const dupla = lista[index];
        try {
            const response = await fetch(`${apiUrl}/${dupla._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: novoNome }),
            });
            if (response.ok) {
                setEditando(null);
                setNovoNome(""); 
                listarDuplas(); 
            } else {
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error('Erro de rede ao editar dupla:', error);
        }
    };

    const iniciaEdicao = (index) => {
        setEditando(index);
        setNovoNome(lista[index].nome); 
    };

    const cancelaEdicao = () => {
        setEditando(null);
        setNovoNome("");
    };

    const clicou = async (index) => {
        const dupla = lista[index];
        const response = await fetch(`${apiUrl}/${dupla._id}`, {
            method: 'PATCH',
        });
        if (response.ok) {
            listarDuplas(); 
        }
    };

    const deleta = async (index) => {
        const dupla = lista[index];
        await fetch(`${apiUrl}/${dupla._id}`, {
            method: 'DELETE',
        });
        listarDuplas();
    };

    const deletaTudo = async () => {
        await fetch(apiUrl, {
            method: 'DELETE',
        });
        listarDuplas(); 
    };

    const alteraStatusPagamento = async (index) => {
        const dupla = lista[index];
        try {
            const response = await fetch(`${apiUrl}/pagamento/${dupla._id}`, {
                method: 'PATCH',
            });
            if (response.ok) {
                listarDuplas(); 
            } else {
                const errorData = await response.json();
                console.error('Erro ao alterar status de pagamento:', errorData);
            }
        } catch (error) {
            console.error('Erro de rede ao alterar status de pagamento:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div>
            <button className='sair' onClick={handleLogout}>Sair</button>
            <h1 className="hCircuito">Gerenciamento de Duplas Inscritas</h1>
            <form className="fCircuito" onSubmit={adicionaItem}>
                <input 
                    id='input-entrada'
                    type="text"
                    value={novoItem}
                    onChange={(e) => setNovoItem(e.target.value)}
                    placeholder="Adicione uma dupla."
                />
                <button className="add" type="submit">Adicionar</button>
            </form>
            <div className="listaInscritos">
                <div style={{ textAlign: 'center' }}>
                    {
                        lista.length < 1
                        ?
                        <h1 className="hCircuito">Nenhuma Dupla Inscrita</h1>
                        :
                        lista.map((dupla, index) => (
                            <div 
                                key={dupla._id}
                                className={dupla.riscada ? "duplaCortada" : "confirmada"}
                            >
                                {
                                    editando === index ? (
                                        <>
                                            <input 
                                                type="text" 
                                                value={novoNome} 
                                                onChange={(e) => setNovoNome(e.target.value)} 
                                            />
                                            <button onClick={() => editarDupla(index)} className="status">Salvar</button>
                                            <button onClick={cancelaEdicao} className="del">Cancelar</button>
                                        </>
                                    ) : (
                                        <>
                                            <span onClick={() => clicou(index)}>{dupla.nome}</span>
                                            <button onClick={() => iniciaEdicao(index)} className="edit">Editar</button>
                                            <button onClick={() => deleta(index)} className="del">Deletar</button>
                                            <button onClick={() => alteraStatusPagamento(index)} className="status">
                                                {dupla.pagamentoEfetuado ? 'Pagamento Efetuado' : 'Pagamento Pendente'}
                                            </button>
                                        </>
                                    )
                                }
                            </div>
                        ))
                    }
                    {
                        lista.length > 0 &&
                        <button onClick={deletaTudo} className="delAll">Deletar Todas</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Circuito;
