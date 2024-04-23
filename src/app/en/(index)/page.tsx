const Home = () => {
    return (
        <main id="home">
            <div>
                <div className="homeDesktop">
                    <h1 className='h1'>WEB DEVELOPER </h1>
                    <h1 className='h1 text-end'>& <span>G</span>RAPHIC <span>D</span>ESIGNER</h1>
                    <h1 className='h1 text-center'>BASED IN CORDOBA,</h1>
                    <h1 className='h1'>ARGENTINA.</h1>
                </div>
                <div className="homeMobile">
                    <h1 className='h1'>WEB DEVELOPER </h1>
                    <h1 className='h1'>& <span>G</span>RAPHIC</h1>
                    <h1 className='h1 text-end'><span>D</span>ESIGNER FROM</h1>                  
                    <h1 className='h1 text-end'>CORDOBA,</h1>
                    <h1 className='h1'>ARGENTINA.</h1>
                </div>

                <p className="mainText">Hi! I am Eneas.</p>
                <p className="mainText">I am a Web Developer, grapgic designer and Architect.</p>
                <p className="mainText">Currently working as a freelance developer</p> 

            </div>

        </main>
    )
}

export default Home