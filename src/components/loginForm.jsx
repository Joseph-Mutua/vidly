import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  username = React.createRef();

  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (!value) return "Username is required";
    }
    if (name === "password") {
      if (!value) return "Password is required!";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validate = () => {
    const { account } = this.state;
    const errors = {};

    if (!account.username) errors.username = "Username is required!";

    if (!account.password) errors.password = "Password  is required!";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            autoFocus
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
