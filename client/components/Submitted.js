import React from 'react';

const Submitted = props => (
  <div>
    <h1 style={{ marginBottom: `3rem` }}>Item Added Successfully!</h1>
    <div>
      <button
        type="button"
        className="ui teal button"
        style={{ margin: `2rem` }}
        onClick={() => props.history.push(`/`)}
      >
        Add Another
      </button>
      <button
        type="button"
        className="ui pink button"
        style={{ margin: `2rem` }}
        onClick={() => props.history.push(`/closet`)}
      >
          View Closet
      </button>
    </div>
  </div>
);

export default Submitted;
