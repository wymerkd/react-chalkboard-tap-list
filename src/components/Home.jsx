import React from 'react'
import PropTypes from 'prop-types';
import '../scss/_home.scss'


// Components
// import Nav from './Nav';
import AdBox from './AdBox';


const Home = (props) => {
  const beers = props.tapList;

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
              <h3 className="beerName">{props.tapList.beerName}</h3>
              <div className="beerDetails">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                <div className="row">
                  <div className="col-10">
                    <p>5.5% ABV</p>
                  </div>
                  <div className="col-1">
                    <p>$6</p>
                  </div>
                  <div className="col-1">
                    <p>$9</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 beers">
              <h3 className="beerName">Manny's Pale Ale </h3>
              <div className="beerDetails">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                <div className="row">
                  <div className="col-10">
                    <p>5.5% ABV</p>
                  </div>
                  <div className="col-1">
                    <p>$6</p>
                  </div>
                  <div className="col-1">
                    <p>$9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 beers">
              <h3 className="beerName">Manny's Pale Ale </h3>
              <div className="beerDetails">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                <div className="row">
                  <div className="col-10">
                    <p>5.5% ABV</p>
                  </div>
                  <div className="col-1">
                    <p>$6</p>
                  </div>
                  <div className="col-1">
                    <p>$9</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 beers">
              <h3 className="beerName">Manny's Pale Ale </h3>
              <div className="beerDetails">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                <div className="row">
                  <div className="col-10">
                    <p>5.5% ABV</p>
                  </div>
                  <div className="col-1">
                    <p>$6</p>
                  </div>
                  <div className="col-1">
                    <p>$9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 beers">
              <h3 className="beerName">Manny's Pale Ale </h3>
              <div className="beerDetails">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                <div className="row">
                  <div className="col-10">
                    <p>5.5% ABV</p>
                  </div>
                  <div className="col-1">
                    <p>$6</p>
                  </div>
                  <div className="col-1">
                    <p>$9</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 beers">
              <h3 className="beerName">Manny's Pale Ale </h3>
              <div className="beerDetails">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                <div className="row">
                  <div className="col-10">
                    <p>5.5% ABV</p>
                  </div>
                  <div className="col-1">
                    <p>$6</p>
                  </div>
                  <div className="col-1">
                    <p>$9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <AdBox/>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  tapList: PropTypes.array,
};

export default Home;

