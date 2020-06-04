import React from 'react';
import './App.css';
import DashBoard from './views/DashBoard';
import store from './store'
import {Provider} from 'react-redux'
import Login from './authentication/Login';
import SignUp from './authentication/SignUp'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={DashBoard} />
        </Switch>
        {/* <DashBoard /> */}
      </div>
    </Provider>
    
  );
}

export default App;
