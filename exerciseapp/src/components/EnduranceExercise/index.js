import { React, useState, useEffect, useRef, useCallback } from 'react'

export default function EnduranceEx({ name }) {
const [countNum, setCountNum] = useState(30);
const [stop, setStop] = useState(false)

let intervalRef = useRef();

const decreaseNum = () => setCountNum((prev) => prev - 1);

useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
}, [])

const countdownStop = () => {
    if (!stop) {
        clearInterval(intervalRef.current);
    } else {
        intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setStop((prev) => !prev);
}

let reset = useCallback(() => {
    setCountNum(30)
})


    return (
        <div>
            <h1>Exercise: {name}</h1>
            <p>Timer:</p>
            <div>{countNum} secs</div>
            <button onClick={countdownStop}>{stop ? "Run" : "Stop"}</button>
            <button onClick={reset}>Reset</button>
            </div>
    )
}