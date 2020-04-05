const User = require('../models/User');

module.exports = {
    async create(req, res){
        const { email, name } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({email , name});
        }
        return res.json({user});
    }
};