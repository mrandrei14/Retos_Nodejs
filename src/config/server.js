const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public')); //Cargar archivos estaticos

//Configuraciones
app.set('port', process.env.PORT || 3000); //Configuracion del puerto
app.set('view engine', 'ejs'); //Formato que se usará
app.set('views', path.join(__dirname, '../app/views')); //Lugar donde estaran los views


//mdiddleware
app.use(bodyParser.urlencoded({extended: false})); //Formulario, para pasar datos SQL

module.exports = app;

