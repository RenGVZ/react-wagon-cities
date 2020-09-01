import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { setCity } from '../actions';
import City from '../containers/city';

class CityList extends Component {
  renderList() {
    return this.props.cities.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  }

  render() {
    return (
      <ul className="cities">
        {this.renderList()}
      </ul>
    );
  }
}

export default CityList;
