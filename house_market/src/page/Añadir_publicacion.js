import React, { useEffect, useState } from 'react'
import { Elegir_Categoria } from '../components/Añadir_Producto/Elegir_Categoria'

import { useDispatch, useSelector } from 'react-redux';
import { obtenerCategorias } from '../actions/categoria';
import { Header } from '../components/Header/header';
import { Elegir_Direccion } from '../components/Añadir_Producto/Elegir_Direccion';
import { Cargar_datos } from '../helpers/cargar_datos';
import { useParams } from 'react-router-dom';

export const Añadir_publicacion = ( {informacion = {}}, {index = 1} ) => {
    

  Cargar_datos()

  const {vista} = useParams()

  console.log(vista)

    const [screen, setScreen] = useState(<Elegir_Direccion />);

    function SetScreens( vistas) {
  
        if (vistas === 1) {
          return <Elegir_Direccion />
        } else if (vistas === 2) {
           return <Elegir_Categoria />
        } else if (vistas === 3) {
            return <p>de</p>
        };
        
    };

  return (
    <>
        <Header />
        <Elegir_Categoria />

        
    </>
    
  )
}
