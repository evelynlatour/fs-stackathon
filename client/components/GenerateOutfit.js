import React, { Component, Fragment } from 'react';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default class GenerateOutfit extends Component {
  constructor() {
    super();
    this.state = {
      generatedTop: {},
      generatedBottom: {},
    };
  }

  // getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  clickHandler = (randomTop, randomBottom) => {
    this.setState({ generatedTop: randomTop, generatedBottom: randomBottom });
  }

  render() {
    const { tops, bottoms } = this.props;
    const { generatedTop, generatedBottom } = this.state;
    const randomTop = tops[getRandom(0, tops.length - 1)];
    const randomBottom = bottoms[getRandom(0, bottoms.length - 1)];
    return (
      <div style={{ marginBottom: `3rem` }}>
        <h2 style={{ marginBottom: `1.5rem` }}>Generate An Outfit</h2>
        <div>
          <button
            type="button"
            className="ui teal button"
            style={{ marginBottom: `1.5rem` }}
            onClick={() => this.clickHandler(randomTop, randomBottom)}
          >{generatedTop.nickname ? `Give me another...` : `Go`}
          </button>
          <div className="ui middle aligned centered grid">
            {generatedTop.nickname
            && (
            <div className="six wide column" style={{ textAlign: `right` }}>
              <img
                src={generatedTop.imageUrl}
                alt=""
                style={{ width: `40%`, margin: `.7rem` }}
              />
            </div>
            )
          }
            {generatedBottom.nickname
            && (
            <div className="two wide column" style={{ textAlign: `center` }}>
              <img
                src="http://medhq.net/wp-content/uploads/2016/10/plus-512-1.gif"
                alt=""
                style={{ width: `30%` }}
              />
            </div>
            )
          }
            {generatedBottom.nickname
            && (
            <div className="six wide column" style={{ textAlign: `left` }}>
              <img
                src={generatedBottom.imageUrl}
                alt=""
                style={{ width: `40%`, margin: `.7rem` }}
              />
            </div>
            )
          }
          </div>
        </div>
      </div>
    );
  }
}
