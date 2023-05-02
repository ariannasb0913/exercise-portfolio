import { useState } from 'react'
export default function RepetitionEx({ name }) {
    let [count, setCount] = useState(0)
    return (
        <div>
            <h1>Exercise: {name}</h1>
            <h2>{count} Reps</h2>
            <button onClick={ () => setCount(count => count+1)}>Increase Reps</button>
            <button onClick={ () => setCount(0)}>Reset</button>
        </div>
    )
}