module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    message: {
      type: DataTypes.STRING,
    },
    upvoting: {
      type: DataTypes.INTEGER,
    },
    downvoting: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: 'Comments',
    underscored: true,
  });

  Comment.Associate = (models) => {
    Comment.belongsTo(models.Account, {
      foreignKey: 'accountId',
      as: 'account'
    })
  }

  return Comment;

};