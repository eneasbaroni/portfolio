'use client'

import { useEffect, useState } from "react"
import FooterMobile from "./FooterMobile"
import FooterDesktop from "./FooterDesktop"

const Footer = () => {   
    const [viewWidth, setViewWidth] = useState<number>()

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
            {viewWidth && viewWidth < 576 && <FooterMobile/>}
            {viewWidth && viewWidth >= 576 && <FooterDesktop/>}
        </>
    )
}

export default Footer