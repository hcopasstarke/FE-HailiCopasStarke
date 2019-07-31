import React, { Component } from "react";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  render() {
    const { firstName, lastName, userName, password } = this.state;
    return (
      <div>
        <div>Login</div>
        <form onSubmit={this.handleSubmit}>
          {/* <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          placeholder="Enter your first name."
          value={firstName}
          onChange={this.handleChange}
        /> */}
          {/* <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          type="text"
          placeholder="Enter your last name."
          value={lastName}
          onChange={this.handleChange}
        /> */}
          <label htmlFor="email">User Name</label>
          <input
            name="userName"
            type="text"
            placeholder="Enter your user name."
            value={userName}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password."
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    event.preventDefault();
    const localProps = this.props
    axios
    .post("URL", {username: this.state.userName, password: this.state.password})
    .then(()=> {localProps.props.history.push("/BucketList")})

    .catch((e)=> {

        console.log("shitz on fire")})

  };
}

export default LoginForm;