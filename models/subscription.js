const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // configuration sequelize

const Subscription = sequelize.define('Subscription', {
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

    payStatus: {
        type: DataTypes.ENUM('paid', 'not paid'),
        allowNull: false
    },

    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Subscription',
    timestamps: true
});

module.exports = Subscription;