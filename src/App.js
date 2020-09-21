import React from 'react';

// React Router
import { Switch, Route } from 'react-router-dom'; 

// CSS
import './App.scss';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Home from './components/Home';
import AdminView from './components/AdminView';
// import Error404 from './components/Error404';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route path ='/adminview' component={AdminView} />
      </Switch>
    </div>
  );
}

export default App;
