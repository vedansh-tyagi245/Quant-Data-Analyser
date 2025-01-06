import { useState } from 'react'
import './App.css'
import Welcome from './home-components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-0 p-0'>

      <Welcome/>
    </div>
  )
}

export default App
