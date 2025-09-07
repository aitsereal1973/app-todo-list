const express = require('express');
const router = express.Router();
const Tarea = require('../models/tarea');

// Obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear una nueva tarea
router.post('/', async (req, res) => {
  const tarea = new Tarea({
    titulo: req.body.titulo,
    completada: req.body.completada,
    prioridad: req.body.prioridad
  });
  try {
    const nuevaTarea = await tarea.save();
    res.status(201).json(nuevaTarea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;