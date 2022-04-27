import React from 'react'
import { Footer } from '../components/Footer/footer'
import { Header } from '../components/Header/header'
import { MapsContacto } from '../components/contacts/MapsContacto'
import { Contactanos } from '../components/contacts/Contactanos'
import { AreaContacto } from '../components/contacts/AreaContacto'
import { Direccion_empresa_contacto } from '../components/contacts/Direccion_empresa_contacto'
import { Banner_page } from '../components/vistas/Banner_page'


export const Contacts = () => {
  return (
   <>
        <Header />

        <Banner_page Page={"SOBRE NOSOTROS"} />

        <Contactanos />

        <MapsContacto />

        <AreaContacto />
   
        <Footer />
   </>
  )
}
