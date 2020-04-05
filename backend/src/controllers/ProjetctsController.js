const Projects = require('../models/Projects');
const User = require('../models/User');
module.exports = {

    async index(req, res){
        const projects = await Projects.find({});
        return res.json(projects);
    },

    async create(req,res){
        const {filename} = req.file;
        const {title ,description, organization} = req.body;
        const {user_id} = req.headers;

/*         const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({erro: 'User does not exits'})
        } */

        const projects = await Projects.create({
            user: user_id,
            imagem: filename,
            title,
            description,
            organization, 
        })
        return res.json(projects)
    },

    async delete(req,res){
        const { id } = req.params.id;
        try {
            await Projects.findOneAndDelete(id);
            return res.send();
        } catch (err) {
            return res.status(400).send({ error: 'Error delteting project' });
        }

    }
}