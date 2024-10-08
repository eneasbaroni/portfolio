const actualYear = new Date().getFullYear()

const FooterMobile = () => {

    return (

        <footer className='mobileFooter'>
            <img className='logo' src='/images/logo.svg' alt='logo' />
            <div>
                <a className='mailme' href="mailto:eneasbaroni@gmail.com?Subject=Contacto%20desde%20web%20personal">eneasbaroni@gmail.com</a>
                <p>Córdoba, Argentina</p>
            </div>
            <div>
                <a className="mobileFooterLink" href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer">INSTAGRAM</a>
                <a className="mobileFooterLink" href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer">GITHUB</a>
                <a className="mobileFooterLink" href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer">LINKEDIN</a>
            </div>
            <div className='footerRights'>
                <p>Design and development by Eneas Baroni</p>
                <p>Eneas Baroni ® {actualYear} all rights reserved</p>
            </div>
        </footer>

    )
}

export default FooterMobile