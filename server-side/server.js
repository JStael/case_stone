const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.json({ mensagem: 'Funcionando!' })
});

app.listen('7000');

