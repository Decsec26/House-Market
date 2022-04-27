import { fetchSinToken, fetchConToken } from "../helpers/fetch_auth";

import { types } from '../types/types';
import { startLoading } from "./ui";

export const obtenerCategorias = () => {
    return async (dispatch) => {
        
        const resp = await fetchSinToken(
            "categoria/",
            {}
        );

        console.log(resp)

        const body = await resp.json();
        
        if (body.ok) {
            console.log( body.categorias )
            dispatch( categorias( body.categorias ) )
            dispatch( namesCategorias( body.categorias ))
            dispatch(startLoading())
        } else {
            // Swal.fire("Error", body.msg, "error");
            console.Console("error", body.msg);
        }
  };
};

export const namesCategorias = ( dataNames ) => {
    return async (dispatch) => {   
        const areas = [];
        const nombre_areas = [];
        let count = 0;

        dataNames.map( (categoria) => {
           
            areas.push(categoria.area)
           
        })

        setTimeout(() => {
            
   
            let result = areas.filter((item,index)=>{
                return areas.indexOf(item) === index;
                })
            

            dispatch(namesCategoriasRedux(result))

        }, 3000);
    }
}

export const namesCategoriasRedux = (names) => {
    return ({
        type: types.namesCategorias,
        names: names
    })
}

export const categorias = ( data ) => {
    return ({type: types.showCategorias,
    payload: data})
};

export const registroCategoria = (area, seccion, subseccion) => {
    return async (dispatch) => {
        
        const resp = await fetchSinToken(
            "categoria/new/catg",
            {area, seccion, subseccion},
            "POST"
        );

        console.log(resp)
        const body = await resp.json();
        
        console.log(body)
        if (body.ok) {
            alert("Guardado con exito")
        } else {
            // Swal.fire("Error", body.msg, "error");
            console.Console("error", body.msg);
        }
  };
};

