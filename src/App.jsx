import React from 'react'
import "./App.css"
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'

const App = () => {
  return (
    <div className='container'>
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  )
}
//hello

export default App
