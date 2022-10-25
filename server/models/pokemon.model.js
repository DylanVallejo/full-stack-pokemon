const mongoose = require('mongoose');
    const PokemonSchema = new mongoose.Schema({
        name: { type: String, required:[true,"you need to specify the pokemon name"] },
        description: { type: String, required:[true,"You need to add a description for the pokemon"] },
        type: {type: String,},
        evolution: {type: String},
        height: {type: Number},
        weight: {type: Number},
        image: {type: String},
    }, { timestamps: true, versionKey: false });

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = {Pokemon}
