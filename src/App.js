import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/Movies';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import Customers from './components/customers';
import NavBar from './components/navbar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import './App.css';
import Register from './components/register';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={Register} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
