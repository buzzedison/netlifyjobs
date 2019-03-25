import React, { Component } from "react";

class SignInForm extends Component {
  render() {
    return (
      <div className="FormJobs">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label className="FormField_Label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField_Input"
              placeholder="Enter your email address"
              name="email"
            />
          </div>
          <div className="FormField">
            <label className="FormField_Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField_Input"
              placeholder="Enter your password"
              name="password"
            />
          </div>

          <div className="FormField">
            <button className="FormField_Button mr-20">Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
