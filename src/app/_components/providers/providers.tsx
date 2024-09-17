'use client';

import { useEffect, useRef, useState } from 'react';
import { TransitionRouter } from 'next-transition-router';
import { animate } from 'framer-motion';

const Providers = ({children}: {children: React.ReactNode}) => {
    const svg = useRef<SVGSVGElement>(null!);
    const path = useRef<SVGPathElement>(null!);
    const content = useRef<HTMLDivElement>(null!);

    const [dimensions, setdimensions] = useState({
      height: 0,
      width: 0
  })    

  const DH = dimensions.height
  const DW = dimensions.width


  useEffect(() => {
      const resize = () => {
          setdimensions({
              height: window.innerHeight,
              width: window.innerWidth
          })
      }
      resize()
      window.addEventListener('resize', resize)
      return () => {
          window.removeEventListener('resize', resize)
      }
  }, [])


  return (
    <TransitionRouter
      auto
      leave={(next) => { 
        animate(svg.current, 
          {top: [DH, 0]},
          {duration: 0.8, ease: [0.61, 1, 0.88, 1], onComplete: next}),
        animate(path.current,
          {d:[`M 0 ${DH * 0.8} Q ${DW / 2} 0 ${DW} ${DH * 0.8} L ${DW} ${DH * 1.15} Q ${DW / 2} ${DH * 0.85} 0 ${DH * 1.15} L 0 ${DH * 0.3}`,`M 0 0 Q ${DW / 2} 0 ${DW} 0 L ${DW} ${DH * 1.15} Q ${DW / 2} ${DH * 0.85} 0 ${DH * 1.15} L 0 0`]},  
        
          {duration: 0.85}
        )
      }}
      enter={(next) => {
        animate(svg.current, 
          {top: [0, -DH * 1.15]},
          {duration: 0.8, ease: [0.33, 1, 0.68, 1]}
        ),
        animate(path.current,
          {d: [`M 0 0 Q ${DW / 2} 0 ${DW} 0 L ${DW} ${DH * 1.15} Q ${DW / 2} ${DH * 0.85} 0 ${DH * 1.15} L 0 0`, `M 0 0 Q ${DW / 2} 0 ${DW} 0 L ${DW} ${DH * 1.15} Q ${DW / 2} ${DH * 1.15} 0 ${DH * 1.15} L 0 0`]},
          {duration: 0.78}
        )
        animate(content.current,
          {opacity: [0, 1], y: [20, 0]},
          {duration: 0.7, delay: 0.2, onComplete: next}
        )
      }}     
    > 
        <div>
            
            <svg ref={svg} id='enterSvg'>
                <path ref={path}  fill="var(--third-color)" />
            </svg>
        </div>
        <div ref={content}>
         {children}
        </div>
    </TransitionRouter>
  )
}
export default Providers