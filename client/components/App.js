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
    event.preventDefault();
    this.setState(prevState => ({ toggleItemView: true }));
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: `left` }}>
          <button
            type="button"
            className="ui tiny pink button"
            onClick={() => this.props.history.push(`/closet`)}
          > View Closet
          </button>
        </div>
        <h1>Add an item to your closet</h1>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="ui action input">
            <input
              style={{ width: `500px` }}
              type="text"
              name="imageUrl"
              placeholder="Paste a URL here"
              onChange={this.handleChange}
              value={this.state.imageUrl}
            />
            <button
              type="submit"
              className="ui button"
            >
            Add Image
            </button>
          </div>
        </form>
        <ItemToAdd {...this.state} history={this.props.history} />
      </div>
    );
  }
}
