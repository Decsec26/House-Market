import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { obtenerCategorias } from '../../actions/categoria';
import { Maps } from '../vistas/Maps';
import { Cargar_datos } from '../../helpers/cargar_datos';
import { useForm } from '../../hooks/useForm';

import ubicaciones from '../../admin/data/ubicaciones'
import { setCategoria, setUbicacionAction } from '../../actions/postAction';
import { useNavigate } from 'react-router-dom';


export const Elegir_Categoria = () => {
    
    Cargar_datos() 
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { data } = useSelector( state => state.catg );
    const { names } = useSelector( state => state.catg );
    const {loading} = useSelector( state => state.ui)
    const [checking, setChecking] = useState(true);
    const [ActiveArea, setActiveArea] = useState("Bienes Raíces");
    const [Activeseccion, setActiveSeccion] = useState("Venta");
    const [ActiveSubseccion, setActiveSubSeccion] = useState("Apartamentos");

    let seccionesAct =[]
    let subseccionesAct =[]

    const [ubicacion, setUbicacion] = useState();
    const [ciudad, setCiudad] = useState("Tegucigalpa");
    const [departamento, setDepartamento] = useState("Francisco Morazan");

    let departamentosALL = []
    let departamentoFiltro = []

    const [ formValues, handleInputChange ] = useForm({
        direccion: '',
    });

    const setSeccion = (e) =>{
        e.preventDefault();
        console.log(e.target.value)
        setActiveArea(e.target.value)
    }

    const setSubSeccion = (e) =>{
        e.preventDefault();
        console.log(e.target.value)
        setActiveSeccion(e.target.value)
    }

    const setSubSeccionActive = (e) =>{
        e.preventDefault();
        console.log(e.target.value)
        setActiveSubSeccion(e.target.value)
    }

    const ImprimirSecciones = () =>{
        data.map( ( nombreSecn, index ) => {
            if(ActiveArea === nombreSecn.area){
                seccionesAct.push(nombreSecn.seccion)
            }
        })
     
        let result = seccionesAct.filter( (item,index) =>{
            return seccionesAct.indexOf(item) === index;
        })

        return result.map( (nombre, index) => {
            return <option value={ nombre } onClick={setSubSeccion} >{nombre}</option>
        })
      
    } 

    const ImprimirSubSecciones = () =>{

        data.map( ( nombreSecn, index ) => {
            if(ActiveArea === nombreSecn.area){
                seccionesAct.push(nombreSecn.seccion)
            }
        })
        
        let resultSecciones = seccionesAct.filter( (item,index) =>{
            return seccionesAct.indexOf(item) === index;
        })

        data.map( ( nombreSecn, index ) => {
            if((ActiveArea === nombreSecn.area) & (Activeseccion === nombreSecn.seccion)){
                subseccionesAct.push(nombreSecn.subseccion)
            }
        })
        
        let result = subseccionesAct.filter( (item,index) =>{
            return subseccionesAct.indexOf(item) === index;
        })

        return result.map( (nombre) => {
            return <option value={nombre} onClick={setSubSeccionActive}>{nombre}</option>
        })
    }

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
        const datosCATG = {
            categoriaActive: ActiveArea,
            seccion: Activeseccion,
            subseccion: ActiveSubseccion,
        }

        const datosDIREC = {
            departamento: departamento,
            ciudad: ciudad,
            direccion: formValues.direccion
        }

        dispatch(setCategoria(datosCATG))
        dispatch(setUbicacionAction(datosDIREC))

        navigate("/form")
    }

 
  return (
    <div className='Añadir-productos__elegirCATG'>
        <div className="Single-Producto-col-derecha__form-campo">
                <h3>Elija una Categoria</h3>     
        </div>
           
        <div className='add_producto-cat'>
            <div className='div-select-catg'>
                <h4 >Categorias</h4>
                <div className='div_opc_categorias'>
                        <select class="form-select__add-catg" size="3" aria-label="size 3 select example">                             
                            {
                                names.map( ( nombreCATG, index ) => {
                                    return <option value={nombreCATG} onClick={setSeccion}>{nombreCATG}</option>
                                })
                            }                                                         
                        </select>            
                </div>
            </div>
                            
            <div className='div-select-catg'>
                <h4 >Sección</h4>
                <div className='div_opc_categorias'>
                        <select class="form-select__add-catg" size="3" aria-label="size 3 select example">
                            <ImprimirSecciones />  
                        </select>            
                </div>
            </div>
            
            <div className='div-select-catg'>
                <h4>Sub Sección</h4>
                <div className='div_opc_categorias'>
                        <select class="form-select__add-catg" size="3" aria-label="size 3 select example">
                            <ImprimirSubSecciones />   
                        </select>            
                </div>
            </div>
        </div>


        <div className='row catg-seleccionada'>
            <p>CATEGORIA SELECCIONADA:</p>
            <p className='margin__left--15'>{ActiveArea} -- {Activeseccion} -- {ActiveSubseccion}</p>
        </div>

    
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

                <input placeholder='DIRECCION EXACTA' name='direccion' onChange={handleInputChange}></input>
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
    </div>
  )
}
