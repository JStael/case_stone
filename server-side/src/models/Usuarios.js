const { Sequelize, DataTypes, Model } = require('sequelize');
const dbConfig = require('../config/database.js');
const sequelize = new Sequelize(dbConfig);

class Usuarios extends Model {}

Usuarios.init({
  usu_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  usu_nome: {
    type: DataTypes.STRING(30),
  },
  usu_sobrenome: {
    type: DataTypes.STRING(45),
  },
  usu_email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  usu_senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usu_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize,
  modelName: 'usuarios',
  createdAt: 'usu_created_at',
  updatedAt: 'usu_updated_at',
  deletedAt: false
});

module.exports = Usuarios;