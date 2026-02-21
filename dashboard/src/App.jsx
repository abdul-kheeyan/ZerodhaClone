import React from 'react'
import Home from "../src/components/Home.jsx"
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
