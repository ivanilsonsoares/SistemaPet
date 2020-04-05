const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
    imagem: String,
    title: String,
    description: String,
    organization: String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
    },{
    toJSON: {
        virtuals:true,
    },
});

ProjectsSchema.virtual('imagem_url').get(function(){
    return `http://localhost:3333/files/${this.imagem}`
})

module.exports = mongoose.model('Projects', ProjectsSchema);