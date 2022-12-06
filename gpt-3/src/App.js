import React from 'react'
import './App.css'

import {Blog, Features, Footer, Header, Possibility, Whatgpt3} from './containers'
import {Cta, Brand, Navbar} from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='App__mom'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Whatgpt3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
