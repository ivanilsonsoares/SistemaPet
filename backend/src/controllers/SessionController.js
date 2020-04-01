const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { email } = request.body;

        const users = await connection('users').where('email', email).select('name').first();

        if(!users){
            return response.status(400).json({ Error: 'Usuário não encontrado com esse email. '});
        }

        return response.json(users);
    }
}