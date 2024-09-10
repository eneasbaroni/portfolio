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
            THE MEE<span className="ntc">T</span>ING OF <span className='bigilla h2'>TECHNOLOGY AND DESIGN</span> TO <span className="ntc ntcMl">p</span>AINT THE FU<span className="ntc ntcML ntcMr">t</span>URE WHIT <span className='bigilla h2'>CODE.</span>
        </h2>
    </div>
  )
}
export default Hanger