'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef } from "react"

const Arrow: React.FC<{ size: string }> = ({ size }) => {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg"  width={size}  height={size}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
    )
}

const FooterDesktop = () => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "80% end"]         
        //offset es un arr de 2 valores, el inicio y el final
        // el primer valor de cada arr es el eje del componente que se toma como referencia
        // el segundo valor es el margen de la pantalla que se toma como referencia
    })
 
    const border = useTransform(scrollYProgress, [0, 1], ["0 0 0 0", "5vw 5vw 0 0"])
    const margin = useTransform(scrollYProgress, [0, 1], ["0 0 0 ", "5rem 5rem 0"])

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
        <footer id="desktopFooter">
            <motion.div className="footerContainer"
                ref={targetRef}
                style={{ borderRadius: border, margin }}  
            >   
                <motion.div className="footerLinks"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.5 }}>

                    {pathname.startsWith("/en") ?    
                        <div className="pageLinks">
                            <Link href="/en/" className="navItem">HOME</Link>
                            <Link href="/en/about" className="navItem">ABOUT</Link>
                            <Link href="/en/works" className="navItem">WORKS</Link>
                            <Link href="/en/contact" className="navItem">CONTACT</Link>
                        </div>:
                        <div className="pageLinks">
                            <Link href="/" className="navItem">HOME</Link>
                            <Link href="/about" className="navItem">ABOUT</Link>
                            <Link href="/works" className="navItem">WORKS</Link>
                            <Link href="/contact" className="navItem">CONTACT</Link>
                        </div>
                    }

                    <div className="socialLinks">
                        <h4>SOCIAL MEDIA</h4>
                        <div className="scLink">
                            <a href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer">LinkedIn</a>
                            <Arrow size={'15'}/>
                        </div>
                        <div className="scLink">
                            <a href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer">Github</a>
                            <Arrow size={'15'}/>
                        </div>
                        <div className="scLink">
                            <a href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer">Instagram</a>
                            <Arrow size={'15'}/>
                        </div>
                    </div>

                    <div className="langs">
                        <Link href={`${removeEn(pathname)}`} className="footerRights">Versión en Español</Link>
                        <Link href={`/en${removeEn(pathname)}`} className="footerRights">English Version</Link>
                    </div>
                </motion.div>
                <h3>ENEAS BARONI</h3>
            </motion.div>
        </footer>
    )
}
export default FooterDesktop