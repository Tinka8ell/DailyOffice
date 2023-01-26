import { useState } from 'react'
import './App.css'
import { Office } from './components/office/Office'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Office >
      </Office>
    </div>
  )
}

export default App
