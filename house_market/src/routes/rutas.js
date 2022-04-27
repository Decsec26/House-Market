import React from 'react'
import {  Routes, Switch, Route , Navigate } from "react-router-dom";
import { Home } from '../page/home';
import { All_catalogo } from '../page/all_catalogo';
import { Contacts } from '../page/contacts';
import { Error_404 } from '../page/Error_404';
import { Single_producto } from '../page/Single_producto';
import { Login_Page } from '../page/Login_Page';
import { Registro_Page } from '../page/Registro_Page';
import { Pag_user } from '../page/pag_user';
import { Dashboard } from '../admin/dashboard'
import { Añadir_publicacion } from '../page/Añadir_publicacion';
import { Añadir_publicacion_Form } from '../page/Añadir_publicacion_form';
import { Servicios } from '../page/Servicios';
import { Blog } from '../page/blog';
import { BlogIndividual } from '../page/Blog_ind';
import { PostBlog } from '../page/PostBlog';



const token = localStorage.getItem('token');





export const Rutas = () => {
  return (
     <Routes>
       
      <Route path="/" element={<Home />} />
      <Route path="allcatalogo" element={<All_catalogo />} />
      <Route path="contacto" element={<Contacts />} />
      <Route path="error404" element={<Error_404 />} />
      <Route path="infoProducto" element={<Single_producto />} />
      <Route path="login" element={<Login_Page />} />
      <Route path="registro" element={<Registro_Page />} />
      <Route path="admin/dasboard" element={<Dashboard />} />
      <Route path="*" element={<Error_404 />} />
      <Route path="pag_user" element={<Pag_user />} />
      <Route path="pag_user/publicar/producto" element={<Añadir_publicacion />} />
      <Route path="form" element={<Añadir_publicacion_Form />} />
      <Route path="servicios" element={<Servicios />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blogind/:id" element={<BlogIndividual />} />
      <Route path="blogPost" element={<PostBlog />} />

    </Routes>

  )
}
