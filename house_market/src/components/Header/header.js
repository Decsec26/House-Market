import React, {useState} from 'react'
import LOGO from '../../data/img/HOUSE_MARKET_logo.png'
import { Outlet, Link } from "react-router-dom";
import  Modal  from '../Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {

    const { uid } = useSelector(state => state.auth);
    

  return (
    <>  

          <header className="header no-padding">
              <div className="contenedor header-contenedor">

                  <div className="header-informacion">

                      <div className="header-informacion__logo">
                          <Link to="/">
                              <img src={LOGO} alt="LOGO" height="100%" width="100%"></img>
                          </Link>
                      </div>

                      <div className="header-informacion__opciones">

                          <div className="header-informacion__opciones--contacto">

                              <div className="header-informacion__opciones--contacto__redesSociales">
                                  <a href="">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                      </svg>
                                  </a>
                                   
                                  <a href="">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                          <rect x="4" y="4" width="16" height="16" rx="4" />
                                          <circle cx="12" cy="12" r="3" />
                                          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                      </svg>
                                  </a>
                              </div>

                          </div>

                          <div className="header-informacion__opciones--login">
                          <div className='loginYRegistro'><Link to="/login">LOGIN</Link></div>
                          <dvi className='loginYRegistro'><Link to="/pag_user">PERFIL</Link></dvi>
                          </div>
                          <div className="header-informacion__opciones--buscarIcon">
                              <a href="">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                      <circle cx="10" cy="10" r="7" />
                                      <line x1="21" y1="21" x2="15" y2="15" />
                                  </svg>
                              </a>
                          </div>
                      </div>

                  </div>

                  <div className="header-filtros">

                       <Link to="/">INICIO</Link>
                        <Link to="/Allcatalogo">CATALOGO</Link>
                        <Link to="/Allcatalogo">ALQUILER</Link>
                        <Link to="/contacto">SOBRE NOSOTROS</Link>
                        <Link to="/servicios">SERVICIOS</Link>
                        <Link to="/galeria">GALERIA</Link>
                        <Link to="/blog">BLOG</Link>


                  </div>

              </div>
          </header> 
    </>
  )
}
