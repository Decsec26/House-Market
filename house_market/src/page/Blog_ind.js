import React from 'react'
import { Vista_previaBlog } from '../components/blog/Vista_previaBlog'
import { Header } from '../components/Header/header'
import { Banner_page } from '../components/vistas/Banner_page'
import { PostBlog } from './PostBlog'

import dbInfoBlog from '../data/arrays/blog_info'
import dbImagenes from '../data/arrays/imagenes'
import { Vista_popular } from '../components/vistas/Vista_popular'
import { useNavigate, useParams } from 'react-router-dom'

export const BlogIndividual = () => {

    const {id} = useParams()
    let blogActivo = {};

    dbInfoBlog.map( (blog) => {
        if(blog.id === id){
            blogActivo = blog
        }
    })

    const navigate = useNavigate();

    const navigatePost = (e) =>{
         e.preventDefault();

         navigate(`/blogPost`)
    }

  return (
    <>
      
      <Header />
      <Banner_page Page={"BLOG"}/>

      <div className='grid-col21'>
        <div className='blogind-contenido '>
          
         <div className='blogind-contenido'>
             <img src={blogActivo.img}></img>
         </div>
         <h5> por { blogActivo.usuario}</h5>
          
          <h4>{blogActivo.titulo}</h4>
         
        <p>{blogActivo.contenido}</p>

        <div className='blogind-comentarios'>
            <textarea id="desc" name="descripcion"  rows="2"
                          placeholder="Comentar" className='descripcion_grid--textarea' required>
            </textarea>

             <button className='btn-publicarBlog boton--primario btn-comentarblog'>COMENTAR</button>

        </div>

        
        </div>

        

        <div className='blog-sugerencias'>
          <button className='btn-publicarBlog boton--primario' onClick={navigatePost}>PUBLICAR BLOG</button>

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