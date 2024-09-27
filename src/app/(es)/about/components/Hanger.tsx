import { Cormorant } from "next/font/google"

const cormorant = Cormorant({
    subsets: ["latin"],
    style: "italic",
})

const Hanger = () => {
  return (
    <div id="hanger">
        {/* <h2 className="h2">
            El encuentro entre arte y diseño para pintar el futuro con código.
        </h2> */}
        <h2 className="h2">
            EL ENCU<span className="ntc">E</span>NTRO EN<span className="ntc ntcML ntcMr">t</span>RE <span className='bigilla h2'>TECNOLOGÍA Y DISEÑO</span> PARA <span className="ntc ntcMl">p</span>INTAR EL FUTURO CON <span className='bigilla h2'>CÓDIGO.</span>
        </h2>
    </div>
  )
}
export default Hanger
