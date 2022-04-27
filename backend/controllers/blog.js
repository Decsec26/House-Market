var Blog = require('../models/blog');
var multer = require('multer');
var fs = require('fs');
var path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });

const getBlog = async( req, res = response ) => {

    const blogs = await Blog.find();
                                

    res.json({
        ok: true,
        categorias
    });
}

const crearBlog = async ( req, res = response) => {
  
 upload.single('image')

 console.log(req.body.img)

 let obj = {
     usuario: req.body.usuario,
     titulo: req.body.titulo,
     descripcion: req.body.descripcion,
     contenido: req.body.contenido,
     img: {
         data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.body.img)),
        contentType: 'image/png'
     }
 }

  try {
    
    await Blog.save(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });


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
  crearBlog,
  getBlog
};