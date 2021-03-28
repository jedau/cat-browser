import { Component } from 'react';

import './styles.css';

interface ISingleCatDetails {
  breed: string
  description: string
  origin: string
  temperament: string
}

class SingleCatDetails extends Component<ISingleCatDetails> {

  render() {
    return (
      <div className="details-container">
        <h3>{this.props.breed}</h3>
        <h5>Origin: {this.props.origin}</h5>
        <h6>{this.props.temperament}</h6>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default SingleCatDetails;