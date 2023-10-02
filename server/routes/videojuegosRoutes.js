const { Router } = require('express');
const router = new Router();
//Extraemos las funciones del controller
//->Extraer funciones de la tabla Franquicia
var { getFranquicias, getFranquicia, updateFranquicia, deleteFranquicia, createFranquicia } = require('../controllers/franquiciaController');
//->Extraer funciones de la tabla videojuego
var { getVideojuegos, getVideojuego, updateVideojuego, deleteVideojuego, createVideojuego } = require('../controllers/videojuegoController');

//definimos las rutas de los endpoints y que función realizará
//->Rutas para la tabla franquicia
router.get('/franquicia', getFranquicias);
router.get('/franquicia/:id', getFranquicia);
router.post('/franquicia', createFranquicia);
router.put('/franquicia/:id', updateFranquicia)
router.delete('/franquicia/:id', deleteFranquicia);
//->Rutas para la tabla videojuego
router.get('/videojuego', getVideojuegos);
router.get('/videojuego/:id', getVideojuego);
router.post('/videojuego', createVideojuego);
router.put('/videojuego/:id', updateVideojuego)
router.delete('/videojuego/:id', deleteVideojuego);
//exportación
module.exports = router;