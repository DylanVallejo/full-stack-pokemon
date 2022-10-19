const mongoose = require('mongoose');
    const PokemonSchema = new mongoose.Schema({
        name: { type: String, required:[true,"Specify the pokemon name "] },
        description: { type: String, required:[true,"Add a description for the pokemon"] },
        type: {type: String, required:[true,"Specify the pokemon type"]},
        evolution: {type: String, required:[true,"Add the evolutions for the pokemon"]},
        height: {type: Number, required:[true,"Se requiere el stock del producto"]},
        weight: {type: Number, required:[true,"Se requiere el stock del producto"]},
        image: {type: String, required:[true,"Se requiere el stock del producto"]},
        
    }, { timestamps: true, versionKey: false });    

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = {Pokemon}
