const Usuario = require('./src/models/Usuario'); // Ruta correcta

exports.register = async (req, res) => {
    const { nombre, fechaDeNacimiento, cedula, correo, celular, ciudad, contrasena } = req.body;
    try {
      const usuario = new Usuario({ nombre, fechaDeNacimiento, cedula, correo, celular, ciudad, contrasena });
      await usuario.save();
      console.log('Usuario registrado:', usuario);
      res.json({ success: true });
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      res.status(500).json({ success: false, mensaje: 'Error al registrar el usuario' });
    }
  };
  
  exports.login = async (req, res) => {
    const { correo, contrasena } = req.body;
    try {
      const usuario = await Usuario.findOne({ correo });
      if (usuario && await usuario.matchPassword(contrasena)) {
        res.json({ success: true, isAdmin: usuario.isAdmin });
      } else {
        res.json({ success: false, mensaje: 'Credenciales incorrectas' });
      }
    } catch (error) {
      res.status(500).json({ success: false, mensaje: 'Error en el servidor' });
    }
  };