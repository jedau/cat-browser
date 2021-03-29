import { Component } from 'react';
import axios from 'axios';
import CatCardImage from '../../components/CatCardImage';
import SingleCatDetails from '../../components/SingleCatDetails';

import './styles.css';

interface SingleCatProps {
  match: any,
  history: any
}

class SingleCatPage extends Component<SingleCatProps> {
  state = {
    breed: '',
    description: '',
    id: '',
    imageURL: '',
    origin: '',
    temperament: '',
    loading: true
  }

  async getInfo(): Promise<void> {
    await axios.get(`https://api.thecatapi.com/v1/images/${this.props.match.params.id === '' ? '0' : this.props.match.params.id}`)
      .then(res => {
        const response = res.data;
        const details = response.breeds[0];
        this.setState({
          breed: details.name,
          description: details.description,
          id: details.id,
          imageURL: response.url,
          origin: details.origin,
          temperament: details.temperament,
          loading: false
        });
      })
      .catch(error => {
        if (error.response) {
          alert("Apologies but we could not load new cats for you at this time! Miau!");
          this.props.history.push('/');
        }
      });
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="container">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="single-cat-container card">
            <div className="card-header">
              <a className="btn btn-primary" href={"/?breed=" + this.state.id}>Back</a>
            </div>
            <CatCardImage key={this.props.match.params.id} catID={this.props.match.params.id} imageURL={this.state.imageURL} />
            <SingleCatDetails
              breed={this.state.breed}
              description={this.state.description}
              origin={this.state.origin}
              temperament={this.state.temperament}
            />
          </div>
        </div>
      );
    }
  }
}

export default SingleCatPage;