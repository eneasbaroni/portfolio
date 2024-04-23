export const dynamic = 'force-dynamic'
import IWork from "@/lib/definitions"
import Work from "./Work"

const WorkContainer = async () => {
    const URL = process.env.API_URL + '/api/works/en'
    const wokrs: IWork[] = await fetch(URL).then(res => res.json())
    //invertir el orden
    const wokrs2 = wokrs.reverse()
    

  return (
    <div>
        {wokrs2.map((work) => (
            <Work key={work._id} work={work}/>
        ))}
    </div>
  )
}

export default WorkContainer