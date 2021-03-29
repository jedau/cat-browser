import { Component } from 'react';
import axios from 'axios';
import { Clawntext } from '../Pawvider';

import './styles.css';

class CatBreedDropdown extends Component {
  static contextType = Clawntext;

  state = {
    breeds: [],
    selectedBreed: '0'
  }

  constructor(props: any) {
    super(props);
    this.selectBreed = this.selectBreed.bind(this);
  }

  async getBreeds(): Promise<void> {
    await axios.get(`https://api.thecatapi.com/v1/breeds`)
      .then(res => {
        const breeds = res;
        this.setState({
          breeds: breeds.data
        });
      })
      .catch(error => {
        if (error.response) {
          alert("Apologies but we could not load new cats for you at this time! Miau!");
        }
      });
  }

  selectBreed = (e: any) => {
    this.setState({
      selectedBreed: e.target.value
    });
    this.context.setBreed(e.target.value);
  }

  componentDidMount() {
    this.getBreeds();
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let defaultBreed = params.get('breed');
    if (defaultBreed != null) {
      this.setState({
        selectedBreed: defaultBreed
      });
      this.context.setBreed(defaultBreed);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="form-group">
          <label className="form-label">Breed</label>
          <select id="breedDropdown" className="form-control" onChange={this.selectBreed} value={this.state.selectedBreed}>
            <option value="0">Select breed</option>
            {this.state.breeds === undefined ? '' : this.state.breeds.map((breed: any) => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

export default CatBreedDropdown;