import logo from './logo.svg';
import './App.css';
import RepetitionEx from './components/RepetitionExercise'
import DurationEx from './components/DurationExercise'
import EnduranceEx from './components/EnduranceExercise'
//import WeightEx from './components/WeightExercise'
import { useState, useCallback } from 'react'



function App() {
  let[inputText, setInputText] = useState("")
  let [exerciseList, setExerciseList] = useState([
    {name: "Running", type: "duration", key: "1"},
    {name: "Planking", type: "endurance", key: "2"},
    {name: "Sit-Ups", type: "repetition", key: "3"},
  ])
  

  let [currentExercise, setCurrentExercise] = useState(undefined)
  let currentScreen
  if (currentExercise === undefined) {
    currentScreen =
      <div>
        <h2>Time to Sweat!</h2>
        <p>Available Exercises:</p>
          <button onClick={() => setCurrentExercise(exerciseList[0])}>Running</button>
        <div />
          <button onClick={() => setCurrentExercise(exerciseList[1])}>Planking</button>
        <div />
          <button onClick={() => setCurrentExercise(exerciseList[2])}>Sit-Ups</button>
      </div>
  } else if (currentExercise.type === "duration") {
    currentScreen = 
      <div>
        <DurationEx name={currentExercise.name}></DurationEx>
        <button onClick={() => setCurrentExercise(undefined)}>Return</button>
      </div>
  } else if (currentExercise.type === "repetition") {
    currentScreen =
      <div>
        <RepetitionEx name={currentExercise.name}></RepetitionEx>
        <button onClick={() => setCurrentExercise(undefined)}>Return</button>
      </div>
  } else {
    currentScreen =
      <div>
        <EnduranceEx name={currentExercise.name}></EnduranceEx>
        <button onClick={() => setCurrentExercise(undefined)}>Return</button>
      </div>
  }
  return (
    <div>
      {currentScreen}
    </div>
  )
}

export default App;
