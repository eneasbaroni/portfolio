
import Skills from "@/app/(es)/about/components/Skills"
import Hanger from "./components/Hanger"
import History from "./components/History"
import Journey from "./components/Journey"


import Why from "./components/Why"


const About = () => { 

  return (
    <main id="about">
        <History/>
        <Journey/>  
        <Why/>   
        <Skills/>
        <Hanger/>   
      
    </main>
  )
}

export default About