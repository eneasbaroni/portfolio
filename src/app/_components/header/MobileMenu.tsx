import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const MobileMenu = () => {
    const pathname = usePathname()
    const [topPosition, setTopPosition] = useState("-100%")
    const [navbarOpen, setNavbarOpen] = useState(false) 
    
    const open = () => {
        setNavbarOpen(true)
        setTimeout(() => {            
            setTopPosition("0%")
        }, 1)
    }

    const close: () => void = () => {
        setTopPosition("-100%")
        setTimeout(() => {            
            setNavbarOpen(false)
        }, 500)
    }

    const handleMenu = () => {
        navbarOpen ? close() : open()
    }    

    return (
        <header>
            {pathname.startsWith("/en") ? <Link href="/en" className='linkHome'>Eneas Baroni ®</Link> : <Link href="/" className='linkHome'>Eneas Baroni ®</Link>}
            <div className="menu">
                <img className="menuIcon" width={25} src='./images/menu.svg' alt="menu" onClick={handleMenu} />
            </div>

            {navbarOpen &&
                <div className="mobileNavbar" style={{ top: topPosition }}>                    
                    <div className='mobileHeader'>
                        <h3>Eneas Baroni ®</h3>
                        <h3 onClick={close}>X</h3>
                    </div>
                    {pathname.startsWith("/en") ?  
                        <div className='mobileLinks'>
                            <Link href="/en/" className="navItem" onClick={close}><span>H</span>OME</Link>
                            <Link href="/en/about" className="navItem" onClick={close}>AB<span>O</span>UT</Link>
                            <Link href="/en/works" className="navItem" onClick={close}><span>W</span>ORKS</Link>
                            <Link href="/en/contact" className="navItem" onClick={close}>Contac<span>T</span></Link>
                        </div>:
                        <div className='mobileLinks'>
                            <Link href="/" className="navItem" onClick={close}><span>I</span>nicio</Link>
                            <Link href="/about" className="navItem" onClick={close}>Sobre <span>M</span>i</Link>
                            <Link href="/works" className="navItem" onClick={close}><span>T</span>rabajos</Link>
                            <Link href="/contact" className="navItem" onClick={close}>Contact<span>O</span></Link>
                        </div>
                    }
                </div>                
            }

        </header>
    )
}

export default MobileMenu