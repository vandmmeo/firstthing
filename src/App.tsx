import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Energy } from './components/Energy'
import { Pythagoras } from './components/Pythagoras'
import { Cylinder } from './components/Cylinder'
import { Quadro } from './components/Quadro'
import { QuadroSum } from './components/QuadroSum'
import { Water } from './components/Water'
import { Log } from './components/Log'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Energy />
      <Pythagoras />
      <Cylinder />
      <Quadro />
      <QuadroSum />
      <Water />
      <Log />
    </>
  )
}

export default App
