const express = require("express");
var bodyParser = require('body-parser');
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./database/config");
const serverIndex = require('serve-index');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());


 


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/uploads', serverIndex(__dirname + '/uploads'));

// Directorio Público
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/config", require("./routes/config"));
app.use("/api/categoria", require("./routes/categoria"));
app.use("/api/blog", require("./routes/blog"));

// TODO: CRUD:

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
