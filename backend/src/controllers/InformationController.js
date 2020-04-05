const Information = require('../models/Information');
const User = require('../models/User');
module.exports = {

    async index(req, res){
        const information = await Information.find({});
        return res.json(information);
    },

    async create(req,res){
        const {filename} = req.file;
        const {title ,description} = req.body;
        const {user_id} = req.headers;

/*         const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({erro: 'User does not exits'})
        } */

        const information = await Information.create({
            user: user_id,
            imagem: filename,
            title,
            description, 
        })
        return res.json(information)
    },

    async delete(req,res){
        const { id } = req.params.id;
        try {
            await Information.findOneAndDelete(id);
            return res.send();
        } catch (err) {
            return res.status(400).send({ error: 'Error delteting project' });
        }

    }
}