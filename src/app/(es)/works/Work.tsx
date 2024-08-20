import IWork from '@/lib/definitions'
import React from 'react'

interface Props {
    work: IWork,    
}

const Work: React.FC<Props> = ({work}) => {
  return (
    <div className="work" style={{backgroundImage: `url(${work.url})`}}>      
      <a href={`${work.web}`} className="workLink"  target="_blank" rel="noreferrer">
          <h1 className="h2">{work.title.toUpperCase()}</h1>
      </a>
      <div className="workInfo">
        <p className="workType">{work.type}</p>
        <p className="workDescription">{work.description}</p>
        <a className="workLink" href={`${work.web}`} target="_blank" rel="noreferrer">+ Visita el Proyecto</a> 
        {work.github &&         
          <div className='repoLink'>
              <a className="workLink" href={`${work.github}`} target="_blank" rel="noreferrer">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="githubIcon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                Visita el Repositorio
            </a>  
          </div>  
        }      
        <div className="techImg">
          {work.technologies.map((tech, index) => (
            <img key={index} src={`./images/technologies/${tech}.svg`} alt={tech} className="tech" />
          ))}            
        </div>
      </div>
    </div>   
  )
}

export default Work