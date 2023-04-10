const { Patient, Plan } = require('../models');

const getAllPatientPlans = (_req, res) => {
  Patient.findAll({ include: { model: Plan, as: 'plan' }})
  .then((patientList) => {
    if (!patientList.length) {
      return res.status(404).send({ message: 'No patient found' });
    }
    return res.status(200).json(patientList);
  })
  .catch(() => res.status(500).json({ message: 'Something wrong happened' }));
};

const getAllPatientSurgeries = (_req, res) => {
  Patient.findAll({ include: { model: Surgery, as: 'surgeries', through: { atribbutes: [] } }})
  .then((patientList) => {
    if (!patientList.length) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(patientList);
  })
  .catch(() => res.status(500).json({ message: 'Something wrong happened' }));
}

const creatingPatient = (req, res) => {
  const { fullName, plan_id } = req.body;
  Patient.create({ fullName, plan_id })
  .then((res) => res.status(200).json(res))
  .catch(() => res.status(500).json({ message: 'Something wrong happened' }));
};

const getPatientsAndSurgeriesNoDoc = (req, res) => {
  Patient.findAll({ include: { model: Surgery, as: 'surgeries', attributes: { exclude: ['doctor']}, through: { atribbutes: [] } }})
  .then((patientList) => {
    if (patientList === null) {
      return res.status(404).send({ message: 'No patients found' });
    } 
    return res.status(200).json(patientList);
  })
  .catch(() => res.status(500).json({ message: 'Something wrong happened' }));
}

module.exports = {
  getAllPatientPlans,
  getAllPatientSurgeries,
  creatingPatient,
  getPatientsAndSurgeriesNoDoc,
};