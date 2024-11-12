import './App.css'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'

export default function App() {

  return (
    <div className='bg-gray-800'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}