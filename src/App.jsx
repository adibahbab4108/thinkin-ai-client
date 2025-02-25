import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Root from './layouts/Root'
import Generate from './pages/Generate'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Root />} >
        <Route index element={<Home/>}></Route>
        <Route path='generate' element={<Generate/>}/>
      </Route>
    </Routes>
  )
}

export default App
