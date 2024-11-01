const express = require('express');
const cors = require('cors');
const dbInit = require('.src/config/db'); // Corrige esta ruta si es necesario
const authRoutes = require('.src/routes/auth');
const dotenv = require('dotenv');

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
