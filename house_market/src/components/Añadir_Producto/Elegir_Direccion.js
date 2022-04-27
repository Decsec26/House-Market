import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Maps } from '../vistas/Maps';
import { useForm } from '../../hooks/useForm';
import ubicaciones from '../../admin/data/ubicaciones'

export const Elegir_Direccion = () => {

    const [ubicacion, setUbicacion] = useState();
    
    const [ciudad, setCiudad] = useState("Tegucigalpa");
    const [departamento, setDepartamento] = useState("Francisco Morazan");

    let departamentosALL = []
    let departamentoFiltro = []

    const setUbicaciones = (e) =>{
        e.preventDefault();
        console.log(e.target.value)
        setCiudad(e.target.value)
    }
    const setDepartamentoActive = (e) =>{
        e.preventDefault();
        console.log(e.target.value)
        setDepartamento(e.target.value)
    }

    const ImprimirDepartamentos = () => {

        ubicaciones.map( (ubicacionn) => {
            departamentosALL.push(ubicacionn.departamento)
        })

        departamentoFiltro = departamentosALL.filter( (item, index) => {
            return departamentosALL.indexOf(item) === index;
        })

        return departamentoFiltro.map( (nombre) => {
            return <option value={nombre} onClick={setDepartamentoActive}>{nombre}</option>
        })

    }

    const siguientePag = () => {
        
    }

  return (
    <div className='Añadir-productos__elegirCATG'>
        <div className="Single-Producto-col-derecha__form-campo">
            <h3>¿Donde publicaras?</h3>     
        </div>

            
        <div className='row add-post__ubicacion--selects'>
            <select>
                <ImprimirDepartamentos />
            </select>
            <select>
                {
                    ubicaciones.map( (ubicacion, index) =>{
                    if(ubicacion.departamento === departamento){
                        return <option value={ubicacion.nombre} onClick={setUbicaciones}>{ubicacion.nombre}</option>
                    }


                    })  
                }
                

            </select>

            <input placeholder='DIRECCION EXACTA'></input>
        </div>
        
        <div className='div-mapa-elegriubicacion'>
            {

                
                    ubicaciones.map( (ubicaciones) =>{
                    if(ubicaciones.nombre === ciudad){
                        return <Maps ubicacion={ubicaciones.ubicacion} />
                    }
                })
                
                
                
            }
        </div>

        <button className='Boton-ElegirDireccionCONT boton--primario' onClick={siguientePag}>CONTINUAR</button>
   </div>
  )
}
