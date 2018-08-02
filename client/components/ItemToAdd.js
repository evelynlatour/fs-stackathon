import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.imageUrl);
  };

  handleSubmit = async (event) => {

  }

  /* in render method, have img that is on state displayed, allow the addition
of a nickname, and then a "go" button that will send it to clarifai, e.g. a put
route that provides the URL to the clarifai function, gets back the data and then
either manipulates it BEFORE it goes into the database, OR the model will have
some type of getter method on it to sanitize the data as it comes in */
  render() {
    const { imageUrl, toggleItemView } = this.props;
    return (
      <div>
        {toggleItemView
          && (
          <div>
            <h3>Item to add: </h3>
            <img
              alt=""
              style={{ width: `30%`, margin: `1rem` }}
              src={this.props.imageUrl}
            />
          </div>
          )}
      </div>
    );
  }
}
