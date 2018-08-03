import React, { Component } from 'react';
import axios from 'axios';


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
    console.log(closetItems);
    return (
      <div>
        <h1 style={{ marginBottom: `2rem` }}>Viewing All Closet Items</h1>
        <div className="ui centered grid">
          {closetItems.map(item => (
            <div className="four wide column" id={item.id}>
              <div className="ui raised segment">
                <img
                  src={item.imageUrl}
                  alt=""
                  style={{ width: `70%`, margin: `.7rem` }}
                />
                <div>
                  <p>{item.nickname.toUpperCase()}</p>
                  <p style={{ margin: `.1rem` }}>
                    {`${item.concept1[0]} (${(+item.concept1[1] * 100).toFixed(2)} %)`}
                  </p>
                  <p style={{ margin: `.1rem` }}>
                    {`${item.concept2[0]} (${(+item.concept2[1] * 100).toFixed(2)} %)`}
                  </p>
                  <p style={{ margin: `.1rem` }}>
                    {`${item.concept3[0]} (${(+item.concept3[1] * 100).toFixed(2)} %)`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
