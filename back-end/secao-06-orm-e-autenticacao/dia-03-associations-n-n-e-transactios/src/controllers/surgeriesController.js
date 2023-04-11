const { Patient, Surgery } = require('../models');

const getDoctorSurgeries = (req, res) => {
  Surgery.findAll({ where: { doctor: req.params.name }, include: [{ model: Patient, as: 'patients', through: { attributes: [] } }]})
  .then((patientList) => {
    if (patientList === null) {
      return res.status(404).send({ message: 'No plan found' });
    }
    return res.status(200).json(patientList);
  })
  .catch(() => res.status(500).json({ message: 'Something wrong happened' }));
};

module.exports = {
  getDoctorSurgeries,
};

