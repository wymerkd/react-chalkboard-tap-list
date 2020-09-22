import React from 'react'
import '../scss/_home.scss'

// Components
import Nav from './Nav';

const Home = () => {
  return (
    <div className="app">
      <div>
        <Nav/>
      </div>
      <div className="container-fluid">
        <h1>Taplist</h1>
      </div>
    </div>
  )
}

export default Home;

