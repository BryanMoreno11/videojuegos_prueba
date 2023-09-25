const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//rutas
//importamos las rutas del archivo videojuegoRouter que serán utilizadas bajo el prefijo api
var franquicia_routes = require('./routes/videojuegosRoutes');
app.use('/api', franquicia_routes);
//arrancan el servidor
app.listen("3000");
console.log("server up localhost:3000");
//Ruta del server: http://localhost:3000/api/franquicia