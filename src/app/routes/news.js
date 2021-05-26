const bodyParser = require('body-parser');
const dbConnection = require('../../config/dbConnection');
var nodemailer = require('nodemailer');

module.exports = app => {
    const connection = dbConnection();

    app.get('/', (req, res) => {
        connection.query('SELECT nombre, apellido1, apellido2, cedula, correo FROM datos', (err, result) => {
            res.render('news/news', {  //Ruta de envio de valores
                news: result,
                correoPre: "kevorozc1021@gmail.com"
            });
        });
    });

    //Obtiene valores de la pagina y los pasa a la base de datos.
    app.post('/agregar', (req, res) => {

        const { nombre, apellido1, apellido2, cedula, correo } = req.body;
        connection.query('INSERT INTO datos SET?', {
            nombre, apellido1, apellido2, cedula, correo
        }, (err, result) => {

            
            res.redirect('/'); //Ruta predeterminada

        });
    });

    //Obtiene valores de la pagina y los pasa a la base de datos.
    app.post('/editar', (req, res) => {

        const { nombre, apellido1, apellido2, cedula, correo } = req.body;

        connection.query('UPDATE datos SET ? WHERE cedula = "' + cedula + '"', {
            nombre, apellido1, apellido2, cedula, correo, 
        }, (err, result) => {

            res.redirect('/'); //Ruta predeterminada

        });
    });

    //Obtiene valores de la pagina y los pasa a la base de datos.
    app.post('/eliminar', (req, res) => {

        const {cedula} = req.body;
        connection.query('DELETE FROM datos WHERE cedula = "' + cedula + '"', (err, result) => {

            res.redirect('/'); //Ruta predeterminada

        });
    });


    //Obtiene valores de la pagina y los pasa a la base de datos. //Recuperar Datos
    app.post('/recuperardatos', (req, res) => {

        const { correoPre, correo, asunto, cuerpo } = req.body;


        //Creamos el objeto de transporte
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kevorozc1021@gmail.com',
                pass: 'bjwgkpzucnvxiqoo'
            }
        });

        var mensaje = cuerpo;

        var mailOptions = {
            from: correoPre,
            to: correo,
            subject: asunto,
            text: mensaje
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {


                console.log('Email enviado: ' + info.response);
            }
        });

        res.redirect('/'); //Ruta predeterminada

    });

}
