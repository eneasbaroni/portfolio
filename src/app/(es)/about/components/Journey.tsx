import { Cormorant } from "next/font/google"

const cormorant = Cormorant({
    subsets: ["latin"],
    style: "italic",
})

const Journey = () => {
  return (
    <div id='journey'>
        <h1 className="h2">MI VIAJE</h1>

        <div className="journeysContainer">
            <div className="journey">
                <div className="titles">
                    <h3>FULL STACK DEVELOPER</h3>
                    <h4 className={cormorant.className}>FREELANCE</h4>
                </div>
                <div className="info">
                    <p>Junio 2021 - Actualmente</p>
                </div>
            </div>
            <div className="journey">
                <div className="titles">
                    <h3>FULL STACK DEVELOPER</h3>
                    <h4 className={cormorant.className}>FREELANCE</h4>
                </div>
                <div className="info">
                    <p>Junio 2021 - Actualmente</p>
                </div>
            </div>
            <div className="journey">
                <div className="titles">
                    <h3>FULL STACK DEVELOPER</h3>
                    <h4 className={cormorant.className}>FREELANCE</h4>
                </div>
                <div className="info">
                    <p>Junio 2021 - Actualmente</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Journey