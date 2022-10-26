

const express = require('express');
require('dotenv').config();
const cors = require('cors');// cors nos permite hacer solicitudes de origen diferente(puerto a hacia pueto b ) importando cors
const app = express();
require('./config/mongoose.config');//importing the mongoose confg
app.use(cors()); // using cors whit express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//creating the documentation whit swagger
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

//creating a conection whit server side 
require('./routes/pokemon.routes')(app);
//listening at port  8000
// app.listen(8000, () => {
//     console.log("Listening at Port 8000")
// })

app.listen(process.env.PORT , () => {
    console.log(`Listening at Port ${process.env.PORT}`)
})
