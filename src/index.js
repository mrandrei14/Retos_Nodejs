const app = require('./config/server');

require('./app/routes/news')(app);

//Inicio del Servidor
app.listen(app.get('port'), () => {

    console.log('Servidor arriba en el puerto ', app.get('port'));

})