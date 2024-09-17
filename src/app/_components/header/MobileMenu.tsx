import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const anim = {
    enter: {
        y: ['-100vh'],
        clipPath: ['ellipse(100% 100% at 50% 0%)'],
    },

    while: {
        y: ['0vh'],
        clipPath: ['ellipse(100% 117% at 50% 0%)'],
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
            clipPath :{duration: 0.4, delay: 0.3, ease: [0.76, 0, 0.24, 1],}
        }
    },

    exit: {
        y: ['-100vh'],
        clipPath: ['ellipse(120% 90% at 50% 0%)'],
        transition: {
            duration: 3,
            ease: [0.76, 0, 0.24, 1],
            clipPath :{duration: 0.4, ease: [0.76, 0, 0.24, 1],}
        }
    }
}



const MobileMenu = () => {
    const pathname = usePathname()
    const [navbarOpen, setNavbarOpen] = useState(false)

    const open = () => {
        setNavbarOpen(true)
    }

    const close: () => void = () => {
        setTimeout(() => {
            setNavbarOpen(false)
        }, 600)
    }

    const handleMenu = () => {
        navbarOpen ? close() : open()
    }

    return (
        <header>
            {pathname.startsWith("/en") ? <Link href="/en" className='linkHome'>Eneas Baroni ®</Link> : <Link href="/" className='linkHome'>Eneas Baroni ®</Link>}
            <div className="menu">
                <img className="menuIcon" width={25} src='/images/menu.svg' alt="menu" onClick={handleMenu} />
            </div>
            <AnimatePresence>

                {navbarOpen &&
                    <motion.div className="mobileNavbar"
                        variants={anim}
                        initial="enter"
                        animate="while"
                        exit='exit'
                    >
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
                            </div> :
                            <div className='mobileLinks'>
                                <Link href="/" className="navItem" onClick={close}><span>I</span>nicio</Link>
                                <Link href="/about" className="navItem" onClick={close}>Sobre <span>M</span>i</Link>
                                <Link href="/works" className="navItem" onClick={close}><span>T</span>rabajos</Link>
                                <Link href="/contact" className="navItem" onClick={close}>Contact<span>O</span></Link>
                            </div>
                        }
                    </motion.div>
                }
            </AnimatePresence>


        </header>
    )
}

export default MobileMenu