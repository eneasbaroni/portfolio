const Home = () => {
    return (
        <main id="home">
            <div>
                <div className="homeDesktop">
                    <h1 className='h1'>DESARROLLADOR WEB</h1>
                    <h1 className='h1 text-end'>Y <span>D</span>ISEÑADOR <span>G</span>RAFICO</h1>
                    <h1 className='h1 text-center'>DE CORDOBA,</h1>
                    <h1 className='h1'> ARGENTINA.</h1>
                </div>
                <div className="homeMobile">
                    <h1 className='h1'>DESARROLLADOR</h1>
                    <h1 className='h1'>WEB Y</h1>
                    <h1 className='h1'><span>D</span>ISEÑADOR </h1>
                    <h1 className='h1 text-end'><span>G</span>RAFICO DE</h1>
                    <h1 className='h1 text-center'>CORDOBA,</h1>
                    <h1 className='h1'> ARGENTINA.</h1>
                </div>

                <p className="mainText">Hola! Mi nombre es Eneas.</p>
                <p className="mainText">Soy desarrollador Web, diseñador gráfico y Arquitecto.</p>
                <p className="mainText">Actualmente me encuentro trabajando como desarrollador freelance</p>

            </div>

        </main>
    )
}

export default Home