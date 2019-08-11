import { Component } from 'react';
import auth from '../services/authservice';

export default class Logout extends Component {
  componentDidMount() {
    auth.logout();
    window.location = '/';
  }

  render() {
    return null;
  }
}
