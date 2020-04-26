const express = require('express');
const VehicleController = require('./controllers/VehicleController');
const SpacesController = require('./controllers/SpacesController');

const routes = express.Router();

routes.get('/list', VehicleController.index);

routes.get('/properties/:id', SpacesController.index);

routes.post('/create', VehicleController.create);

routes.post('/edit/:numero_vaga', SpacesController.update)

routes.delete('/delete/:id', VehicleController.delete)

module.exports = routes;