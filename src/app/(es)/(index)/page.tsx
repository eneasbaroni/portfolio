const Home = () => {
    return (
        <main id="home">
            <div>
                <div className="homeDesktop">                    
                    <h1 className="h1">
                        <span>D</span>ESARROLL<span>A</span>DOR WEB<br/>
                        <span className="clashRegular">
                            +DISEÑADOR GRAFICO<br/>
                        </span>
                        <span className="clashSmall">
                            DE CORDOBA, 
                        </span>
                        <span className="clashSmall" style={{marginTop:'-1.2vw'}}>                        
                            ARG<span style={{marginLeft: '2vw', marginRight: '0.1vw'}}>e</span>NTINA.
                        </span>
                    </h1>
                </div>
                <div className="homeMobile">                   
                    <h1 className="h1">
                        <span style={{marginLeft: '-2.5vw'}}>W</span>EB <span>D</span>EVELOPER<br/>
                        <span className="clashRegular">
                            +DISEÑADOR GRAFICO<br/>
                        </span>
                        <span className="clashSmall">
                            DE CORDOBA,
                        </span>
                        <span className="clashSmall" style={{marginTop:'-1.2vw'}}>                        
                            ARG<span style={{marginLeft: '2vw', marginRight: '0.1vw'}}>e</span>NTINA.
                        </span>
                    </h1>
                </div>

                <p className="mainText">
                    Hola! Mi nombre es Eneas. <br/>
                    Soy desarrollador Web full-stack, con experiencia en diseñado gráfico y arquitectura.<br/>
                    Actualmente me encuentro trabajando como desarrollador freelance.
                </p>       
            </div>

        </main>
    )
}

export default Home