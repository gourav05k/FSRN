import { useState, useEffect } from "react";

function About() {

    console.log("functional component has started");
    const [count, setCount] = useState(0);

    function updateCount() {
        setCount(count + 1);
    }

    const timer = setInterval(() => {
        console.log("timer has started");
    }, 1000);
    //useEffect -> for mounting
    // return -> for unmounting
    // dependencies -> component updating
    useEffect(() => {
        console.log("functional component has mounted");
        return () => {
            // when comp gets unmounted (you go to some other page), kill the timer (as it consumes space).
            clearInterval(timer);
            console.log("Functional comp gets unmounted using return");
        }
    }, [count])


    return (
        <>  
            {console.log("functional child return")}
            <h1>About Component</h1>
            <button onClick={updateCount}>Functional Count</button>
        </>
    )
}

export default About;