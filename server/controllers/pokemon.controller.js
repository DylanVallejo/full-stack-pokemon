const { request, response } = require('express');
const  { Pokemon } =require('../models/pokemon.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.getPokemons = (request, response) => {
    Pokemon.find({})
    .then(pokemon => response.json(pokemon))
    .catch(err => response.json(err))
}

module.exports.createPokemon = (request, response) => {
    const { name, description, type, evolution, height, weight, image} = request.body;
    Pokemon.create({
        name,
        description,
        type, 
        evolution,
        height,
        weight,
        image
    })
    .then(pokemon => response.json(pokemon))
    .catch(err => response.json(err));
}
