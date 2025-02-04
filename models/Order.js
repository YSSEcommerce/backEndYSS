const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },

  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Carts',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  
  status: {
    type: DataTypes.ENUM('pending', 'shipped', 'delivered', 'canceled'),
    allowNull: false,
    defaultValue: 'pending'
  }
}, {
  sequelize,
  modelName: 'Order',
  timestamps: true
});

module.exports = Order;
