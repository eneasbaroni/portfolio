import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
    subsets: ["latin"],
    style: "italic",
});

const Journey = () => {
    return (
        <div id="journey">
            <h2 className="h2">MI VIAJE</h2>

            <div className="journeysContainer">
                <div className="journey">
                    <div className="titles">
                        <h3>FULL STACK DEVELOPER</h3>
                        <h4 className={cormorant.className}>ACCENTURE</h4>
                    </div>
                    <div className="info">
                        <p>Enero 2025 - Actualmente</p>
                    </div>
                </div>
                <div className="journey">
                    <div className="titles">
                        <h3>TUTOR PROGRAMACIÓN BACKEND</h3>
                        <h4 className={cormorant.className}>CODERHOUSE</h4>
                    </div>
                    <div className="info">
                        <p>Noviembre 2023 - Actualmente</p>
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
                        <h3>PROJECT MANAGER</h3>
                        <h4 className={cormorant.className}>SIMSA</h4>
                    </div>
                    <div className="info">
                        <p>Junio 2016 - Diciembre 2024</p>
                    </div>
                </div>
                <div className="journey">
                    <div className="titles">
                        <h3>PROJECT DESIGNER</h3>
                        <h4 className={cormorant.className}>TESICOM</h4>
                    </div>
                    <div className="info">
                        <p>Marzo 2012 - Junio 2016</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Journey;
