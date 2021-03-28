import { Component } from 'react';
import CatCardContainer from '../CatCardContainer';
import { Clawntext } from '../Pawvider';

import './styles.css';

class CatCardParent extends Component {

  render() {
    return (
      <Clawntext.Consumer>
        {
          (context) => (
            <div>
              <CatCardContainer breed={context?.state.selectedBreed} />
            </div>
          )
        }
      </Clawntext.Consumer>
    );
  }
}

export default CatCardParent;