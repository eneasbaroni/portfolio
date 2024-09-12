'use client'

import { useEffect, useState } from "react"
import FooterMobile from "./FooterMobile"
import HomeFooter from "./HomeFooter"
import { usePathname } from "next/navigation"
import FooterDesktop from "./FooterDesktop"

const Footer = () => {   
    const [viewWidth, setViewWidth] = useState<number>()

    const pathname = usePathname()

    const handleViewWidth = () => {
        setViewWidth(window.innerWidth)
    }

    useEffect(() => {
        handleViewWidth()
        window.addEventListener('resize', handleViewWidth)
        return () => {
            window.removeEventListener('resize', handleViewWidth)
        }
    }, [])
   

    return (
        <>            
            {viewWidth && viewWidth < 576 ? 
                <FooterMobile/>:
                pathname === "/" ? 
                    <HomeFooter/> :
                    pathname === "/en" ? 
                        <HomeFooter/> :  
                        <FooterDesktop/>
            }
            {/* {viewWidth && viewWidth >= 576 && pathname === "/" ? <HomeFooter/> : pathname === "/en" ? <HomeFooter/> :  <FooterDesktop/>} */}
            
        </>
    )
}

export default Footer