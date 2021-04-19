const express = require('express');
const cors = require('cors');
require('dotenv').config({ debug: process.env.DOTENV_DEBUG });

const routes = require('./routes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.APP_PORT, () => console.log(`==> Servidor ouvindo na porta ${process.env.APP_PORT}`));