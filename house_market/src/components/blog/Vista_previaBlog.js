import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Vista_previaBlog = ( {blogg} ) => {
    
    const navigate = useNavigate();

    const navegarBlog = (e) =>{
         e.preventDefault();

         navigate(`/blogind/${ blogg.id }`)
    }
  return (
   <>
    
    
        <div class="blog-box" onClick={navegarBlog}>
            <div class="blog-img">
                <img class="img-fluid" src={blogg.img} alt="" />
            </div>
            <div class="blog-content">
                <div class="title-blog">
                    <h4>{blogg.titulo}</h4>
                    <p>{blogg.descripcion}</p>
                </div>
            </div>
        </div>
   
   </>
  )
}
