import React, { Component } from 'react';
import CatBreedDropdown from '../../components/CatBreedDropdown';
import CatCardParent from '../../components/CatCardParent';
import Pawvider from '../../components/Pawvider';

import './styles.css';

class Homepage extends Component {

  render() {
    return (
      <Pawvider>
        <div className="home-container">
          <h1>Cat Browser</h1>
          <CatBreedDropdown />
          <CatCardParent />
        </div>
      </Pawvider>
    );
  }
}

export default Homepage;