module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
    {
      timeStamps: false,
      tableName: 'Accounts',
      underscored: true,
    });

    Account.Associate = (models) => {
      Account.hasOne(models.Profile, {
        foreignKey: 'accountId',
        as: 'profile',
      });

      Account.hasMany(models.Comment, {
        foreignKey: 'accountId',
        as: 'comments',
      });
      
    };

  return Account;
};