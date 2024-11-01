const express = require('express');
const cors = require('cors');
const dbInit = require('./config/db');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

dbInit();

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
