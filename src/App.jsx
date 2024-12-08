import { useState } from 'react'

import './App.css'
import ShowCount from './components/showCount/showCount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <ShowCount count={count} />
      <div>
        <button onClick={() => setCount(count - 1)} className='boton'>
          Restar
        </button>
        <button onClick={() => setCount(count + 1)} className='boton'>
          Sumar
        </button>
      </div>
    </div>
  )
}

export default App
