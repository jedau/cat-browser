import { Component } from 'react';

import './styles.css';

type CatCardProps = {
  catID: string
  imageURL: string
}

class CatCard extends Component<CatCardProps> {
  render() {
    return (
      <img className="img" alt="" key={this.props.catID} src={this.props.imageURL} />
    );
  }
}

export default CatCard;