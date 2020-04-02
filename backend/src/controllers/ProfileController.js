const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const incidents = await connection('incidents').select('*').orderBy('id', 'desc');

        return response.json(incidents);
    }
}

        /* ,{
    toJSON: true,
}
knex.schema.createTable.virtual('imagem_url').get(function(){
    return `http://localhost:3333/files/${this.imagem}`
}) */