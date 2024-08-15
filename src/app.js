const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Configuración de las rutas
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);

// Exportación del módulo app para que pueda ser usado en index.js
module.exports = app;