import { types } from '../types/types';

export const setUbicacionAction = ( ubicacion ) => ({
    type: types.loadedUbicacion,
    payload: ubicacion
});

export const setCategoria = (categoria) => ({
    type: types.loadedCategoria,
    payload: categoria
});

export const setDatos = (datos) => ({
    type: types.loadedDatos,
    payload: datos
})
export const setPlan = (plan) => ({
    type: types.loadedPlan,
    payload: plan
})