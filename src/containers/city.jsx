import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectCity from '../actions/actions_index';

const City = (props) => {
  return (
    <li 
      className="list-group-item"
      onClick={() => props.selectCity(props.city)}>
      <h1>{props.city.name}</h1>
    </li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
