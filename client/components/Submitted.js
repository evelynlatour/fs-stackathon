import React from 'react';

const Submitted = props => (
  <div>
    <h1 className="grey ui header" style={{ marginTop: `2rem`, marginBottom: `3rem` }}>Item Added Successfully!</h1>
    <h3 className="grey ui header">What next?</h3>
    <div>
      <button
        type="button"
        className="ui purple button"
        style={{ margin: `1rem` }}
        onClick={() => props.history.push(`/`)}
      >
        Add Another
      </button>
      <button
        type="button"
        className="ui yellow button"
        style={{ margin: `1rem` }}
        onClick={() => props.history.push(`/closet`)}
      >
          View Closet
      </button>
    </div>
  </div>
);

export default Submitted;
