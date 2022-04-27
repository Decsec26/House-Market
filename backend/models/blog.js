const { Schema, model } = require("mongoose");

const BlogSchema = Schema({
   usuario: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  contenido: {
    type: String,
    required: false,
  },
  img:{
    data: Buffer,
    contentType: String,
  },
});

module.exports = model("Blog", BlogSchema);