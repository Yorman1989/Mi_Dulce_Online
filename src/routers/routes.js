const { Router } = require('express');
var controllerCarrera = require('../controllers/ControllerCarrera');
const router = Router();

router.get('/prueba', controllerCarrera.prueba);
router.post('/Crear', controllerCarrera.saveCarrera);
router.get('/buscar/:id', controllerCarrera.buscarData);
router.get('/buscarAll/:idb?', controllerCarrera.listarTodo);
router.delete('/delete/:id', controllerCarrera.deleteCarrera);
router.put('/actualizar/:id', controllerCarrera.updateCarrera);

module.exports = router;
//export default router;