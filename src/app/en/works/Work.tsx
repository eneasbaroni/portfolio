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
        <a className="workLink" href={`${work.web}`} target="_blank" rel="noreferrer">+ See the Project</a>          
        <div className="techImg">
          {work.technologies.map((tech, index) => (
            <img key={index} src={`/images/technologies/${tech}.svg`} alt={tech} className="tech" />
          ))}            
        </div>
      </div>
    </div>   
  )
}

export default Work