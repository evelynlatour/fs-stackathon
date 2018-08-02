import React, { Component } from 'react';
import {
  HashRouter, Route, Switch, Link,
} from 'react-router-dom';
import axios from 'axios';
import ItemToAdd from './ItemToAdd';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: ``,
      toggleItemView: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    // save url to database
    event.preventDefault();
    // await axios.post(`api/images`, { imageUrl: this.state.imageUrl });
    this.setState(prevState => ({ toggleItemView: !prevState.toggleItemView }));
    console.log(`Posted ${this.state.imageUrl} to DB`);

    // re-render component that is pulling images from the db so you can see what you added
    // (and everything else you have? maybe those are separate displays
  }

  render() {
    return (
      <div>
        <h1>Hello Test</h1>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            style={{ width: `500px`, marginRight: `5px` }}
            type="text"
            name="imageUrl"
            onChange={this.handleChange}
            value={this.state.imageUrl}
          />
          <button type="submit">Add Image</button>
        </form>
        <ItemToAdd {...this.state} />
      </div>
    );
  }
}
