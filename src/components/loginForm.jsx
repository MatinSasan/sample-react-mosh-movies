import React, { Component } from 'react';
import Input from './common/input';

export class LoginForm extends Component {
  state = {
    account: { username: '', password: '' }
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(
      'submitted',
      `${this.state.account.username} : ${this.state.account.password}`
    );
  };

  render() {
    const { username, password } = this.state.account;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={username}
            label="username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={password}
            label="password"
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
