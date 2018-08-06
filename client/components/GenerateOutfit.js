import React, { Component, Fragment } from 'react';
import RandomTop from './RandomTop';
import RandomBottom from './RandomBottom';

import { bottomFilterData, topFilterData } from '../config/properties';
import { filterItemsByFilters } from '../util/filterUtils';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const midi = `Midi Skirt`;
const maxi = `Maxi Skirt`;
const pants = `Pants`;
const leggings = `Leggings`;

export default class GenerateOutfit extends Component {
  constructor() {
    super();
    this.state = {
      generatedTop: {},
      generatedBottom: {},
      keepTop: false,
      keepBottom: false,
      bottomFilters: bottomFilterData.map(item => item.name),
      topFilters: topFilterData.map(item => item.name),
    };
  }

  clickHandler = (randomTop, randomBottom) => {
    const { keepTop, keepBottom } = this.state;
    if (keepBottom === true && keepTop === true) this.setState({});
    else if (keepTop) this.setState({ generatedBottom: randomBottom });
    else if (keepBottom) this.setState({ generatedTop: randomTop });
    else this.setState({ generatedTop: randomTop, generatedBottom: randomBottom });
  }

  handleTop = () => {
    this.setState(prevState => ({ keepTop: !prevState.keepTop }));
  }

  handleBottom = () => {
    this.setState(prevState => ({ keepBottom: !prevState.keepBottom }));
  }

  handleFilter = ({ target: { name } }) => {
    this.setState((previousState) => {
      let bottomFilters = [...previousState.bottomFilters];
      if (bottomFilters.includes(name)) {
        bottomFilters = bottomFilters.filter(item => item !== name);
      } else {
        bottomFilters.push(name);
      }
      return { bottomFilters };
    });
  }

  render() {
    const { tops, bottoms } = this.props;
    const { bottomFilters, topFilters } = this.state;

    // filter tops & bottoms depending on checkboxes

    const filteredTops = filterItemsByFilters(topFilters, tops);
    const filteredBottoms = filterItemsByFilters(bottomFilters, bottoms);

    console.log(tops);
    console.log(`All tops ^^`);
    console.log(filteredTops);
    console.log(`Filtered tops ^^`);
    console.log(`##################################`);
    console.log(bottoms);
    console.log(`All bottoms ^^`);
    console.log(filteredBottoms);
    console.log(`Filtered bottoms ^^`);
    console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);

    const {
      generatedTop, generatedBottom, keepTop, keepBottom,
    } = this.state;

    const randomTop = tops[getRandom(0, tops.length - 1)];
    const randomBottom = filteredBottoms[getRandom(0, filteredBottoms.length - 1)];

    return (
      <div style={{ marginBottom: `3rem` }}>
        <h2 style={{ marginBottom: `1.5rem` }}>Generate An Outfit</h2>
        <div>
          <button
            type="button"
            className="ui pink button"
            style={{ marginBottom: `1.5rem` }}
            onClick={() => this.clickHandler(randomTop, randomBottom)}
          >{generatedTop.nickname ? `Go Again` : `Go`}
          </button>

          <div className="ui middle aligned centered grid">
            {generatedTop.nickname && <RandomTop {...this.state} handleTop={this.handleTop} />}
            {generatedBottom.nickname
            && (
            <div className="one wide column" style={{ textAlign: `center` }}>
              <i className="grey huge plus icon" />
            </div>
            )}
            {generatedBottom.nickname && <RandomBottom {...this.state} handleBottom={this.handleBottom} handleFilter={this.handleFilter} />}
          </div>
        </div>
      </div>
    );
  }
}
