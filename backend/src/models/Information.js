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
    return `https://petsi-beckend.herokuapp.com/files/${this.imagem}`
})

module.exports = mongoose.model('Information', InformationSchema);