import React from 'react'

export const Vista_popular = ({info}) => {
  return (
    <div className='vista-popular__card'>
        <div className='vista-popular__card--img'>
            <img src={info.img}></img>
        </div>
        <p>{info.nombre}</p>
    </div>
  )
}
