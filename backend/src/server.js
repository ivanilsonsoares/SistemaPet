const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const router = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://pet:petsi2020@petsi-wr3du.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(router);


app.listen(3333);