const connection = require('../database/connection');

module.exports ={
    async index(request,response){
        const {page = 1} = request.query;


        const incidents = await connection('incidents').join('users', 'user_email', '=', 'incidents.user_email')
            .limit(5).offset((page - 1) * 5).select(['incidents.*'
            ,'users.name'
            ,'users.email']);
     
        return response.json(incidents);
    },

    async buscar(request, response){
        const { title } = request.body;

        const incidents = await connection('incidents').where('title', title).select('*');

        return response.json(incidents);
    },

    //cria noticia pelo email do usuário
    async create(request, response){
        const{title , description} = request.body;
        const user_email = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            user_email
        });

        return response.json({ id });
    },

    //deleta noticia pelo email do usuário
    async delete(request,response){
        const { id } = request.params;
        const user_email = request.headers.authorization;

        const incident = await connection('incidents').where('id', id).select('user_email').first();

        if(incident.user_email != user_email){
            return response.status(401).json({ error: 'Você não pode realizar essa operação.'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }

};