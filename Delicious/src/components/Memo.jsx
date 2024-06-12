import { useMemo, useState } from 'react';
import './Memo.css'
import { findPrime } from '../utils/helper';

function Memo(){
    const [num, setNum] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
    // calc the prime only when num dependency gets changed
    const prime = useMemo(() => findPrime(num), [num]);

    //function to re-render the component, so that useMemo will calculate findPrime again or look for its vaklue in the cache.
    function updateTheme(){
        setIsDarkTheme(!isDarkTheme);
    }

    return(
        <>
            <h1>Learning useMemo hook</h1>
            <div className="memoBox" style={isDarkTheme? {backgroundColor:"lightgray"}: {backgroundColor:"white"}}>
                <input type="text" value={num} onChange={(e)=>setNum(e.target.value)} />
                <button onClick={updateTheme}>update theme and calc prime again</button>
                <div>
                    nth prime: {prime}
                </div>
            
            </div>
        </>
    )
}

export default Memo;