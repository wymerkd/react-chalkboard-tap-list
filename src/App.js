import React from 'react';

// React Router
import { Switch, Route } from 'react-router-dom'; 

// CSS
import './App.scss';

// Components
import Test from './components/Test';
import AdminView from './components/AdminView';
// import Error404 from './components/Error404';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={Test} />
        <Route path ='/adminview' component={AdminView} />
      </Switch>
    </div>
  );
}

export default App;
