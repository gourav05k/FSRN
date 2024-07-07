import { useMemo, useState } from 'react';
// import './Memo.css'
import { findPrime } from '../utils/helper';

function Memo() {
    const [num, setNum] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
    // calc the prime only when num dependency gets changed
    const prime = useMemo(() => findPrime(num), [num]);

    //function to re-render the component, so that useMemo will calculate findPrime again or look for its vaklue in the cache.
    function updateTheme() {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <>
            <div className="my-4 mx-4 w-400 h-400" style={isDarkTheme ? { backgroundColor: "lightgray" } : { backgroundColor: "white" }}>
                <h1 className='text-4xl'>useMemo hook</h1>
                <label htmlFor="inputNum">Type a number to get nth prime no.</label>
                <input type="text" id='inputNum' value={num} onChange={(e) => setNum(e.target.value)} className='border-2 border-gray-500 w-auto mx-2 rounded-md' />
                <p className='text-base'>Nth prime: {prime} </p>
                <div>
                    To update theme and calculate prime again
                    <button onClick={updateTheme} className='border-2 border-black px-5 mx-4 rounded-lg bg-red-600 text-white'>Clik here</button>
                </div>
            </div>
        </>
    )
}

export default Memo;