const { Router } = require('express');
const jwt = require('jsonwebtoken');

const UsuariosController = require('./controllers/UsuariosController.js');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Olá mundo! Tudo certo por aqui, e por aí?');
});

function verificarJWT (req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: 'Usuário não pôde ser autenticado ou token inválido!',
                auth: false
            });
        }

        req.usu_id = decoded.usu_id;
        next();
    });
}

// rotas da aplicacao aqui
// USUARIOS
routes.post('/login', UsuariosController.login);
routes.post('/logout', UsuariosController.logout);

routes.post('/usuarios', UsuariosController.create);
routes.get('/usuarios', verificarJWT, UsuariosController.index);
routes.get('/usuarios/:id', verificarJWT, UsuariosController.show);
routes.put('/usuarios/:id', verificarJWT, UsuariosController.edit);


module.exports = routes;