import React, { Component } from 'react';
import CatBreedDropdown from '../../components/CatBreedDropdown';
import CatCardContainer from '../../components/CatCardContainer';
import Pawvider from '../../components/Pawvider';

import './styles.css';

class Homepage extends Component {

  render() {
    return (
      <Pawvider>
        <CatBreedDropdown />
        <CatCardContainer />
      </Pawvider>
    );
  }
}

export default Homepage;