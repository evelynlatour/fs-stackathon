import React, { Component } from 'react';
import {
  HashRouter, Route, Switch, Link,
} from 'react-router-dom';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: ``,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.imageUrl);
  };

  handleSubmit = async (event) => {
    // save url to database
    event.preventDefault();
    console.log(`handleSubmit function fired`);
    console.log(this.state.imageUrl);
    await axios.post(`api/images`, { imageUrl: this.state.imageUrl });

    // re-render component that is pulling images from the db
  }

  render() {
    return (
      <div>
        <h1>Hello Test</h1>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            name="imageUrl"
            onChange={this.handleChange}
            value={this.state.imageUrl}
          />
          <button type="submit">Add Image</button>
        </form>
      </div>
    );
  }
}
