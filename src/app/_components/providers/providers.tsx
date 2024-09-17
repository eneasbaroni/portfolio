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
          {duration: 1, ease: 'linear', onComplete: next}),
        animate(path.current,
          {d:[`M 0 ${DH * 0.3} Q ${DW / 2} ${-DH * 0.3} ${DW} ${DH * 0.3} L ${DW} ${DH} Q ${DW / 2} ${DH} 0 ${DH} L 0 ${DH * 0.3}`,`M 0 0 Q ${DW / 2} 0 ${DW} 0 L ${DW} ${DH} Q ${DW / 2} ${DH * 0.4} 0 ${DH} L 0 0`]},  
        
          {duration: 1.02}
        )
      }}
      enter={(next) => {
        animate(svg.current, 
          {top: [0, -DH]},
          {duration: 1, ease: 'linear'}
        ),
        animate(path.current,
          {d: [`M 0 0 Q ${DW / 2} 0 ${DW} 0 L ${DW} ${DH} Q ${DW / 2} ${DH * 0.4} 0 ${DH} L 0 0`, `M 0 0 Q ${DW / 2} 0 ${DW} 0 L ${DW} ${DH} Q ${DW / 2} ${DH} 0 ${DH} L 0 0`]},
          {duration: 0.9}
        )
        animate(content.current,
          {opacity: [0, 1], y: [20, 0]},
          {duration: 0.3, delay: 0.9, onComplete: next}
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