import { Cormorant } from "next/font/google"

const cormorant = Cormorant({
    subsets: ["latin"],
    style: "italic",
})

const Journey = () => {
  return (
    <div id='journey'>
        <h2 className="h2 h2b">MY JOURNEY</h2>

        <div className="journeysContainer">
            <div className="journey">
                <div className="titles">
                    <h3>BACKEND DEVELOPER TUTOR</h3>
                    <h4 className={cormorant.className}>CODERHOUSE</h4>
                </div>
                <div className="info">
                    <p>November 2023 - Currently</p>
                </div>
            </div>
            <div className="journey">
                <div className="titles">
                    <h3>FULL STACK DEVELOPER</h3>
                    <h4 className={cormorant.className}>FREELANCE</h4>
                </div>
                <div className="info">
                    <p>June 2021 - Currently</p>
                </div>
            </div>
            <div className="journey">
                <div className="titles">
                    <h3>PROJECT MANAGER</h3>
                    <h4 className={cormorant.className}>SIMSA</h4>
                </div>
                <div className="info">
                    <p>June 2016 - Currently</p>
                </div>
            </div>
            <div className="journey">
                <div className="titles">
                    <h3>PROJECT DESIGNER</h3>
                    <h4 className={cormorant.className}>TESICOM</h4>
                </div>
                <div className="info">
                    <p>March 2012 - June 2016</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Journey