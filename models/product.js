const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // configuration sequelize

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },

  categroy: {
    type: DataTypes.STRING,
    allowNull: false
  },

  image_url: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'Product',
  timestamps: true
});

module.exports = Product;
