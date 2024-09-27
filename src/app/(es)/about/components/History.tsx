'use client'
import { Cormorant } from "next/font/google"
import { useState } from "react"


const cormorant = Cormorant({
    subsets: ["latin"],
    style: "italic",
})


const History = () => {

    const [hstActive, setHstActive] = useState<number | null>(null)

    const handleActive = (index: number) => {
        setHstActive(index)
    }

    return (
        <>
            <h1 className="h2">MI HISTORIA</h1>
            <div className="historyContainer">
                <div className="history" onMouseEnter={() => setHstActive(0)} onMouseLeave={() => setHstActive(null)} onClick={() => handleActive(0)}>
                    <img src="./images/about/hst-01.svg" alt="icon" className="hstImg" />
                    <div className={`hst${hstActive === 0 ? ' hstActive' : ''}`}>
                        <h3>ARQU<span className="nautica">I</span>TECTUR<span className="nautica">A</span></h3>
                        <p>Soy <span className={cormorant.className}>Arquitecto</span>, recibido de la UNC. Tengo pasión por la <span className={cormorant.className}>arquitectura minimalista y brutalista</span>. Un gran amor por el hormigón y el metal. <br />
                            Como arquitecto, poseo una sólida comprensión de <span className={cormorant.className}>la estructura, el diseño espacial y la estética.</span> Esta habilidad de visualizar y organizar la información me permite construir sitios web sólidos y bien estructurados, con una base lógica y coherente. Brindándole al usuario interfaces <span className={cormorant.className}>intuitivas y visualmente atractivas.</span></p>
                    </div>
                    <div className='smallbtn'>
                        <div className="light"></div>
                        <p>CLICK IN!</p>
                    </div>
                </div>
                <div className="history" onMouseEnter={() => setHstActive(1)} onMouseLeave={() => setHstActive(null)} onClick={() => handleActive(1)}>
                    <img src="./images/about/hst-02.svg" alt="icon" className="hstImg" />
                    <div className={`hst${hstActive === 1 ? ' hstActive' : ''}`}>
                        <h3>D<span className="nautica">I</span>SEÑO</h3>
                        <p>Desde chico fui un curioso del <span className={cormorant.className}>arte</span> y poder llevar eso hacia el <span className={cormorant.className}>diseño</span> fue el camino que marcó mi vida.<br />
                            En los años de facultad me capacité como <span className={cormorant.className}>diseñador gráfico.</span> Lo que me permitió adentrarme en la <span className={cormorant.className}>resolución de problemas</span> mediante el diseño.<br />
                            Mi formación en diseño gráfico me otorga una ventaja adicional al poder comprender las <span className={cormorant.className}>necesidades de los usuarios</span> y crear soluciones digitales que sean tanto <span className={cormorant.className}>funcionales como atractivas.</span></p>
                    </div>
                    <div className='smallbtn'>
                        <div className="light"></div>
                        <p>CLICK IN!</p>
                    </div>
                </div>
                <div className="history" onMouseEnter={() => setHstActive(2)} onMouseLeave={() => setHstActive(null)} onClick={() => handleActive(2)}>
                    <img src="./images/about/hst-03.svg" alt="icon" className="hstImg" />
                    <div className={`hst${hstActive === 2 ? ' hstActive' : ''}`}>
                        <h3>DES<span className="nautica">A</span>RROL<span className="nautica">L</span>O</h3>
                        <p>Mi pasión por la <span className={cormorant.className}>creación, el arte y el diseño,</span> me llevaron a explorar el mundo del <span className={cormorant.className}>desarrollo web,</span> donde me permito conjugar todas las experiencias y aptitudes adquiridas. Actualmente dentro del MERN Stack.<br />
                            Desde la conceptualización hasta el lanzamiento, disfruto de todo el proceso del desarrollo web. Me encanta la idea de poder transformar mis diseños en <span className={cormorant.className}>experiencias digitales interactivas</span> y poder brindar soluciones modernas a través del arte y la tecnología.</p>
                    </div>
                    <div className='smallbtn'>
                        <div className="light"></div>
                        <p>CLICK IN!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default History
