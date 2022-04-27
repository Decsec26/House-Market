import React from 'react'

export const Card_Services = ( {empresaE}) => {
  return (
   <div class="artboard">
 <div class="card">

  <div class="card__side card__side--back">
   <div class="card__cover">
    <h4 class="card__heading">
     <span class="card__heading-span">Información</span>
    </h4>
   </div>
   <div class="card__details">
    <ul>
     <li>{empresaE.ubicacion}</li>
     <li>{empresaE.telefono}</li>
     <li>{empresaE.email}</li>
     <li>REDES SOCIALES</li>
    </ul>
   </div>
  </div>

  <div class="card__side card__side--front">
   <div class="card__theme">
    <div class="card__theme-box">
     <p class="card__subject">Servicios Electricos</p>
     <p class="card__title">{empresaE.nombre}</p>
    </div>
   </div>
  </div>

 </div>
</div>
  )
}
