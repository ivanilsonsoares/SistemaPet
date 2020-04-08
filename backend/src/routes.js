const express = require('express');
const multer = require('multer');
const uploadConfig = require ('./config/upload');
const SessionController = require('./controllers/SessionController');
const InformationController = require('./controllers/InformationController');
const ProjectsController = require('./controllers/ProjetctsController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions',SessionController.create);



routes.post('/information',upload.single('imagem'),InformationController.create);
routes.get('/information',InformationController.index);
routes.delete('/information/:id',InformationController.delete);
routes.post('/projects',upload.single('imagem'),ProjectsController.create);
routes.get('/projects',ProjectsController.index);
routes.delete('/projects/:id',ProjectsController.delete);


module.exports = routes;
