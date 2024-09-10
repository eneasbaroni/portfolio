'use client'
import { Cormorant } from "next/font/google"
import { useState } from "react"


const cormorant = Cormorant({
    subsets: ["latin"],
    style: "italic",
})


const History = () => {

    const [hstActive, setHstActive] = useState<number | null>(null)

    const handleActive = (index: number) => {
        setHstActive(index)
    }

    return (
        <>
            <h1 className="h2">MY HISTORY</h1>
            <div className="historyContainer">
                <div className="history" onMouseEnter={() => setHstActive(0)} onMouseLeave={() => setHstActive(null)} onClick={() => handleActive(0)}>
                    <img src="../images/about/hst-01.svg" alt="icon" className="hstImg" />
                    <div className={`hst${hstActive === 0 ? ' hstActive' : ''}`}>
                        <h3>ARCH<span className="nautica">I</span>TECTU<span className="nautica">R</span>E</h3>
                        <p>I am an <span className={cormorant.className}>Architect</span>, a graduate of the National University of Córdoba.  I am passionate for <span className={cormorant.className}>minimalist and brutalist architecture.</span> I have a great love for concrete and metal.<br />
                        As an architect, I possess a solid understanding of <span className={cormorant.className}>structure, spatial design, and aesthetics.</span> This ability to visualize and organize information allows me to build solid and well-structured websites, with a logical and coherent foundation. Providing users with <span className={cormorant.className}>intuitive and visually appealing interfaces.</span></p>
                    </div>
                    <div className='smallbtn'>
                        <div className="light"></div>
                        <p>CLICK IN!</p>
                    </div>
                </div>
                <div className="history" onMouseEnter={() => setHstActive(1)} onMouseLeave={() => setHstActive(null)} onClick={() => handleActive(1)}>
                    <img src="../images/about/hst-02.svg" alt="icon" className="hstImg" />
                    <div className={`hst${hstActive === 1 ? ' hstActive' : ''}`}>
                        <h3>DESI<span className="nautica">G</span>N</h3>
                        <p>Since I was a child, I have been curious about <span className={cormorant.className}>art,</span> and being able to channel that into <span className={cormorant.className}>design</span> was the path that marked my life.<br />
                        During my university years, I studied <span className={cormorant.className}>graphic design.</span> This allowed me to delve into <span className={cormorant.className}>problem-solving</span> through design.<br />
                        My background in graphic design gives me an additional advantage in being able to understand <span className={cormorant.className}>user needs</span> and create digital solutions that are both <span className={cormorant.className}>functional and attractive.</span></p>
                    </div>
                    <div className='smallbtn'>
                        <div className="light"></div>
                        <p>CLICK IN!</p>
                    </div>
                </div>
                <div className="history" onMouseEnter={() => setHstActive(2)} onMouseLeave={() => setHstActive(null)} onClick={() => handleActive(2)}>
                    <img src="../images/about/hst-03.svg" alt="icon" className="hstImg" />
                    <div className={`hst${hstActive === 2 ? ' hstActive' : ''}`}>
                        <h3>DEVE<span className="nautica">L</span>OPMEN<span className="nautica">T</span></h3>
                        <p>My passion for <span className={cormorant.className}>creation, art, and design</span> led me to explore the world of <span className={cormorant.className}>web development,</span> where I am able to combine all the experiences and skills I have acquired. Currently, I am working within the MERN Stack.<br />
                        From conceptualization to launch, I enjoy the entire web development process. I love the idea of being able to transform my designs into <span className={cormorant.className}>interactive digital experiences</span> and provide modern solutions through the art of technology.</p>
                    </div>
                    <div className='smallbtn'>
                        <div className="light"></div>
                        <p>CLICK IN!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default History