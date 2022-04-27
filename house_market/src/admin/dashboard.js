import React, { useEffect, useState } from 'react'
import { Add_categoria } from './components/add_categoria';
import { Header_admin } from './components/header_admin';
import { Post_producto } from './components/post_producto';

import { useDispatch, useSelector } from 'react-redux';

import './css/style_adminV.css'
import { obtenerCategorias } from '../actions/categoria';


export const Dashboard = () => {

    
    
    
    const [screen, setScreen] = useState(<Post_producto />);

    function setScreens(e) {
        if (e === 1) {
            setScreen(<Post_producto />)
        } else if (e === 2) {
           setScreen(<Add_categoria />)
        } else if (e === 3) {
            
        };
    };
    
    return (
        <>
            <Header_admin />

            <div className="dashboard">
                <div className="opciones column">
                    <button type="button" class="btn btn-primary btn-lg btn_opc" onClick={() => setScreens(1)}>Añadir Productos</button>
                    <button type="button" class="btn btn-primary btn-lg btn_opc" onClick={() => setScreens(2)}>Añadir Categorias</button>
                    <button type="button" class="btn btn-primary btn-lg btn_opc" onClick={() => setScreens(3)}>Añadir Filtro</button>
                </div>

                <div className="formularioScreen">
                    {screen}
                </div>
                
            </div>
        
        </> 
        
    )
}