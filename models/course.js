const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // configuration sequelize

const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    video_url: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Course',
    timestamps: true
});

module.exports = Course;