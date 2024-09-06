'use client'

import { useEffect, useState } from "react";

//arr of let's talk! in different languages
const contactArr = [
    "( Hablemos! )",
    "( Let's talk! )",
    "( Parlons-en! )",
    "( Parliamo! )",
    "( 我们谈谈 )",
    "( 이야기 나누기 )",
    "( Ας μιλήσουμε )",
    "( Falemos! )"
]



const Greet = () => {
    const [opacity, setOpacity] = useState(1)
    const [msg, setMsg] = useState("( Let's talk! )");

    useEffect(() => {
        // Function to update message and opacity
        const updateMessage = () => {

            // Hide the message
            setOpacity(0)

            // Show the message after 2 seconds
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * contactArr.length);
                setMsg(contactArr[randomIndex]);
                setOpacity(1);
            }, 1000);

        };

        // Update message every 2 seconds
        const intervalId = setInterval(() => {
            updateMessage();
        }, 4000); // 4 seconds interval to allow the message to be visible for 2 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <p className="orangeText" style={{ opacity }}>{msg}</p>
    )
}
export default Greet