import { Component } from 'react';

import './styles.css';

interface ICatCardImage {
  catID: string
  imageURL: string
}

class CatCardImage extends Component<ICatCardImage> {
  render() {
    return (
      <img className="img" alt="" key={this.props.catID} src={this.props.imageURL} />
    );
  }
}

export default CatCardImage;