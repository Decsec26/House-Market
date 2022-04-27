import React from 'react'
import { Vista_previaBlog } from '../components/blog/Vista_previaBlog'
import { Header } from '../components/Header/header'
import { Banner_page } from '../components/vistas/Banner_page'
import { PostBlog } from './PostBlog'

import dbInfoBlog from '../data/arrays/blog_info'
import dbImagenes from '../data/arrays/imagenes'
import { Vista_popular } from '../components/vistas/Vista_popular'
import { useNavigate } from 'react-router-dom'

export const Blog = () => {

  const navigate = useNavigate();

    const navigatePost = (e) =>{
         e.preventDefault();

         navigate(`/blogPost`)
    }

  return (
    <>
      
      <Header />
      <Banner_page Page={"BLOGS"}/>

      <div className='grid-col21'>
        <div className='blog-contenido grid-col2'>
          
          {
            dbInfoBlog.map( (blog) =>{
            
              return <Vista_previaBlog blogg={blog} />
            })
          }
          
         
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
