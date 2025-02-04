const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  }

}, {
  sequelize,
  modelName: 'Cart',
  timestamps: true
});

module.exports = Cart;
