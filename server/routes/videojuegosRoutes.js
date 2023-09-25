const { Router } = require('express');
const router = new Router();
//Extraemos las funciones del controller
//->Extraer funciones de la tabla Franquicia
var { getFranquicias, getFranquicia, updateFranquicia, deleteFranquicia, createFranquicia } = require('../controllers/franquiciaController');
//definimos las rutas de los endpoints y que función realizará
//->Rutas para la tabla franquicia
router.get('/franquicia', getFranquicias);
router.get('/franquicia/:id', getFranquicia);
router.post('/franquicia', createFranquicia);
router.put('/franquicia/:id', updateFranquicia)
router.delete('/franquicia/:id', deleteFranquicia);
//exportación
module.exports = router;