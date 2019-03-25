import React, { Component } from "react";

class MainContent extends Component {
  render() {
    return (
      <div className="SearchForm">
        <form className="SearchFields" onSubmit={this.handleSubmit} />
        <div className="SearchFields">
          <input
            type="search"
            id="search"
            className="SearchFields_Input"
            placeholder="Search for jobs"
          />
        </div>
        <div className="SearchFields">
          <button className="SearchButton"> Search</button>
        </div>
      </div>
    );
  }
}

export default MainContent;
