import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
   <>
     <h1 className='bg-red-400 text-7xl shadow-lg p-6 mr-4 rounded-xl'>Hello</h1> 
     // using props...
     <Card name="Kapil" btn="click me"/>
     <Card name="Kapil's Design" btn="visit me"/>
   </>
  )
}

export default App
