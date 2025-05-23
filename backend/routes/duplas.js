const express = require('express');
const Dupla = require('../models/dupla');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { nome } = req.body; 

        const existente = await Dupla.findOne({ nome: new RegExp(`^${nome}$`, 'i') });
        if (existente) {
            return res.status(400).json({ message: 'Essa dupla já está inscrita.' });
        }

        const novaDupla = new Dupla({ nome });
        await novaDupla.save();
        res.status(201).json(novaDupla);
    } catch (error) {
        console.error('Erro ao adicionar dupla:', error);
        res.status(500).send('Erro ao adicionar dupla');
    }
});

router.delete('/:id', async (req, res) => {
    await Dupla.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

router.patch('/:id', async (req, res) => {
    const dupla = await Dupla.findById(req.params.id);
    dupla.riscada = !dupla.riscada;
    await dupla.save();
    res.send(dupla);
});

router.delete('/', async (req, res) => {
    await Dupla.deleteMany({});
    res.status(204).send();
});

router.get('/', async (req, res) => {
    const duplas = await Dupla.find();
    res.send(duplas);
});

router.patch('/pagamento/:id', async (req, res) => {
    try {
        const dupla = await Dupla.findById(req.params.id);
        if (!dupla) {
            return res.status(404).json({ message: 'Dupla não encontrada.' });
        }
        
        dupla.pagamentoEfetuado = !dupla.pagamentoEfetuado;

        dupla.riscada = !dupla.pagamentoEfetuado;

        await dupla.save();
        res.json(dupla);
    } catch (error) {
        console.error('Erro ao atualizar status de pagamento:', error);
        res.status(500).send('Erro ao atualizar status de pagamento');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { nome } = req.body;
        const dupla = await Dupla.findById(req.params.id);
        if (!dupla) {
            return res.status(404).json({ message: 'Dupla não encontrada.' });
        }

        const existente = await Dupla.findOne({ nome: new RegExp(`^${nome}$`, 'i') });
        if (existente && existente._id.toString() !== dupla._id.toString()) {
            return res.status(400).json({ message: 'Já existe uma dupla com esse nome.' });
        }

        dupla.nome = nome;
        await dupla.save();
        res.json(dupla);
    } catch (error) {
        console.error('Erro ao atualizar dupla:', error);
        res.status(500).send('Erro ao atualizar dupla');
    }
});


module.exports = router;
