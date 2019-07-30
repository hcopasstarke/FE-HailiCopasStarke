import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""
        };
    }
    
    render() {
        const { firstName, lastName, email, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name."
                    value={firstName}
                    onChange={this.handleChange}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name."
                    value={lastName}
                    onChange={this.handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="text"
                    placeholder="Enter your email."
                    value={email}
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
        );
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        console.log("Submitting");
        console.log(this.state);
    };
}

export default LoginForm;