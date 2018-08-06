import React from 'react';

const RandomTop = ({ generatedTop, keepTop, handleTop }) => (
  <div className="right floated six wide column">
    <div>
      <div>
        <i
          className={keepTop ? `grey big lock closed link icon` : `grey big lock open link icon`}
          onClick={() => handleTop()}
        />
      </div>
      <img
        src={generatedTop.imageUrl}
        alt=""
        style={{ width: `40%`, margin: `.7rem` }}
      />
    </div>
  </div>
);

export default RandomTop;
