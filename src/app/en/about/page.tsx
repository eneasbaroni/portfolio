const About = () => {
  return (
    <main id="about">
        <h1 className="h2">PASSIONATE <br/>CREATIVE <br/>RESOLUTIVE</h1>
        <img src='/images/portfolio.png' alt="selfie"/>
      
        <div className="infoContainer">
            <div className="aboutText">
                <h2 className="h2">ARCHITECT</h2>                  
                <div><p>I am an architect, graduated from UNC. I have a passion for minimalist and brutalist architecture. A strong love for concrete and metal</p></div>
            </div>

            <div className="aboutText">
                <h2 className="h2">DESIGNER</h2>                 
                <div><p>Since I was child, I have curious about art and being able to mix that with design was a way of life. In University I studied graphic design, that allowed me to go deep into the problem solving with design</p></div>                       
            </div>
            
            <div className="aboutText">
                <h2 className="h2">DEVELOPER</h2>                  
                <div><p>From the union of art, design and the ability to create things from scratch was born this new facet as a web developer. Where I let myself combine all the experiences and skills acquired</p></div>
            </div>
        </div>
    </main>
  )
}

export default About