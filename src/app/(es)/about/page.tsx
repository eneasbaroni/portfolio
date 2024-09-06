'use client'
import { useState } from "react"

const About = () => {

    const [hstActive, setHstActive] = useState<number | null>(null)



  return (
    <main id="about">


        <h1 className="h2">MI HISTORIA</h1>
        <div className="historyContainer">
            <div className="history" onMouseEnter={() => setHstActive(0)} onMouseLeave={() => setHstActive(null)}>
                <img src="./images/about/hst-01.svg" alt="icon" className="hstImg" />
                <div className={`hst${hstActive === 0 ? ' hstActive' : ''}`}>
                    <h3>ARQU<span className="nautica">I</span>TECTUR<span className="nautica">A</span></h3>
                    <p>SOY <span className="bigilla">ARQUITECTO</span>, RECIBIDO DE LA UNC. TENGO PASIÓN POR LA <span className="bigilla">ARQUITECTURA MINIMALISTA Y BRUTALISTA</span>. UN GRAN AMOR AL HORMIGÓN Y EL METAL</p>
                </div> 
            </div>
            <div className="history" onMouseEnter={() => setHstActive(1)} onMouseLeave={() => setHstActive(null)}>
                <img src="./images/about/hst-02.svg" alt="icon" className="hstImg" />
                <div className={`hst${hstActive === 1 ? ' hstActive' : ''}`}>
                    <h3>D<span className="nautica">I</span>SEÑO</h3>
                    <p>DESDE CHICO FUI UN CURIOSO DEL <span className="bigilla">ARTE</span> Y PODER LLEVAR ESO HACIA EL <span className="bigilla">DISEÑO</span> FUE EL CAMINO QUE MARCO MI VIDA. EN LOS AÑOS DE FACULTAD HICE DIFERENTES CURSOS DE <span className="bigilla">DISEÑO GRÁFICO</span> QUE ME PERMITIERON ADENTRARME EN LA <span className="bigilla">RESOLUCIÓN DE PROBLEMAS</span> MEDIANTE EL DISEÑO.</p>
                </div>                
            </div>
            <div className="history" onMouseEnter={() => setHstActive(2)} onMouseLeave={() => setHstActive(null)}>
                <img src="./images/about/hst-03.svg" alt="icon" className="hstImg" />
                <div className={`hst${hstActive === 2 ? ' hstActive' : ''}`}>
                    <h3>DES<span className="nautica">A</span>RROL<span className="nautica">L</span>O</h3>
                    <p>DE LA UNIÓN DEL <span className="bigilla">ARTE, DISEÑO</span> Y LA CAPACIDAD DE PODER CREAR COSAS DESDE CERO ES QUE NACE ESTA NUEVA FACETA COMO <span className="bigilla">DESARROLLADOR WEB</span>. DONDE ME PERMITO CONJUGAR TODAS LAS EXPERIENCIAS Y APTITUDES ADQUIRIDAS.</p>
                </div> 
            </div>
        </div>







       {/*  <h1 className="h2">APASIONADO<br/>CREATIVO<br/>RESOLUTIVO</h1>
        <img src='/images/portfolio.png' alt="selfie"/>
      
        <div className="infoContainer">
            <div className="aboutText">
                <h2 className="h2">ARQUITECTO</h2>                  
                <div><p>Soy Arquitecto, recibido de la UNC. Tengo pasión por la arquitectura minimalista y brutalista. Un gran amor al hormigon y el metal</p></div>
            </div>

            <div className="aboutText">
                <h2 className="h2">DISEÑADOR</h2>                 
                <div><p>Desde chico fui un curioso del arte y poder llevar eso hacia el diseño fue el camino que marco mi vida. En los años de facultad hice diferentes cursos de diseño gráfico que me permitieron adentrarme en la resolucion de problemas mediante el diseño</p></div>                       
            </div>
            
            <div className="aboutText">
                <h2 className="h2">DESARROLLADOR</h2>                  
                <div><p>De la union del arte, diseño y la capacidad de poder crear cosas desde cero es que nace esta nueva faceta como desarrolador web. Donde me permito conjugar todas las experiencias y aptitudes adquiridas</p></div>
            </div>
        </div> */}
    </main>
  )
}

export default About