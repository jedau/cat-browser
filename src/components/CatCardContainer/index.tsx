import { Component } from 'react';
import axios from 'axios';
import CatCard from '../CatCard';
import { Clawntext } from '../Pawvider';

import './styles.css';

interface ICatCardContainer {
  breed: string
}

class CatCardContainer extends Component<ICatCardContainer> {
  static contextType = Clawntext;

  state = {
    data: []
  }

  async getImageURLs(): Promise<void> {
    await axios.get(`https://api.thecatapi.com/v1/images/search?limit=100&breed_id=${this.props.breed === '' ? '0' : this.props.breed}`)
      .then(res => {
        const response = res;
        this.setState({
          data: response.data
        });
        this.context.setLoading(false);
      })
      .catch(error => {
        if (error.response) {
          alert("Apologies but we could not load new cats for you at this time! Miau!");
        }
      });
  }

  componentDidUpdate(nextProps: any) {
    if (this.props !== nextProps) {
      this.getImageURLs();
    }
  }

  render() {
    return (
      <div className="grid-container">
        { this.state.data === undefined ? '' : this.state.data.map((cat: any) => <CatCard key={cat.id} catID={cat.id} imageURL={cat.url} />)}
      </div>
    );
  }
}

export default CatCardContainer;