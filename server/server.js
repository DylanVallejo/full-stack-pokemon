

const express = require('express');
const cors = require('cors');// cors nos permite hacer solicitudes de origen diferente(puerto a hacia pueto b ) importando cors
const app = express();
require('./config/mongoose.config');//importing the mongoose confg
app.use(cors()); // implementando cors a express
app.use(express.json());//using a json file
app.use(express.urlencoded({extended: true}));

//creando una conexion con el servidor 
require('./routes/pokemon.routes')(app);
//levantando y escuchando el servidor en el puerto 8000
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
