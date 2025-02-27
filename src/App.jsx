import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Generate from './pages/Generate'
import AppLayout from './layouts/AppLayout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<AppLayout />} >
        <Route index element={<Home/>}></Route>
        <Route path='generate' element={<Generate/>}/>
      </Route>
    </Routes>
  )
}

export default App
