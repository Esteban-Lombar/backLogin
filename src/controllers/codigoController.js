const Codigo = require('../models/Codigo');

// Obtener todos los códigos
exports.getAllCodigos = async (req, res) => {
  try {
    const codigos = await Codigo.find(); // Obtiene todos los códigos
    res.json(codigos);
  } catch (error) {
    console.error('Error al obtener los códigos:', error);
    res.status(500).json({ success: false, mensaje: 'Error al obtener los códigos' });
  }
};

// Si necesitas otro controlador, asegúrate de que también esté definido
exports.getTotalCodigos = async (req, res) => {
  // Implementa la lógica para contar los códigos si es necesario
};
