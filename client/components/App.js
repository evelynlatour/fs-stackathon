import React, { Component } from 'react';
import {
  HashRouter, Route, Switch, Link,
} from 'react-router-dom';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      imageURL: ``,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.imageURL);
  };

  handleSubmit = () => {
    // save url to database

    // re-render component that is pulling images from the db
  }

  render() {
    return (
      <div>
        <h1>Hello Test</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="imageURL"
            onChange={this.handleChange}
            value={this.state.imageURL}
          />
          <input type="button" name="button" value="Add Image" />
        </form>
      </div>
    );
  }
}
