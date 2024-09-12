import Link from "next/link"
import { usePathname } from "next/navigation"


const HomeFooter = () => {
    const pathname = usePathname()

    //funcion para eliminar /en de la url
    const removeEn = (url: string) => {
        if (url.startsWith("/en")) {
            // Remove "/en/" from the beginning of the URL
            if (url.endsWith("en")) {
                return ('/')
            }
            return url.slice(3);
          } else {
            // URL doesn't contain "/en/", return as is
            return url;
          }       
    }

    return (

        <footer className="footer">

            <div className="navbarContainer">

                {pathname === '/development'
                    ?
                    <p className="navItem">Design and development by Eneas Baroni</p>
                    :
                    <>
                        <a className="navItem" href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer">INSTAGRAM</a>
                        <a className="navItem" href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer">GITHUB</a>
                        <a className="navItem" href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer">LINKEDIN</a>
                    </>
                }
            </div>
            <div className="langContainer">
                <Link href={`/en${removeEn(pathname)}`} className="languageSelector">EN</Link>          
                <div className="languageSelector">/</div>
                <Link href={`${removeEn(pathname)}`} className="languageSelector">ES</Link> 
            </div>
        </footer>

    )
}

export default HomeFooter