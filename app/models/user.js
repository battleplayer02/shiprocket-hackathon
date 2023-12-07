'use strict';
const jwt = require('jsonwebtoken');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    generateJWT() {
      // generate the token and return it using express-jwt
      // the token should contain the id, username and email of the user
      // the secret key should be used to sign the token
      // the token should expire in 7 days
      let token = jwt.sign({
        username: this.username,
        email: this.email,
        id: this.id
      },process.env.JWT_SECRET_KEY,{
        expiresIn: '7d'
      });
      return token;
    }

  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};