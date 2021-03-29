import { Component } from 'react';
import CatCardImage from '../CatCardImage';
import ViewDetailsButton from '../ViewDetailsButton';

import './styles.css';

interface ICatCard {
  catID: string
  imageURL: string
}

class CatCard extends Component<ICatCard> {
  render() {
    return (
      <div>
        <CatCardImage key={this.props.catID} catID={this.props.catID} imageURL={this.props.imageURL} />
        <ViewDetailsButton catID={this.props.catID} />
      </div>
    );
  }
}

export default CatCard;