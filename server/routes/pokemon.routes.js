const PkmController = require('../controllers/pokemon.controller');
module.exports = function(app){
    app.get('/api', PkmController.getPokemons);
    app.post('/api/pokemon',PkmController.createPokemon)
}
