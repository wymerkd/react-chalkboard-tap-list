import React from 'react'
import '../scss/_home.scss'

// Components
import Nav from './Nav';

const Home = () => {
  return (
    <div className="app">
      {/* <div>
        <Nav/>
      </div> */}
      <div className="container-fluid">
        <div className="container content">
          <div className="row">
            <div className="col-6">
              <h1 className="secondBeerText">- ON TAP - </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

