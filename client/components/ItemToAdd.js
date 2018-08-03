import React, { Component } from 'react';
import axios from 'axios';

export default class ItemToAdd extends Component {
  constructor() {
    super();
    this.state = {
      nickname: ``,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.nickname);
  };

  handleSubmit = async (event) => {
    await axios.post(`api/images`, { imageUrl: this.props.imageUrl, nickname: this.state.nickname });
  }


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
              style={{ width: `30%`, margin: `.7rem` }}
              src={this.props.imageUrl}
            />
            <form onSubmit={event => this.handleSubmit(event)}>
              <p>
                <label
                  htmlFor="nickname"
                  style={{ marginRight: `5px` }}
                >
                  Enter a name for this item:
                </label>
                <input
                  style={{ width: `200px`, marginRight: `5px` }}
                  type="text"
                  name="nickname"
                  onChange={this.handleChange}
                  value={this.state.nickname}
                />

                <button
                  type="submit"
                  style={{ margin: `.1rem` }}
                >
              Add item to closet
                </button>
              </p>
            </form>
          </div>
          )}
      </div>
    );
  }
}
