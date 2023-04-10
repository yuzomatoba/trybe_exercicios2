const { Patient, Plan } = require('../models');

const getAllPlans = (req, res) => {
  Plan.findAll({ where: { plan_id: req.params.id }, include: [{ model: Patient, as: 'patients' }],
})
.then((patientList) => {
  if (!patientList.length) {
    return res.status(404).send({ message: 'No patient found' });
  }
  return res.status(200).json(patientList);
})
.catch(() => res.status(500).json({ message: 'Something wrong happened' }));
}

module.exports = {
  getAllPlans,
};