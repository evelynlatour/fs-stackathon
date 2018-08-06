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
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`api/images`, { imageUrl: this.props.imageUrl, nickname: this.state.nickname });
    this.props.history.push(`/submitted`);
  }


  render() {
    const { imageUrl, toggleItemView } = this.props;
    return (
      <div>
        {toggleItemView
          && (
          <div>
            <h3 style={{ marginTop: `2rem` }}>Item to add: </h3>
            <img
              alt=""
              style={{ width: `30%`, marginBottom: `2rem` }}
              src={this.props.imageUrl}
            />
            <form onSubmit={event => this.handleSubmit(event)}>
              <div className="ui action input">
                <input
                  style={{ width: `300px` }}
                  type="text"
                  name="nickname"
                  placeholder="Enter a nickname for this item..."
                  onChange={this.handleChange}
                  value={this.state.nickname}
                />
                <button
                  type="submit"
                  className="ui button"
                >
              Add item to closet
                </button>
              </div>
            </form>
          </div>
          )}
      </div>
    );
  }
}
