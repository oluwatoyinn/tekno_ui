import React from 'react';
import './App.css';
import DashBoard from './views/DashBoard';
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="">
      <DashBoard />
      </div>
    </Provider>
    
  );
}

export default App;
