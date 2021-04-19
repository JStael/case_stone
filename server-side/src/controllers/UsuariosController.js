const md5 = require('md5');
const jwt = require('jsonwebtoken');

const UsuModel = require('../models/Usuarios');

module.exports = {
    async index (req, res) {
        const usuarios = await UsuModel.findAll();

        return res.status(200).json({
            message: "Usuários retornados do banco de dados!",
            content: usuarios
        });
    },
    async show (req, res) {
        const { id } = req.params;

        const usuario = await UsuModel.findOne({
            where: { usu_id: Number(id) }
        });

        return res.status(200).json({
            message: "Usuário encontrado no banco de dados!",
            content: usuario
        });
    },
    async create (req, res) {
        const {
            nome,
            sobrenome,
            email,
            senha
        } = req.body;
        
        const senhaEncript = md5(senha);
    
        await UsuModel.create({
            usu_nome: nome,
            usu_sobrenome: sobrenome,
            usu_email: email,
            usu_senha: senhaEncript
        });

        return res.status(201).json({ message: 'Usuário criado com sucesso!' });
    },
    async edit (req, res) {
        const { id } = req.params;
        const {
            nome,
            sobrenome,
            email,
            senha
        } = req.body;
        
        const senhaEncript = md5(senha);
    
        await UsuModel.update({
            usu_nome: nome,
            usu_sobrenome: sobrenome,
            usu_email: email,
            usu_senha: senhaEncript
        }, {
            where: {
                usu_id: Number(id)
            }
        });

        return res.status(200).json({ message: 'Usuário alterado com sucesso!' });
    },
    async login (req, res) {
        const { email, senha } = req.body;

        const senhaEncript = md5(senha);

        const usuario = await UsuModel.findOne({
            where: {
                usu_email: email,
                usu_senha: senhaEncript
            }
        });

        if (usuario) {
            const token = jwt.sign({ usu_id: usuario.usu_id }, process.env.JWT_SECRET, { expiresIn: '7d' });
            return res.status(200).json({
                message: 'Usuário autenticado com sucesso!',
                auth: true,
                token
            });
        }

        return res.status(401).json({
            message: 'Usuário não pôde ser autenticado!',
            auth: false
        });
    },
    async logout (req, res) {
        // implementar o logout com salvamento de token
        // numa blacklist pelo redis
        return res.end();
    }
};