import React from 'react'

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import HowToPlay from './components/HowToPlay';
import Dividends from './components/Dividends';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from './components/Menu';
import Privacy from './components/Privacy';
import Cookie from './components/Cookie';
import ContacUs from './components/ContactUs';
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute';

class App extends React.Component {

  state = {
    user : {},
    login : false
  }

  render()
  {
    return (
     <div>
        <Switch>
          <ProtectedRoute path="/admin" login={this.state.login}  state={this} component={AdminDashboard}/>
          <Route path="/login">
            <Login state ={this} />
          </Route>
          <Route path="/home">
            <Header />
            <Menu/>
            <Home />
            <Footer />
          </Route>
          <Route path="/dividends">
            <Header />
            <Menu/>
            <Dividends />
            <Footer />
          </Route>
          <Route path="/howtoplay">
            <Header />
            <Menu/>
            <HowToPlay />
            <Footer />
          </Route>
          <Route path="/privacy">
            <Header />
            <Menu/>
            <Privacy />
            <Footer />
          </Route>
          <Route path="/cookiespolicy">
            <Header />
            <Menu/>
            <Cookie />
            <Footer />
          </Route>
          <Route path="/contactus">
            <Header />
            <Menu/>
            <ContacUs />
            <Footer />
         
          </Route>
          <Route path="/">
            <Header />
            <Menu/>
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
