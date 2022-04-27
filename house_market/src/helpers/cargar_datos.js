import { useEffect } from "react"

import { useDispatch, useSelector } from 'react-redux';
import { obtenerCategorias } from "../actions/categoria";

export const Cargar_datos = () => {
    
    const dispatch = useDispatch()
    const {loading} = useSelector( state => state.ui)

    useEffect(() => {

        if(!loading){
           console.log("frFR")
            dispatch(obtenerCategorias())
       }
    }, [])

    if (!loading) {
        return (
            <div className="cargando">
                <div class="preloader"></div>
                <h1>Cargando...</h1>
            </div>


        )
    }


}
