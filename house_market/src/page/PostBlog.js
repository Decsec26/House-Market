import React from 'react'
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector} from 'react-redux';
import { crearBlog } from '../actions/blog';

import { Vista_previaBlog } from '../components/blog/Vista_previaBlog'
import { Header } from '../components/Header/header'
import { Banner_page } from '../components/vistas/Banner_page'
import { Vista_popular } from '../components/vistas/Vista_popular'

import dbInfoBlog from '../data/arrays/blog_info'
import dbImagenes from '../data/arrays/imagenes'


export const PostBlog = () => {

    const dispatch = useDispatch();

     const [ formValues, handleInputChange ] = useForm({
        usuario: '',
        titulo: '',
        descripcion: '',
        contenido: '',
        img:''
    });

    const { usuario, titulo, descripcion, contenido, img} = formValues;

    console.log(usuario, titulo, descripcion, contenido, img)

    

    function extractFilename(path) {
        if (path.substr(0, 12) == "C:\\fakepath\\")
            return path.substr(12); // modern browser
        var x;
        x = path.lastIndexOf('/');
        if (x >= 0) // Unix-based path
            return path.substr(x+1);
        x = path.lastIndexOf('\\');
        if (x >= 0) // Windows-based path
            return path.substr(x+1);
        return path; // just the filename
        }

        const subirblog = (e) => {
                e.preventDefault();

                    let imgs = extractFilename(img)
                    dispatch(crearBlog(usuario, titulo, descripcion, contenido, imgs))
                    console.log("Holis")
                
            }
  return (

     <>
      
      <Header />
      <Banner_page Page={"BLOGS"}/>

      <div className='grid-col21'>
        <div className='blogind-contenido'>
          
          <div>
        <form  onSubmit={ subirblog }>
            <div>
                <label for="usuario">Usuario : </label>
                <input type="text" id="usuario" placeholder="usuario"
                        name="usuario" className='descripcion_grid__input' onChange={handleInputChange} required></input>
            </div>
            <div>
                <label for="titulo">Iitulo</label>
                <input type="text" id="titulo" placeholder="titulo"
                       name="titulo" className='descripcion_grid__input' onChange={handleInputChange} required></input>
            </div>
            <div>
                <label for="desc">Description</label>
                <textarea id="desc" name="descripcion"  rows="2"
                          placeholder="Description" className='descripcion_grid--textarea' onChange={handleInputChange} required>
                </textarea>
            </div>
            <div>
                <label for="contenido">Contenido</label>
                <textarea id="contenido" name="contenido"  rows="2"
                          placeholder="Description" className='descripcion_grid--textarea' onChange={handleInputChange} required>
                </textarea>
            </div>
            <div>
                <label for="img">Upload Image</label>
                <input type="file" id="img"
                       name="img" className='descripcion_grid__input' accept="image/png, image/jpeg" onChange={handleInputChange} required></input>
            </div>
            <div>
                <button className='btn-publicarBlog boton--primario'>PUBLICAR BLOG</button>
            </div>
        </form>
    </div>
          
         
        </div>

        <div className='blog-sugerencias'>
          

          <div>
            <h4 className='popular-titulo'>Popular</h4>
            <div className='grid-col2'>
              {
                dbImagenes.map( (info) => {
                  return <Vista_popular info={info} />
                })
              }
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}
