import React from 'react';

const UIGrid = ({ items, title }) => (
  <div style={{ marginBottom: `3rem`, marginTop: `3rem` }}>
    <h3 className="grey ui header" style={{ marginBottom: `1.5rem`, textAlign: `left` }}>
      {title.toUpperCase()}
      <i
        className="grey big link angle up icon"
      />
    </h3>

    <div className="ui grid">
      {items.map(item => (
        <div className="four wide column" id={item.id} key={item.id}>
          <div
            className="ui segment"
          >
            <img
              src={item.imageUrl}
              alt=""
              style={{ width: `70%`, margin: `.7rem` }}
            />
            <div>
              <div
                className="ui label"
                style={{ margin: `.5rem` }}
              >
                {item.nickname.toUpperCase()}
              </div>
              <div className="ui list">
                <div className="item" style={{ marginBottom: `.1rem` }}>
                  <b>Type: </b>
                  {`${item.type[0]} (${(+item.type[1] * 100).toFixed(2)} %)`}
                </div>
                <div className="item" style={{ marginBottom: `.1rem` }}>
                  <b>Subtype 1: </b>
                  {`${item.subtype1[0]} (${(+item.subtype1[1] * 100).toFixed(2)} %)`}
                </div>
                <div className="item" style={{ marginBottom: `.1rem` }}>
                  <b>Subtype 2: </b>
                  {`${item.subtype2[0]} (${(+item.subtype2[1] * 100).toFixed(2)} %)`}
                </div>
                <div className="item" style={{ marginBottom: `.1rem` }}>
                  <b>Color 1: </b>
                  {`${item.color1[1]} (${(+item.color1[2] * 100).toFixed(2)} %)`}
                </div>
                {item.color2.length
                  ? (
                    <div className="item" style={{ marginBottom: `.1rem` }}>
                      <b>Color 2: </b>
                      {`${item.color2[1]} (${(+item.color2[2] * 100).toFixed(2)} %)`}
                    </div>
                  ) : null}
                {/* {item.color3.length
                ? (
                  <p style={{ margin: `.1rem` }}>
                    {`${item.color3[1]} (${(+item.color3[2] * 100).toFixed(2)} %)`}
                  </p>
                ) : null} */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UIGrid;
