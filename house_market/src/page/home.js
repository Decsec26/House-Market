import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { Footer } from '../components/Footer/footer'
import { Header } from '../components/Header/header'
import { Catalogo_inicio } from '../components/home/Catalogo_inicio'
import { FormBuscar } from '../components/home/FormBuscar'
import { Galeria_Inicio } from '../components/home/Galeria_Inicio'
import { Nosotros } from '../components/home/Nosotros'
import { Direccion_empresa } from '../components/nosotros/Direccion_empresa'

import { useDispatch, useSelector } from 'react-redux';
import { obtenerCategorias } from '../actions/categoria';
import { Cargar_datos } from '../helpers/cargar_datos';

export const Home = () => {

    Cargar_datos()

  return (
   <>
      <Header />

        <div className="Banner_inicio">
            <div className="Banner_inicio__informacion no-padding">
                <h4>Ofrecerte un buen servicio es nuestra pasión</h4>
                <h1>Busca tu nuevo hogar AQUI</h1>

                <Link to="/allcatalogo" className="boton boton--secundario informacion-Blog__boton">Ver Catálogo</Link>
            </div>
        </div>

        <FormBuscar />
    


        <Nosotros />





        <Catalogo_inicio />

        <div className="Banner-inicio-contacto">
            <div className="Banner-inicio-contacto__info">
                <div className="Banner-inicio-contacto__info--aviso">
                    <h2>¿Necesita servicios </h2>
                    <h4>de Mantenimiento?</h4>
                </div>
                <div className="Banner-inicio-contacto__info--contacto">
                    <a href="entrada.html" className="boton boton--secundario informacion-Blog__boton">Ver servicios</a>
                </div>
            </div>
        </div>
   
        <Galeria_Inicio />

       <Direccion_empresa /> 

        <Footer />

   </>
  )
}
