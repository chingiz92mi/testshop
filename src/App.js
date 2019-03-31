import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Main from './components/Main';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Reduc from './reducers/index'
import thunk from 'redux-thunk'


const store = createStore(Reduc, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router className="App">
          <div>
            <Main />
          </div>
         </Router>
      </Provider>
    );
  }
}


export default App;
