import React, {useEffect, useState} from 'react';
import './App.css';
import DashBoard from './views/DashBoard';
import store from './store'
import {Provider} from 'react-redux'
import Login from './authentication/Login';
import Register from './authentication/Register'
import HooksRegister from './authentication/HooksRegister'
import {Route, Switch, Redirect} from 'react-router-dom'
import PrivateRoute from './routing/PrivateRoute'
import ReduxToastr from 'react-redux-toastr'
import {LOGIN_SUCCESS} from './actions/types'
import setAuthToken from './utils/setAuthToken'
import {logout} from './actions/authAction'



const accessToken = localStorage.jwt_token
if(accessToken){
    setAuthToken(accessToken)
    // const decoded_token = jwt_decode(accessToken)
    store.dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken
    })

    const currentTime = Date.now()/1000
    if(accessToken.exp<currentTime){
        store.dispatch(logout())
        window.location.href = "/"
    }
}


function App() {

  const [isLogin, setIsLogin] =useState(false)
  const [firstAlert, setFirstAlert] =useState(true)

  const alertFirstTime=() =>{
    if (firstAlert && !isLogin) {
      setTimeout(function () {
        window.alert(
          `To explore the feature of this application, you can register or use the email and password below for the account

          email:ovajayi@gmail.com
          password:victor123
        
      `)
      }, 500);
      setFirstAlert(false)
      // this.setState({ firstTimeAlert: false });
    }
  }

  useEffect(()=>{
    alertFirstTime()
  })

  return (
    <React.Fragment>
    <Provider store={store}>
        <ReduxToastr
                  position="top-center"
                  transitionIn='bounceIn'
                  transitionOut='bounceOut'
                  progressBar
                  preventDuplicates
          />
      <div className="">
        <Switch>
          <Route exact path="/login" component={Login} />
            <Route exact path="/">
              <Redirect to="/login"/>
            </Route>
          <Route path="/register" component={HooksRegister} />
          <PrivateRoute path="/dashboard" component={DashBoard} />
        </Switch>
        {/* <DashBoard /> */}
      </div>
    </Provider> 
    </React.Fragment>
    
  );
}

export default App;
