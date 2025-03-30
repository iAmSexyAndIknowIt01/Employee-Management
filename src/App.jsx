import { useState } from 'react'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListEmployeeComponent/>
    </>
  )
}

export default App
