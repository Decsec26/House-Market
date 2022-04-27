import React, { useState } from 'react'
import agregar from '../../data/img/AgregarFotos.png'
import { useForm } from '../../hooks/useForm'

export const Form_ventasCasas = () => {

    const adr = [1,2,3,4,5,6,7,8,9,10,11,12]
    
    const [ formValues, handleInputChange ] = useForm({
        titulo: '',
        descripcion: '',
        moneda:'LPS.',
        precio: '',
        recamaras: '1',
        baños: '1',
        estacionamientos: '0',
        construccion: '',
        anunciante: '',
        mantenimiento: '',
        lote: '',
        altura: '',
        añoConstruccion: '',
        tipoPisos: '',
        niveles: '',
        numeroPiso: '',
        piscina: '',
        balcon: '',
        cbox1: '',
        cbox2: '',
        cbox3: '',cbox4: '',cbox5: '',cbox6: '',cbox7: '', cbox8: '',
        cbox9: '',cbox10: '',cbox11: '',cbox12: '',cbox13: '',cbox14: '',cbox15: '',cbox16: '',
        cbox17: '',cbox18: '',cbox19: '',cbox20: '',cbox21: '', cbox22: '',
        cbox23: '',cbox24: '',cbox25: '',cbox26: '',cbox27: '',cbox28: '',
        cbox29: '', cbox30: '', cbox31: '',
        cbox32: '',cbox33: '',cbox34: '',cbox35: '',cbox36: '',cbox37: '',cbox38: '',
        contacto: '',
        emailContacto: '',
        telefonoContacto: '',
    });

   console.log(formValues)
    
    const AgregarImg = () => {
        return(
            <div className='descripcion_grid__col2--imgsp'>
                <a className='icon-agregar-img'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera-plus icon-agregar-img" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="13" r="3" />
                    <path d="M5 7h2a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h2m9 7v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                    <line x1="15" y1="6" x2="21" y2="6" />
                    <line x1="18" y1="3" x2="18" y2="9" />
                    </svg> </a>
            </div>
        )
    }

    const ResumenGratis = () =>{
        return(
            <div className='resumen-pagpost'>

                <h4>Resumen</h4>

                <div className='div__linea--separador'></div>

                <div className='resumen-pagpost__total'>
                    <p>Total</p>
                    <p className='resumen-pagpost__total--cant'>0 LPS.</p>
                </div>

                <button className='Boton-PublicarPost'>Publicar</button>

                <p className='resumen-pagpost__aviso'>Este sitio es seguro.</p>
                <p className='resumen-pagpost__aviso'>Sus datos privados estan protegidos.</p>

            </div>
        )
    }

    const ResumenPremium = () =>{
        return(
            <div className='resumen-pagpost'>

                <h4>Resumen</h4>

                <div className='div__linea--separador'></div>

                <div className='resumen-pagpost__detalles'>
                    <p>Anuncio Premium Alquiler</p>
                    <div className='resumen-pagpost__tde'>
                        <p>90 Dias</p>
                        <p>350 LPS.</p>
                    </div>
                </div>

                <div className='div__linea--separador'></div>

                <div className='resumen-pagpost__total'>
                    <p>Total</p>
                    <p className='resumen-pagpost__total--cant'>350 LPS.</p>
                </div>

                <div className='div__linea--separador'></div>

                <div>
                    <p>Seleccione método de pago</p>
                    <label><input type="radio" value="Paypal"></input> Paypal</label><br></br>
                    <label><input type="radio" value="VISA"></input> Visa, MasterCard, Amex</label><br></br>
                </div>

                <div className='div__linea--separador'></div>

                <button className='Boton-PublicarPost'>Publicar</button>

                <p className='resumen-pagpost__aviso'>Este sitio es seguro.</p>
                <p className='resumen-pagpost__aviso'>Sus datos privados estan protegidos.</p>

            </div>
        )
    }

    const [screen, setScreen] = useState(<ResumenGratis />);
    
    function setScreens(e) {
        if (e === 1) {
            setScreen(<ResumenGratis />)
        } else if (e === 2) {
           setScreen(<ResumenPremium />)
        } else if (e === 3) {
            
        };
    };
  return (
   <>
     <div className='descripcion_grid--2c'>
            <div className='descripcion_grid__col1'>
                <h4>Descripción</h4>
                <div className='div_tituloDescrip'>
                    <input name='titulo' onChange={handleInputChange} className='descripcion_grid--input' placeholder='Titulo' requirede='true'></input>
                    <textarea name='descripcion' onChange={handleInputChange} className='descripcion_grid--textarea' placeholder='Escriba una descripción'></textarea>
                </div>
                

                <div className='div__linea--separador'></div>
                

                <h4>Detalles</h4>

                <div className=''>
                    <select name='moneda' onChange={handleInputChange} className='descripcion_grid--select'>
                        <option value="LPS." selected>LPS.</option>
                        <option value="$" >US$</option>
                    </select>
                    <input name='precio' onChange={handleInputChange} placeholder='Precio' className='descripcion_grid__input'></input>
                    
                    <select name='recamaras' onChange={handleInputChange} className='descripcion_grid--select' required>
                        <option disabled selected>Recámaras</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                        <option value="6" >6</option>
                        <option value="7" >7</option>
                        <option value="8" >8</option>
                        <option value="9" >9</option>
                    </select>
                    <select name='baños' onChange={handleInputChange} className='descripcion_grid--select'>
                        <option disabled selected>Baños</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                    </select>
                    <select name='estacionamientos' onChange={handleInputChange} className='descripcion_grid--select'>
                        <option disabled selected>Estacionamientos</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                    </select>
                    <input placeholder='M2 de construccion' name='construccion' onChange={handleInputChange} className='descripcion_grid__input'></input>
                    <select placeholder='Tipo de anunciante' name='anunciante' onChange={handleInputChange} className='descripcion_grid--select'>
                         <option disabled selected>Anunciante</option>
                        <option value="Propietario" >Propietario</option>
                        <option value="Agente" >Agente</option>
                        <option value="Constructora" >Constructora</option>
                    </select>
                </div>
                
                
                <div className='div__linea--separador'></div>

                <h4>mas Detalles</h4>
                <div>
                     <input placeholder='Costos de Mantenimiento' name='mantenimiento' onChange={handleInputChange} className='descripcion_grid__input'></input>
                    <input placeholder='Tamaño del lote (M2)' name='lote' onChange={handleInputChange} className='descripcion_grid__input'></input>
                    
                    <input placeholder='Altura' name='altura' onChange={handleInputChange} className='descripcion_grid__input'></input>
                    <select name='añoConstruccion' onChange={handleInputChange} className='descripcion_grid--select'>
                        <option disabled selected>Año de construcción</option>
                        <option value="2010" >2010</option>
                        <option value="2015" >2015</option>
                        <option value="1800" >1800 a.c</option>
                        <option value="2000" >2000</option>
                    </select>
                    <select name='tipoPisos' onChange={handleInputChange} className='descripcion_grid--select'>
                        <option disabled selected>Tipo de pisos</option>
                        <option value="Piedra" >Piedra</option>
                        <option value="Mármol" >Mármol</option>
                        <option value="Granito" >Granito</option>
                        <option value="Ceramica" >Ceramica</option>
                    </select>
                    <select name='niveles' onChange={handleInputChange} className='descripcion_grid--select'>
                        <option disabled selected>Niveles</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                    </select>
                    <select name='numeroPiso' onChange={handleInputChange} className='descripcion_grid--select'>
                        <option disabled selected>Piso numero</option>
                        <option value="Planta baja" >Planta baja</option>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                    </select>
                    <select name='piscina' onChange={handleInputChange} className='descripcion_grid--select'>
                        <option disabled selected>Piscina</option>
                        <option value="si" >si</option>
                        <option value="no" >no</option>
                       
                    </select>
                    <select name='balcon' onChange={handleInputChange} className='descripcion_grid--select'>
                        <option disabled selected>Balcon/terraza</option>
                        <option value="Balcon/terraza" >Balcon/terraza</option>
                        <option value="Balcon" >Balcon</option>
                        <option value="Terraza" >Terraza</option>
                       
                    </select>
               
                </div>
               
                
                <div className='descripcion_grid--multipleSelect'>
                    <div className='descripcion_grid--multipleSelectDIV'>
                        <label><input type="checkbox" name="cbox1" onChange={handleInputChange} value="Cerca de Escuelas"></input> Cerca de Escuela</label><br></br>
                        <label><input type="checkbox" name="cbox2" onChange={handleInputChange} value="Cerca del trafico"></input> Cerca del Trafico</label><br></br>
                        <label><input type="checkbox" name="cbox3" onChange={handleInputChange} value="Frente al mar"></input> Frente al mar</label><br></br>
                        <label><input type="checkbox" name="cbox4" onChange={handleInputChange} value="Frente al rio"></input> Frente al Rio</label><br></br>
                        <label><input type="checkbox" name="cbox5" onChange={handleInputChange} value="Estacionamineto de visitas"></input> Estacionamiento de visitas</label><br></br>
                        <label><input type="checkbox" name="cbox6" onChange={handleInputChange} value="Seguridad 24 horas"></input> Seguridad 24 Horas</label><br></br>
                        <label><input type="checkbox" name="cbox7" onChange={handleInputChange} value="Lavanderia interna"></input> Lavanderia interna</label><br></br>
                        <label><input type="checkbox" name="cbox8" onChange={handleInputChange} value="Sala de estudio"></input> Sala de Estudio</label><br></br>
                        <label><input type="checkbox" name="cbox9" onChange={handleInputChange} value="Salon de fiestas"></input> Salon de fiestas</label><br></br>
                        <label><input type="checkbox" name="cbox10" onChange={handleInputChange} value="Parque infantil"></input> Parque infantil</label><br></br>
                        <label><input type="checkbox" name="cbox11" onChange={handleInputChange} value="Desayunador"></input> Desayunador</label><br></br>
                        <label><input type="checkbox" name="cbox12" onChange={handleInputChange} value="Patio"></input> Patio</label><br></br>
                        <label><input type="checkbox" name="cbox13" onChange={handleInputChange} value="Terreno en esquina"></input> Terreno en esquina</label><br></br>
                        <label><input type="checkbox" name="cbox14" onChange={handleInputChange} value="Garaje techado"></input> Garaje techado</label><br></br>
                        <label><input type="checkbox" name="cbox15" onChange={handleInputChange} value="Area social"></input> Área Social</label><br></br>
                        <label><input type="checkbox" name="cbox16" onChange={handleInputChange} value="Internet"></input> Internet</label><br></br>
                        <label><input type="checkbox" name="cbox17" onChange={handleInputChange} value="Planta electrica"></input> Planta Eléctrica</label><br></br>
                        <label><input type="checkbox" name="cbox18" onChange={handleInputChange} value="Bar"></input> Bar</label><br></br>
                        <label><input type="checkbox" name="cbox19" onChange={handleInputChange} value="Nevera"></input> Nevera</label><br></br>
                        
                        
                    </div>
                    <div>
                        <label><input type="checkbox" name="cbox20" onChange={handleInputChange} value="Vista al Mar"></input> Vista al Mar</label><br></br>
                        <label><input type="checkbox" name="cbox21" onChange={handleInputChange} value="Vista a las Montañas"></input> Vista a las Montañas</label><br></br>
                        <label><input type="checkbox" name="cbox22" onChange={handleInputChange} value="Frente a lago"></input> Frente al lago</label><br></br>
                        <label><input type="checkbox" name="cbox23" onChange={handleInputChange} value="Energia electrica"></input> Energia electrica</label><br></br>
                        <label><input type="checkbox" name="cbox24" onChange={handleInputChange} value="Cuarto y ba{o de empleada"></input> Cuarto y baño de empleada</label><br></br>
                        <label><input type="checkbox" name="cbox25" onChange={handleInputChange} value="2 o mas elevadores"></input> 2 o mas elevadores</label><br></br>
                        <label><input type="checkbox" name="cbox26" onChange={handleInputChange} value="Deposito"></input> Depósito</label><br></br>
                        <label><input type="checkbox" name="cbox27" onChange={handleInputChange} value="Jardin"></input> Jardín</label><br></br>
                        <label><input type="checkbox" name="cbox28" onChange={handleInputChange} value="Gimnasio"></input> Gimnasio</label><br></br>
                        <label><input type="checkbox" name="cbox29" onChange={handleInputChange} value="Aire condicionado"></input> Aire condicionado</label><br></br>
                        <label><input type="checkbox" name="cbox30" onChange={handleInputChange} value="Calle sin salida"></input> Calle sin salida</label><br></br>
                        <label><input type="checkbox" name="cbox31" onChange={handleInputChange} value="Sala y comedor"></input> Sala y Comedor</label><br></br>
                        <label><input type="checkbox" name="cbox32" onChange={handleInputChange} value="Closet"></input> Closet</label><br></br>
                        <label><input type="checkbox" name="cbox33" onChange={handleInputChange} value="Lobby"></input> Lobby</label><br></br>
                        <label><input type="checkbox" name="cbox34" onChange={handleInputChange} value="Jacuzzi"></input> Jacuzzi</label><br></br>
                        <label><input type="checkbox" name="cbox35" onChange={handleInputChange} value="Cuarto Gaming"></input> Cuarto Gaming</label><br></br>
                        <label><input type="checkbox" name="cbox36" onChange={handleInputChange} value="Estufa"></input> Estufa</label><br></br>
                        <label><input type="checkbox" name="cbox37" onChange={handleInputChange} value="Dispensador de agua caliente"></input> Dispensador de agua caliente</label><br></br>
                        <label><input type="checkbox" name="cbox38" onChange={handleInputChange} value="Lavadora"></input> Lavadora</label><br></br>
                    </div>
                </div>

                 <div className='div__linea--separador'></div>

                <h4>Datos acerca del Anunciante</h4>
                <div>
                    <input placeholder='Contactar a' name='contacto' onChange={handleInputChange} className='descripcion_grid__input'></input>
                    <input placeholder='Email' name='emailContacto' onChange={handleInputChange} className='descripcion_grid__input'></input>
                    <input placeholder='Telefono' name='telefonoContacto' onChange={handleInputChange} className='descripcion_grid__input'></input>
                </div>
                
                       
            </div>

            <div className='descripcion_grid__col2'>
               <div className='descripcion_grid__col2--imgGrande'>
                   <a><img src={agregar}></img></a>              
               </div>

               <div className='descripcion_grid__col2--imgspeque'>
                    { adr.map( ( num, index ) => {
                        return <AgregarImg key={index} />
                    })}
               </div>

                <div className='div__linea--separador'></div>


            </div>

            
     </div>
     <div className='seleccionar-plan-post'>
        
        
        <div className='seleccionar-plan-post__col1'> 
            <h4>Seleccionar Plan</h4>
            
            <div className='grid-col2'>
                <div className='card_selectPlan centrar-texto'>
                    <h5>Anunciar Gratis</h5>
                    <div className='card_selectPlan--dias'>
                        <p>90 días</p>
                    </div>
                    <p>8 imágenes</p>

                   
                    <h4>Gratis</h4>
                    <button className='Boton-SeleccionarPlan boton--primario' onClick={() => setScreens(1)} >SELECCIONAR PLAN</button>
                </div>
                
                <div className='card_selectPlan centrar-texto'>
                    <h5>Anunciar Premium</h5>
                    <div className='card_selectPlan--dias'>
                        <p>120 días</p>
                    </div>
                    <p>20 imágenes</p>

                   
                    <h4>350 LPS.</h4>
                    <button className='Boton-SeleccionarPlan boton--primario' onClick={() => setScreens(2)}>SELECCIONAR PLAN</button>
                </div>
            </div>

            <div>
                <h4>Seleccionar Resaltador</h4>
                <div className='grid-col2'>
                   <ul class="check-card">
                    <li class="check-card-item">
                        <input type="checkbox" id="check01" name="check" value="1"></input>
                        <label for="check01" class="radio"></label>
                        <div class="check-card-bg"></div>
                        <div class="check-card-body">
                            <div class="check-card-toggle">
                                <span></span>
                                <span></span>
                            </div>
                            <div class="check-card-body-in">
                                <h3 class="check-card-title">SIN RESALTAR</h3>
                                <p class="check-card-description">
                                    No prioridad <br></br>
                                    GRATIS.
                                </p>
                            </div>
                            <div class="check-card-cancel">CANCEL</div>
                        </div>
                    </li>
                </ul> 
                   <ul class="check-card">
                    <li class="check-card-item">
                        <input type="checkbox" id="check02" name="check2" value="2"></input>
                        <label for="check02" class="radio"></label>
                        <div class="check-card-bg"></div>
                        <div class="check-card-body">
                            <div class="check-card-toggle">
                                <span></span>
                                <span></span>
                            </div>
                            <div class="check-card-body-in">
                                <h3 class="check-card-title">200 LPS.</h3>
                                <p class="check-card-description">
                                    Resaltador Oro <br></br>
                                    Renueva la publicación <br></br>
                                    Resalta mas comprado <br></br>
                                    Posicionado en Anuncios <br></br>
                                </p>
                            </div>
                            <div class="check-card-cancel">CANCEL</div>
                        </div>
                    </li>
                </ul> 
                   
                </div>
                
                
            </div>
            
        </div>

        <div className='seleccionar-plan-post__col2'>
                {screen}
        </div>

     </div>  
   </>
   
  )
}
