import { Component } from 'react';
import CatBreedDropdown from '../../components/CatBreedDropdown';
import CatCardParent from '../../components/CatCardParent';
import LoadMoreButton from '../../components/LoadMoreButton';
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
          <LoadMoreButton />
        </div>
      </Pawvider>
    );
  }
}

export default Homepage;