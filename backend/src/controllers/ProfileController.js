const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const incidents = await connection('incidents').select('*').orderBy('id', 'desc');

        return response.json(incidents);
    },

}