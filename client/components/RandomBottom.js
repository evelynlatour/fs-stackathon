import React, { Component } from 'react';

import { bottomFilterData } from '../config/properties';


const RandomBottom = ({
  generatedBottom, keepBottom, handleBottom, handleFilter, bottomFilters,
}) => (
  <div className="left floated six wide column">
    <div className="ui two column grid">
      <div className="column">
        <div>
          <i
            className={keepBottom ? `grey big lock closed link icon` : `grey big lock open link icon`}
            onClick={() => handleBottom()}
          />
        </div>
        <img
          src={generatedBottom.imageUrl}
          alt=""
          style={{ width: `90%`, margin: `.7rem` }}
        />
      </div>
      <div className="column" style={{ textAlign: `left` }}>
        <p>Only show me...</p>
        {bottomFilterData.map(({ name, displayText }) => (
          <div key={name} className="ui checkbox" style={{ display: `block`, margin: `.5rem` }}>
            <input
              type="checkbox"
              name={name}
              checked={bottomFilters.includes(name)}
              onChange={handleFilter}
            />
            <label style={{ textAlign: `left` }}>{displayText}</label>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default RandomBottom;
