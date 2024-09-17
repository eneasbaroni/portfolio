'use client'
import React, { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

const Header = () => {
    const [viewWidth, setViewWidth] = useState<number | null>(null)

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
      {viewWidth === null && <header style={{height:'29px'}}></header>}
      {viewWidth && viewWidth < 576 && <MobileMenu/>}
      {viewWidth && viewWidth >= 576 && <DesktopMenu/>}      
    </>
  )
}

export default Header