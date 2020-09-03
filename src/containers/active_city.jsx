import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>Please select a city...</p>
      </div>
    );
  }

  return (
    <div className="active-city">
      <h1>ActiveCity</h1>
    </div>
  );
};

export default ActiveCity;
