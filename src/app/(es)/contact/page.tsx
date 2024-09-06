import Greet from "./components/Greet"

const Contact = () => {
       
    return (
        <main id="contact">
            <div className='projectMind'>
                <p className='mainText'>Tenés algun proyecto en mente?</p>
                <a className='mailme' href="mailto:eneasbaroni@gmail.com?Subject=Contacto%20desde%20web%20personal"><h1 className='h1'>HABLEMOS!</h1></a>
                <Greet/>
                <a href="#medias" className='media'><p>↓</p></a>
            </div>


            <div className='linksContainer' id="medias">
                <a href="#app" className='mailmeArrow'><p>↑</p></a>
                <div>
                    <p className='mainText'>o puedes encontrame en las redes</p>
                    

                    <div><a className="mediaLink h1" href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer"><span>L</span>INKEDIN</a></div>
                    <div><a className="mediaLink h1" href="https://wa.me/+5493512110423" target="_blank" rel="noreferrer">WHA<span>T</span>SAPP</a></div>
                    <div><a className="mediaLink h1" href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer"><span>G</span>ITHUB</a></div>
                    <div><a className="mediaLink h1" href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer">INSTAGR<span>A</span>M</a></div>
                    <a className="cv" href="/docs/CV_BARONI_Eneas.pdf" target="_blank" rel="noreferrer" download>
                        <p className='mainText'>Descargar <span>C</span>urriculum <span>V</span>itae</p>                        
                    </a>                    
                </div>
            </div>
        </main>
    )
}

export default Contact