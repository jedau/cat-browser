import { Component } from 'react';
import CatCardService from '../CatCardService';
import { Clawntext } from '../Pawvider';

import './styles.css';

class CatCardContainer extends Component {

  render() {
    return (
      <Clawntext.Consumer>
        {
          (context) => (
            <CatCardService breed={context?.state.selectedBreed} />
          )
        }
      </Clawntext.Consumer>
    );
  }
}

export default CatCardContainer;