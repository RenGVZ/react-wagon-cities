import React from 'react';
import ActiveCity from './active_city';

const City = (props) => {
  return (
    <li className="list-group-item">
      <h1>{props.city.name}</h1>
      <p>{props.city.address}</p>
    </li>
  );
};

export default City;
