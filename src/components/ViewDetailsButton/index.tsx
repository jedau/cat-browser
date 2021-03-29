import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import './styles.css';

interface IViewDetailsButton {
  catID: string
}

class ViewDetailsButton extends Component<IViewDetailsButton> {
  render() {
    return (
      <a className="btn btn-primary btn-block btn-details" href={"/" + this.props.catID}>View details</a>
    );
  }
}

export default ViewDetailsButton;