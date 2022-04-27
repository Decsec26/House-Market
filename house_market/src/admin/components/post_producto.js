import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Maps } from '../../components/vistas/Maps';
import { useForm } from '../../hooks/useForm';
import ubicaciones from '../data/ubicaciones'

export const Post_producto = () => {

   
   
    const { data } = useSelector( state => state.catg );
    const { names } = useSelector( state => state.catg );
    const [checking, setChecking] = useState(true);
    const [ActiveArea, setActiveArea] = useState();
    const [Activeseccion, setActiveSeccion] = useState();
    const [ActiveSubseccion, setActiveSubSeccion] = useState();
    const [secciones, setSeccionact] = useState([]);
    const [ubicacion, setUbicacion] = useState();
    
    const [ciudad, setCiudad] = useState("Tegucigalpa");
    const [departamento, setDepartamento] = useState("Francisco Morazan");

    let seccionesAct =[]
    let subseccionesAct =[]
    let departamentosALL = []
    let departamentoFiltro = []
    

    console.log( ActiveArea, Activeseccion, ActiveSubseccion)

    useEffect(() => {
        
        setTimeout(() => {
            setChecking(false)       
        }, 4000);
        
    }, [])
    

    const [ formValues, handleInputChange ] = useForm({
        area: '',
        seccion: '',
        subseccion: '',
    });

    const { area, seccion, subseccion } = formValues;  


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

        console.log(result)

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

        console.log(result)

        return result.map( (nombre) => {
            return <option value={nombre} onClick={setSubSeccionActive}>{nombre}</option>
        })
      
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



    

    if (checking) {
        return (
            <div className="cargando">
                <div class="preloader"></div>
                <h1>Cargando...</h1>
            </div>


        )
    }

  return (
    <div>
       <h3>AGREGAR UN POST NUEVO</h3>
       <br></br>
       

        <form>
            
            <div className="Single-Producto-col-derecha__form-campo">
                <label for="floatingInputValue">Elija una Categoria</label>     
            </div>
            
            <div className='add_producto-cat'>
                <div>
                    <h5 >Categorias</h5>
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
                                
                <div>
                    <h5 >Sección</h5>
                    <div className='div_opc_categorias'>
                            <select class="form-select__add-catg" size="3" aria-label="size 3 select example">
                            
                                <ImprimirSecciones />
                                
                            </select>            
                    </div>
                </div>
                
                <div>
                    <h5>Sub Sección</h5>
                    <div className='div_opc_categorias'>
                            <select class="form-select__add-catg" size="3" aria-label="size 3 select example">
                            
                                <ImprimirSubSecciones />
                                
                            </select>            
                    </div>
                </div>

            </div>

            <div className='row'>

                <p>CATEGORIA SELECCIONADA:</p>
                <p className='margin__left--15'>{ActiveArea} -- {Activeseccion} -- {ActiveSubseccion}</p>

            </div>

            <div className="Single-Producto-col-derecha__form-campo">
                <label for="floatingInputValue">UBICACIÓN</label>     
            </div>

            <div className='add-post__ubicacion column'>
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
                
                <div>
                    {

                      
                           ubicaciones.map( (ubicaciones) =>{
                            if(ubicaciones.nombre === ciudad){
                                return <Maps ubicacion={ubicaciones.ubicacion} />
                            }
                        })
                     
                        
                       
                    }
                </div>
                
                <div>
                    <div className="Single-Producto-col-derecha__form-campo">
                        <label for="floatingInputValue">DESCRIPCION</label>     
                    </div>

                    <div className='add-post__informacion'>
                        <div className='add-post__infoColIz'>
                           <div className='add-post__infoColIz--titulo'> 
                                <input placeholder='Título'></input>
                                <textarea placeholder='Escriba una descripción'></textarea>
                           </div>
                        </div>
                        <div className='add-post__infoColIz--detallesPrecio'>
                            <select>
                                <option>LPS</option>
                                <option>US$</option>
                            </select>

                            <input placeholder=''></input>

                        </div>
                        <aside className='add-post__informacion-fotos'>
                            
                        </aside>
                    </div>

                </div>
                
                
               
            </div>

           
  
        </form>
    </div>
  )
}
