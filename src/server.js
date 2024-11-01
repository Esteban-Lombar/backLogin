const express = require('express');
const cors = require('cors');
const dbInit = require('./src/config/db'); // Asegúrate de tener la ruta correcta
const authRoutes = require('./src/routes/auth'); // Asegúrate de tener la ruta correcta

const app = express();

app.use(cors());
app.use(express.json());

dbInit();

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
