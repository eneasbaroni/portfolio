'use client'
import { useEffect, useState } from "react"

const skills = [
    'Javascript', 'TypeScript', 'ReactJS', 'Next.js', 'Tailwind', 'AstroJS', 'Angular', 'NodeJS', 'ExpressJS', 'Python', 'Django', 'Git', 'GitHub'
]

const Skills = () => {

    return (
        <div id="skills">
            <h2 className="h2">SKILLS</h2>

            <div className="skillsContainer">
                <div className="carrousel">
                    <div className="crrA"> 
                        {skills.map((skill, index) => (
                            <div className="skill" key={index}>
                                <p>{skill}</p>
                            </div>
                        ))}
                    </div>
                    <div className="crrB"> 
                        {skills.map((skill, index) => (
                            <div className="skill" key={index}>
                                <p>{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="carrousel2">
                    {skills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <p>{skill}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}
export default Skills