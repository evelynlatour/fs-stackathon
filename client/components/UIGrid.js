import React from 'react';

const UIGrid = ({ items, title }) => (
  <div style={{ marginBottom: `3rem`, marginTop: `3rem` }}>
    <h2 style={{ marginBottom: `1.5rem`, textAlign: `left` }}>{title.toUpperCase()}</h2>
    <div className="ui grid">
      {items.map(item => (
        <div className="four wide column" id={item.id} key={item.id}>
          <div
            className="ui container segment"
            style={{ height: `38rem` }}
          >
            <img
              src={item.imageUrl}
              alt=""
              style={{ width: `70%`, margin: `.7rem` }}
            />
            <div>
              <p>{item.nickname.toUpperCase()}</p>
              <p style={{ margin: `.1rem` }}>
                {`${item.type[0]} (${(+item.type[1] * 100).toFixed(2)} %)`}
              </p>
              <p style={{ margin: `.1rem` }}>
                {`${item.subtype1[0]} (${(+item.subtype1[1] * 100).toFixed(2)} %)`}
              </p>
              <p style={{ margin: `.1rem` }}>
                {`${item.subtype2[0]} (${(+item.subtype2[1] * 100).toFixed(2)} %)`}
              </p>
              <p style={{ margin: `.1rem` }}>
                {`${item.color1[1]} (${(+item.color1[2] * 100).toFixed(2)} %)`}
              </p>
              {item.color2.length
                ? (
                  <p style={{ margin: `.1rem` }}>
                    {`${item.color2[1]} (${(+item.color2[2] * 100).toFixed(2)} %)`}
                  </p>
                ) : null}
              {item.color3.length
                ? (
                  <p style={{ margin: `.1rem` }}>
                    {`${item.color3[1]} (${(+item.color3[2] * 100).toFixed(2)} %)`}
                  </p>
                ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UIGrid;
