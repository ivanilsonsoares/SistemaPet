const connection = require('../database/connection');

module.exports ={
    async index(request,response){

        const projects = await connection('projects').select('*').orderBy('id','desc');
     
        return response.json(projects);
    },

    //cria noticia pelo email do usuário
    async create(request, response){
        const{name , description, organizadores} = request.body;
        const user_email = request.headers.authorization;
        const {filename} = request.file;


        const [id] = await connection('projects').insert({
            name,
            imagem : filename,
            description,
            organizadores,
            user_email
        });

        return response.json({ id });
    },

    //deleta noticia pelo email do usuário
    async delete(request,response){
        const { id } = request.params;
        const user_email = request.headers.authorization;

        const incident = await connection('projects').where('id', id).select('user_email').first();

        if(incident.user_email != user_email){
            return response.status(401).json({ error: 'Você não pode realizar essa operação.'});
        }

        await connection('projects').where('id', id).delete();

        return response.status(204).send();
    }

};