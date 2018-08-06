import React, { Component, Fragment } from 'react';
import axios from 'axios';
import UIGrid from './UIGrid';
import GenerateOutfit from './GenerateOutfit';

export default class ViewAll extends Component {
  constructor() {
    super();
    this.state = {
      closetItems: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get(`api/images`);
    this.setState({ closetItems: data });
  }

  render() {
    const { closetItems } = this.state;
    if (!closetItems.length) {
      return <div>Loading...</div>;
    }

    const tops = closetItems.filter(item => item.type[0] === `top`);
    const bottoms = closetItems.filter(item => item.type[0] === `bottom`);

    return (
      <Fragment>
        <div style={{ textAlign: `left` }}>
          <button
            type="button"
            className="ui purple button"
            onClick={() => this.props.history.push(`/`)}
          > Add Another Item
          </button>
        </div>

        <h1
          style={{ marginBottom: `2rem`, marginTop: `.01rem`, fontSize: `4rem` }}
          className="grey ui header"
        >Closet
        </h1>
        <div
          className="ui divider"
        />
        <GenerateOutfit tops={tops} bottoms={bottoms} />
        <div
          className="ui divider"
        />
        <UIGrid items={tops} title="Tops" />
        <div
          className="ui divider"
        />
        <UIGrid items={bottoms} title="Bottoms" />
      </Fragment>
    );
  }
}
