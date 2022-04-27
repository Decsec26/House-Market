import React, { useEffect, useState } from 'react'
import { Elegir_Categoria } from '../components/Añadir_Producto/Elegir_Categoria'

import { useDispatch, useSelector } from 'react-redux';
import { obtenerCategorias } from '../actions/categoria';
import { Header } from '../components/Header/header';
import { Elegir_Direccion } from '../components/Añadir_Producto/Elegir_Direccion';
import { Cargar_datos } from '../helpers/cargar_datos';
import { useParams } from 'react-router-dom';
import { Form_ventasCasas } from '../components/Añadir_Producto/Form_ventasCasas';

export const Añadir_publicacion_Form = ( ) => {
    
  Cargar_datos()

  const { ubicacion } = useSelector(state => state.post);
  const { categoria } = useSelector(state => state.post);

  const {departamento, ciudad, direccion} = ubicacion;
  const { categoriaActive, seccion, subseccion} = categoria;


  const FormularioDescripcion = ({categori, section, subsection}) => {
      console.log(categori)
    if ( (categori === "Bienes Raíces") && (section === "Venta") && (subsection === "Casas")) {
        return <Form_ventasCasas />
    }else if( (categori === "Bienes Raíces") && (section === "Venta") && (subsection === "Apartamentos")) {
        return <p>VENTA DE APARTAMENTOS</p>
    }else if( (categori === "Bienes Raíces") && (section === "Alquiler") && (subsection === "Casas")) {
        return <p>ALQUILER DE CASAS</p>
    }else if( (categori === "Bienes Raíces") && (section === "Alquiler") && (subsection === "Apartamentos")) {
        return <p>ALQUILER DE APARTAMENTOS</p>
    }else{
        return <p>holi</p>
    }
  }

  return (
    <>
        <Header />
        
        <div className='Añadir-productos__elegirCATG'>
           
                <FormularioDescripcion categori={categoriaActive} section={seccion} subsection={subseccion} />
           
        </div>
        
    </>
    
  )
}