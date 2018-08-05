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
        <h1 style={{ marginBottom: `2rem` }}>Viewing All Closet Items</h1>
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
