import React from 'react';

import { topFilterData } from '../config/properties';


const RandomTop = ({
  generatedTop, keepTop, handleTop, handleFilterTop, topFilters,
}) => (
  <div className="right floated six wide column">
    <div className="ui two column grid">
      <div className="column">
        <div>
          <i
            className={keepTop ? `grey big lock closed link icon` : `grey big lock open link icon`}
            onClick={() => handleTop()}
          />
        </div>
        <img
          src={generatedTop.imageUrl}
          alt=""
          style={{ width: `90%`, margin: `.7rem` }}
        />
      </div>
      <div className="column" style={{ textAlign: `left` }}>
        <p>Only show me...</p>
        {topFilterData.map(({ name, displayText }) => (
          <div key={name} className="ui checkbox" style={{ display: `block`, margin: `.5rem` }}>
            <input
              type="checkbox"
              name={name}
              checked={topFilters.includes(name)}
              onChange={handleFilterTop}
            />
            <label style={{ textAlign: `left` }}>{displayText}</label>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default RandomTop;
