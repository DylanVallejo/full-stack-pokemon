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
    .catch(err => response.status(400).json(err))
    // .catch(err => response.json(err))
}

module.exports.getOnePokemon = (request, response ) => {
    Pokemon.findOne({_id:request.params.id})
    .then(singlePokemon => response.json(singlePokemon))
    .catch(err => response.status(400).json(err))
    // .catch(err => response.json(err))
}

module.exports.createPokemon = (request, response) => {
    const { name, description, types, evolutions, height, weight, image} = request.body;
    Pokemon.create({
        name,
        description,
        types, 
        evolutions,
        height,
        weight,
        image
    })
    .then(pokemon => response.json(pokemon))
    // .catch(err => response.json(err));
    .catch(err => response.status(400).json(err))
}

