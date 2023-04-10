const { Account, Profile } = require('../models');

const getAccountById = async (req, res) => {
  try {
    const AccountList = await Account.findAll({
      where: { id: req.params.id },
      include: [{ model: Profile, as: 'profile' }],
    });

    if (!AccountList.length) {
      return res.status(404).send({ message: 'No registered account' });
    }

    return res.status(200).json(AccountList[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something bad happened!' });
  }
};

const getAccountByIdLazy = async (req, res) => {
  try {
    const AccountList = await Account.findAll({
      where: { id: req.params.id },
    });

    if(!AccountList.length) {
      return res.status(404).send({ message: 'No registered account' });
    }
    return res.status(200).json(AccountList[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something bad happened' });
  }
};

module.exports = {
  getAccountById,
  getAccountByIdLazy,
};