📋 Sobre o Projeto

O **Sistema de Gestão de Estoque** é uma aplicação web desenvolvida para administradores de empresas que desejam gerenciar seu inventário de forma eficiente e segura. A plataforma oferece um controle completo sobre os produtos em estoque através de uma interface intuitiva e funcionalidades essenciais para uma gestão eficaz.

🎯 Objetivos

- **Fornecer um sistema seguro** de autenticação para acesso restrito ao administrador
- **Oferecer controle completo** sobre o inventário da empresa
- **Facilitar operações** de adição, edição e remoção de produtos
- **Prover uma interface intuitiva** para gestão visual do estoque
- **Garantir dados consistentes** com validações e persistência adequada

👥 Público-Alvo

👨‍💼 Administradores
- Acesso exclusivo através de sistema de login seguro
- Controle total sobre o inventário da empresa
- Capacidade de adicionar, editar e remover produtos
- Visualização organizada de todos os itens em estoque

🛠️ Tecnologias Utilizadas

Backend
- **Node.js** com Express.js para construção da API REST
- **MongoDB** com Mongoose para persistência de dados
- **JWT** (JSON Web Tokens) para autenticação segura
- **Bcrypt** para criptografia de senhas
- **CORS** para gestão de requisições entre diferentes origens
- **Body-parser** para parsing de requisições HTTP
- **Dotenv** para gestão de variáveis de ambiente

Frontend
- **React** 18.3.1 com hooks e functional components
- **React Router DOM** v6 para navegação entre páginas
- **Bootstrap** e **React Bootstrap** para interface responsiva
- **Axios** para consumo da API backend
- **Prop-types** para validação de props em componentes React
- **SQLite** (para possíveis funcionalidades locais ou cache)

Ferramentas de Desenvolvimento
- **Vite** para build e desenvolvimento rápido do frontend
- **ESLint** para análise estática e qualidade do código
- **TypeScript** tipos para melhor desenvolvimento

🔐 Sistema de Autenticação

- **Página de Login** segura com validação de credenciais
- **Autenticação baseada em JWT** para sessões seguras
- **Proteção de rotas** no frontend e backend
- **Middleware de autenticação** para verificar tokens JWT

📊 Funcionalidades Principais

🔐 Sistema de Login
- Interface segura para autenticação do administrador
- Validação de credenciais no backend
- Redirecionamento automático para página de estoque após login

📦 Gestão de Estoque
- **Visualização de produtos** em formato de tabela ou cards
- **Adição de novos produtos** com formulário validado
- **Edição de produtos existentes** com interface intuitiva
- **Remoção de produtos** com confirmação de ação
- **Busca e filtros** para localização rápida de itens

🎨 Interface do Usuário
- **Design responsivo** compatível com desktop e mobile
- **Navegação intuitiva** entre diferentes seções
- **Feedback visual** para ações do usuário
- **Validações em tempo real** em formulários

🚀 Funcionalidades Técnicas

- **API RESTful** com endpoints bem definidos
- **Validação de dados** no frontend e backend
- **Gestão de erros** com respostas apropriadas
- **Persistência de sessão** através de tokens JWT
- **Interface responsiva** com Bootstrap
