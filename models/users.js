module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  })
  return Users
}