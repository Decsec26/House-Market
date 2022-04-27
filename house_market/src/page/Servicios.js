import React from 'react'
import { Footer } from '../components/Footer/footer'
import { Header } from '../components/Header/header'
import { Card_Services } from '../components/servicios/Card_Services'
import { Banner_page } from '../components/vistas/Banner_page'
import dbEmpresaElectricas from '../data/arrays/empresasElectricidad'

export const Servicios = () => {
  return (
    <>
        <Header />

      <Banner_page Page={"SERVICIOS"}/>

      <div className="Banner-inicio-contacto">
            <div className="Banner-inicio-contacto__info">
                <div className="Banner-inicio-contacto__info--aviso">
                    <h2>¿Quiere publicar su empresa?</h2>
                    <h4>Llámenos y anuncie sus servicios aquí</h4>
                </div>
                <div className="Banner-inicio-contacto__info--contacto">
                    <h4>+504 9845-XXXX</h4>
                    <h4>empresa@gmail.com</h4>
                    <a href="entrada.html" className="boton boton--secundario informacioon-Blog__boton">Contáctenos</a>
                </div>
            </div>
        </div>

      <div className="buscarXfiltros__informacion">
         <h1>ELECTRICIDAD</h1>
      </div>
        
        <div className='grid-col3'>

            {
                dbEmpresaElectricas.map( (empresa, index) => {
                    return <Card_Services empresaE={empresa} key={index} />
                })
            }
            
        </div>

      <div className='marginservicios'>
          <Footer />
      </div>
        
       

    </>
  )
}
