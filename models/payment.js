const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // configuration sequelize

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Payment',
  timestamps: true
});

module.exports = Payment;
