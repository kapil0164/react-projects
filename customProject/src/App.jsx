import { useState } from 'react';
import './App.css'

function App() {

  // use useState
  const [value, setValue] = useState(5);

  const addValue = () => {
    // Only increase value if it's less than 20
    if (value < 10) {
      setValue(value + 1);
    }
  }

  const removeValue = () => {
    // Only decrease value if it's greater than 0
    if (value > 0) {
      setValue(value - 1);
    }
  }

  return (
   <>
      <h1>Counter Inc and Dec</h1>
      <h2>CounterVal : {value}</h2>
      <button onClick={addValue}>IncValue</button>
      <button onClick={removeValue}>DecValue</button>
    </>
  )
}

export default App
