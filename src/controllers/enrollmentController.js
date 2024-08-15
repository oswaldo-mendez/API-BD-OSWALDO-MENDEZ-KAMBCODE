const Enrollment = require('../models/enrollment');

const getAllEnrollments = async (req, res) => {
    try {
      const enrollments = await Enrollment.findAll();
      res.json(enrollments);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener las inscripciones.' });
    }
};

const createEnrollment = async (req, res) => {
    try {
      const { studentId, courseId, grade } = req.body;
      const enrollment = await Enrollment.create({ StudentId: studentId, CourseId: courseId, grade });
      res.status(201).json(enrollment);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear la inscripción.' });
    }
};

module.exports = {
    getAllEnrollments,
    createEnrollment,
};