'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

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

    
    return (
        <footer id="desktopFooter">
            <motion.div className="footerContainer"
                ref={targetRef}
                style={{ borderRadius: border, margin }}  
            >
                <div className="footerLinks">
                    <div className="pageLinks">
                        <Link href="/" className="navItem">HOME</Link>
                        <Link href="/about" className="navItem">ABOUT</Link>
                        <Link href="/works" className="navItem">WORKS</Link>
                        <Link href="/contact" className="navItem">CONTACT</Link>
                    </div>

                    <div className="socialLinks">
                        <h4>SOCIAL MEDIA</h4>
                        <a href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer">Instagram</a>
                    </div>
                </div>
                <h3>ENEAS BARONI</h3>
            </motion.div>
        </footer>
    )
}
export default FooterDesktop