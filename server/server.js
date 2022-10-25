

const express = require('express');
const cors = require('cors');// cors nos permite hacer solicitudes de origen diferente(puerto a hacia pueto b ) importando cors
const app = express();
require('./config/mongoose.config');//importing the mongoose confg
app.use(cors()); // using cors whit express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//creating a conection whit server side 
require('./routes/pokemon.routes')(app);
//listening at port  8000
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
