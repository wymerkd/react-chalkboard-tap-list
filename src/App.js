import React from 'react';

// React Router
import { Switch, Route } from 'react-router-dom'; 

// Test json data object
import beerData from './beerData.js';

// CSS
import './App.scss';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Home from './components/Home';
import AdminView from './components/AdminView';
// import Error404 from './components/Error404';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        masterBeerList: beerData,
        tapList: beerData[0]
      };
    }

    render(){
      return (
        <div>
          <Switch>
            <Route exact path='/' render={()=><Home tapList={this.state.tapList}/>} />
            <Route path='/adminview' component={AdminView} />
          </Switch>
        </div>
      );
    }
  }

export default App;
