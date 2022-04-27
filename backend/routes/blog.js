const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  crearBlog,
  getBlog
} = require("../controllers/blog");


const router = Router();

// Obtener eventos 
router.get('/', getBlog );

// Crear un nuevo evento
router.post(
   '/new/blog',
    crearBlog 
);

module.exports = router;