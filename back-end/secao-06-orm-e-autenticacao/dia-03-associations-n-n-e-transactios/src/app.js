const express = require('express');

const { getAllPatientPlans, getAllPatientSurgeries, creatingPatient, getPatientsAndSurgeriesNoDoc } = require('./controllers/patientsController');
const { getAllPlans } = require('./controllers/plansController');
const { getDoctorSurgeries } = require('./controllers/surgeriesController');
const app = express();

app.use(express.json());

app.post('/', creatingPatient);
app.get('/all', getAllPatientPlans);
app.get('/surgeries', getAllPatientSurgeries);
app.get('/surgeries/nodoctor', getPatientsAndSurgeriesNoDoc);
app.get('/surgeries/:name', getDoctorSurgeries);
app.get('/:id', getAllPlans);

module.exports = {
  app,
};

