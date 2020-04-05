const mongoose = require('mongoose');

const InformationSchema = new mongoose.Schema({
    imagem: String,
    title: String,
    description: String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    } 
},{
    toJSON: {
        virtuals:true,
    },
});

InformationSchema.virtual('imagem_url').get(function(){
    return `http://localhost:3333/files/${this.imagem}`
})

module.exports = mongoose.model('Information', InformationSchema);