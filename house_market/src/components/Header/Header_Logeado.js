import React, {useState} from 'react'
import LOGO from '../../data/img/HOUSE_MARKET_logo.png'
import { Outlet, Link } from "react-router-dom";


const borrarToken=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("token-init-date");
    localStorage.removeItem("usuario");
    localStorage.removeItem("nombre");
    localStorage.removeItem("user");
    this.props.history.push('/')
    try{
      this.props.auth.setAuthStatus(false)
      this.props.auth.setUser(null)
      
    } catch (err) {
      console.log(err);
    }
}

export const Header_Logeado = () => {



  return (
    <>  

          <header className="header2 no-padding">
              <div className="contenedor header-contenedor">

                  <div className="header-informacion">

                      <div className="header-informacion__logo">
                          <Link to='/'>
                              <img src={LOGO} alt="LOGO" height="100%" width="100%"></img>
                          </Link>
                      </div>

                      <div className="header-informacion__opciones">

                          <div className="header-informacion__opciones--buscarIcon2 ">
                            
                              

                              <Link to="publicar/producto" className="linkBotones hi" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg> Publicar</Link>
                              
                              <a href="" className="hi">
                              <Link to="" className="linkBotones" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    </svg> Usuario</Link>
                            </a>
                              
                                            
                              <Link to="/" onClick={borrarToken} className="linkBotones" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
                                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                                    </svg> Salir</Link>
                              
                          </div>
                      </div>

                  </div>

                  

              </div>
          </header> 
    </>
  )
}
