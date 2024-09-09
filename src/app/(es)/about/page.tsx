'use client'
import {Cormorant}  from "next/font/google"
import { useState } from "react"

const cormorant = Cormorant({ 
    subsets: ["latin"], 
    style: "italic",
})

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
                    <p>Soy <span className={cormorant.className}>Arquitecto</span>, recibido de la UNC. Tengo pasión por la <span className={cormorant.className}>arquitectura minimalista y brutalista</span>. Un gran amor por el hormigón y el metal. <br/>
                    Como arquitecto, poseo una sólida comprensión de la estructura, el diseño espacial y la estética, lo que me permite construir <span className={cormorant.className}>interfaces de usuario intuitivas y visualmente atractivas.</span></p>
                </div>  
            </div>
            <div className="history" onMouseEnter={() => setHstActive(1)} onMouseLeave={() => setHstActive(null)}>
                <img src="./images/about/hst-02.svg" alt="icon" className="hstImg" />
                <div className={`hst${hstActive === 1 ? ' hstActive' : ''}`}>
                    <h3>D<span className="nautica">I</span>SEÑO</h3>
                    <p>Desde chico fui un curioso del <span className={cormorant.className}>arte</span> y poder llevar eso hacia el <span className={cormorant.className}>diseño</span> fue el camino que marcó mi vida. En los años de facultad me capacité como <span className={cormorant.className}>diseñador gráfico.</span> Lo que me permitió adentrarme en la <span className={cormorant.className}>resolución de problemas</span> mediante el diseño.<br/>
                    Mi formación en diseño gráfico me otorga una ventaja adicional para crear diseños <span className={cormorant.className}>web estéticamente agradables y funcionales.</span> 
                    </p>
                </div>                
            </div>
            <div className="history" onMouseEnter={() => setHstActive(2)} onMouseLeave={() => setHstActive(null)}>
                <img src="./images/about/hst-03.svg" alt="icon" className="hstImg" />
                <div className={`hst${hstActive === 2 ? ' hstActive' : ''}`}>
                    <h3>DES<span className="nautica">A</span>RROL<span className="nautica">L</span>O</h3>
                    <p>De la unión del <span className={cormorant.className}>arte, diseño</span> y la capcidad de poder crear cosas desde cero es que nace esta nueva faceta como <span className={cormorant.className}>Desarrollador Web</span>. Donde me permito conjugar todas las experiencias y aptitudes adquiridas.</p>
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