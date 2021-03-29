import { Component } from 'react';
import { Clawntext } from '../Pawvider';

import './styles.css';

class LoadMoreButton extends Component {
  static contextType = Clawntext;
  state = {
    selectedBreed: '',
    loading: false,
  }

  constructor(props: any) {
    super(props);
  }

  loadMoreCats() {
    this.context.setLoading(true);
  }

  componentDidMount() {
    this.setState({
      selectedBreed: this.context.state.selectedBreed
    });
  }

  render() {
    if (this.context.state.selectedBreed == '' || this.context.state.selectedBreed == '0') {
      return (
        <button className="btn btn-success btn-load" disabled>Load more</button>
      );
    } else if (this.context.state.loading || this.state.loading) {
      return (
        <button className="btn btn-success btn-load" disabled>Loading cats...</button>
      );
    } else {
      return (
        <a className="btn btn-success btn-load" onClick={this.loadMoreCats}>Load more</a>
      );
    }
  }
}

export default LoadMoreButton;