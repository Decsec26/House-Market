import { types } from '../types/types';

const initialState = {
    ubicacion: {},
    categoria: {},
    datos: {},
    plan: {}
}


export const postReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.loadedUbicacion:
            return {
                ...state,
                ubicacion: action.payload
            }

        case types.loadedCategoria:
                return {
                    ...state,
                    categoria: action.payload
                }

        case types.loadedDatos:
            return {
                ...state,
                datos: action.payload
            }
 
        case types.loadedPlan:
            return {
                ...state,
                plan: action.payload
            }

        default:
            return state;
    }

}