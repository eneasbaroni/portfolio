import Link from "next/link"
import { usePathname } from "next/navigation"

const DesktopMenu = () => {
    const pathname = usePathname()
    return (

        <header>
            {pathname.startsWith("/en") ? <Link href="/en" className='linkHome'>Eneas Baroni ®</Link> : <Link href="/" className='linkHome'>Eneas Baroni ®</Link>}
            
            {pathname.startsWith("/en") ?
                <div className="navbarContainer">
                    <Link href="/en/" className={`navItem ${pathname === '/' ? 'active' : ''}`}>HOME</Link>
                    <Link href="/en/about" className={`navItem ${pathname === '/about' ? 'active' : ''}`}>ABOUT</Link>
                    <Link href="/en/works" className={`navItem ${pathname === '/works' ? 'active' : ''}`}>WORKS</Link>
                    <Link href="/en/contact" className={`navItem ${pathname === '/contact' ? 'active' : ''}`}>CONTACT</Link>
                </div>:
                <div className="navbarContainer">
                    <Link href="/" className={`navItem ${pathname === '/' ? 'active' : ''}`}>INICIO</Link>
                    <Link href="/about" className={`navItem ${pathname === '/about' ? 'active' : ''}`}>SOBRE MI</Link>
                    <Link href="/works" className={`navItem ${pathname === '/works' ? 'active' : ''}`}>TRABAJOS</Link>
                    <Link href="/contact" className={`navItem ${pathname === '/contact' ? 'active' : ''}`}>CONTACTO</Link>
                </div>
            }

        </header>
    )
           
}

export default DesktopMenu