import React, { Component } from 'react';
import Header from './common/header/index';
import store from './store/index';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Header/>
        <BrowserRouter>
        <div>
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail' exact component={Detail}></Route>
        <Route path='/Login'  exact component={Login}></Route>
        </div>
        </BrowserRouter>
        </div>
      </Provider>
      

    )
  }
}

export default App;
