import React, { Component } from "react";

class SignUpForm extends Component {
  render() {
    return (
      <div className="FormJobs">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label className="FormField_Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="FormField_Input"
              placeholder="Enter your full name"
              name="name"
            />
          </div>

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
            <button className="FormField_Button mr-20">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
