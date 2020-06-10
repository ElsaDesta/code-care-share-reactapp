import React, { Component } from 'react';
import "./Login.css";

export default class Login extends Component {
    render() {
        return (
            <div className="login-group">
                <form >
                <div className="login-header_group">
                <h1 className="login-header">Log In</h1>
                </div>

                <div className="identification-group">
                   <input className="user" type="text" name="username" placeholder="Enter username" required />
                </div>
                <div className="identification-group">
                   <input type="password" className= "secret" name="password"placeholder="Enter password" required/>
                </div>
                <div className="form-btn">
                <button type="submit">Login</button>
                </div>
                </form>
            </div>
        )
    }
}
