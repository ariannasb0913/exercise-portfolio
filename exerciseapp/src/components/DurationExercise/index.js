import React from "react"
import { useState, useCallback, useEffect } from 'react'

let currentTimer = 0
export default function DurationEx({ name}) {
   
    let [running, setRunning] = useState(false)
    let [timer, setTimer] = useState(0)
    let updateTimer = useCallback(() => {
        if(running) {
            setTimer((timer) => timer+10)
        }
    }, [running])

    useEffect(() => {
        currentTimer = setInterval(updateTimer, 10)
        return () => clearInterval(currentTimer)
    }, [running])

    let startStop = useCallback(() => {
        setRunning(!running)
        clearInterval(currentTimer)
    }, [running])

    let reset = useCallback(() => {
        setTimer(0)
    })

    let mins = (Math.floor((timer / (1000*60)) % 60)).toString().padStart(2, "0")
    let secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, "0")
    let mills = (timer % 1000).toString().padStart(3, "0")

    return (
        <div>
            <h1> Exercise: {name}</h1>
            <p>Timer:</p>
            <p>{mins}:{secs}.{mills}</p>
             <button onClick={startStop}>
                {running ? "Stop" : "Start"}
            </button>
            < button onClick={reset}>Reset</button>
    </div>)
}
