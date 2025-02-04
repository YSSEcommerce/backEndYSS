const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // configuration sequelize

const Order = sequelize.define('Order', {
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

  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Order',
  timestamps: true
});

module.exports = Order;
