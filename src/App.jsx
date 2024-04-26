import React from 'react'
import Header from './header/Header'
import { Route, Routes } from 'react-router-dom'
import MainPage from './main/MainPage'
import './core/core.sass'
import './styles/App.sass'
import MapWidget from './map/MapWidget'

const App = () => {
  
  return (
    <div>
        <Header/>
        <Routes>
          <Route path='/main' element={<MainPage/>}/>
        </Routes>
        {/* <MapWidget/> */}
        {/*myxa*/}
    </div>
  )
}

export default App