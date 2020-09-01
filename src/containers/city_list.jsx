import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { setCity } from '../actions';
import { City } from './city';

// import { cities } from '../components/app';

class CityList extends Component {
  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        {cities.map((city) => (
          <City city={city}/>
        ))}
      </div>
    );
  }
}

export default CityList;
