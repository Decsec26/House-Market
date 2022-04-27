const { response } = require("express");
const Categoria = require("../models/Categoria");



const getCategorias = async( req, res = response ) => {

    const categorias = await Categoria.find();
                                
    res.json({
        ok: true,
        categorias
    });
}

const crearCategoria = async (req, res = response) => {
  
  const { subseccion} = req.body;

  try {
    
    

    let categoria = new Categoria(req.body);

    console.log(categoria);

    
    await categoria.save();


    res.status(201).json({
      ok: true,
      area: categoria.area,
      seccion: categoria.seccion,
      subseccion: categoria.subseccion,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Verifique los datos",
    });
  }
};

module.exports = {
  crearCategoria,
  getCategorias
};