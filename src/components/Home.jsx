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
              <h1 className="goldHeading">- Taplist - </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6 beers">
              <h3 className="beerName">Manny's Pale Ale </h3>
              <div className="beerDetails">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit beatae similique sed dignissimos excepturi placeat culpa eos ratione consequatur laborum ea veritatis sit dolores libero</p>
                <p>5.5% ABV --------- $8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

