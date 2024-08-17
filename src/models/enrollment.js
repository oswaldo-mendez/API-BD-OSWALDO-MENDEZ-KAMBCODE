const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./student');
const Course = require('./courses');

const Enrollment = sequelize.define('Enrollment', {
  grade: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Definir las relaciones
Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });

module.exports = Enrollment;