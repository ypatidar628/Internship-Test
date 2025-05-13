import React from 'react'
import Header from './header/Header'
import Home from './heroSection/Home'
import Page1 from './heroSection/Page1'
import { Route, Routes } from 'react-router-dom'
import Page2 from './heroSection/Page2'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
      </Routes>
    </div>
  )
}

export default App
