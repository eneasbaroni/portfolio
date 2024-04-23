const About = () => {
  return (
    <main id="about">
        <h1 className="h2">APASIONADO<br/>CREATIVO<br/>RESOLUTIVO</h1>
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
        </div>
    </main>
  )
}

export default About