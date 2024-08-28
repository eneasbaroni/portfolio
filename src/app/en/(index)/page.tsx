const Home = () => {
    return (
        <main id="home">
            <div>
                <div className="homeDesktop">
                    <h1 className="h1">
                        <span style={{marginLeft: '-2.5vw'}}>W</span>EB <span>D</span>EVELOPER<br/>
                        <span className="clashRegular">
                            & GRAPHIC DESIGNER<br/>
                        </span>
                        <span className="clashSmall">
                            FROM CORDOBA,
                        </span>
                        <span className="clashSmall" style={{marginTop:'-1.2vw'}}>                        
                            AR<span style={{marginLeft: '2vw'}}>g</span>ENTINA.
                        </span>
                    </h1>
                </div>
                <div className="homeMobile">
                    <h1 className="h1">
                        <span style={{marginLeft: '-2.5vw'}}>W</span>EB <span>D</span>EVELOPER<br/>
                        <span className="clashRegular">
                            & GRAPHIC DESIGNER<br/>
                        </span>
                        <span className="clashSmall">
                            FROM CORDOBA,
                        </span>
                        <span className="clashSmall" style={{marginTop:'-1.2vw'}}>                        
                        ARG<span style={{marginLeft: '2vw', marginRight: '0.1vw'}}>e</span>NTINA.
                        </span>
                    </h1>
                </div>

                <p className="mainText">
                    Hi! I am Eneas.<br/>
                    I am a full-stack web developer, with experience in graphic design and architecture.<br/>
                    Currently working as a freelance developer.
                </p> 
            </div>

        </main>
    )
}

export default Home