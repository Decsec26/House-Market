import React from 'react';
import { Header_Logeado } from '../components/Header/Header_Logeado';
import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import '../css/style.css'
import styled from 'styled-components'
import {MenuLateral} from '../components/menuLateral/menuLateral';
import usuario from '../data/img/usuario.png';
import { Link } from 'react-router-dom';


const correo= localStorage.getItem("nombre");
const nombre= localStorage.getItem("user");

export const Pag_user = () => {

  return (
    <>
      <Header_Logeado />
        <br></br>
        <hr className="hreditado"></hr>
        <div className=" p-0">
          <div className="row">
            <div className="col-3 menuMargen">
                <MenuLateral></MenuLateral>
            </div>
            <div className="col-9 padding1">
              <div className="ContenedorCartillasPublicacion">
                Informacion sobre sus publicaciones
              </div>
              <div className="infoUsuario">
                <div className="row">
                  <div className="col-15">
                    <div className="rectangulo1">
                      <img src={usuario} alt="" width="80" height="80"></img>
                    </div>
                  </div>
                  <div className="col-85">
                    <div className="rectangulo2">
                    <h3>Bienvenido {nombre}</h3>
                    <p className="informacionRegistro"><b>USUARIO DESDE:</b> 23/03/22 (1 day, 16 hours)</p>  
                    <p className="informacionRegistro"><b>E-MAIL:</b> {correo}</p> 
                    </div>
                    <div className="row">
                      <div className="col-50">
                        <Link className="letrasEnlace" to="">Editar Perfil</Link>
                      </div>
                      <div className="col-50">
                        <Link className="letrasEnlace" to="">Visitar mi Página de Negocios</Link>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
    
    </>
  )


}



