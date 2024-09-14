import './App.css'
import { Routes , Route } from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import About from './components/pages/About'
import Packages from './components/pages/Packages'
function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Packages' element={<Packages />}></Route>
        </Routes>
    </>
  )
}

export default App
