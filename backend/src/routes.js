const express = require('express');
const UserController = require('./controllers/UserController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const ProjectsController = require('./controllers/ProjectsController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.buscar);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/projects', ProjectsController.index);
routes.post('/projects', ProjectsController.create);
routes.delete('/projects/:id', ProjectsController.delete);


module.exports = routes;