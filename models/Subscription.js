const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Course = require('./Course');

const Subscription = sequelize.define('Subscription', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: { model: User, key: 'id' },
    allowNull: false
  },
  courseId: {
    type: DataTypes.INTEGER,
    references: { model: Course, key: 'id' },
    allowNull: false
  },
  payStatus: {
    type: DataTypes.ENUM('paid', 'not paid'),
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Subscription;
