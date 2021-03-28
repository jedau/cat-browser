import { Component, createContext } from 'react';

interface ClawntextInterface {
  state: any,
  setBreed: any
}

export const Clawntext = createContext<ClawntextInterface | null>(null);

// The CatProvider component ;)
class Pawvider extends Component {
  state = {
    selectedBreed: ''
  }

  render() {
    return (
      <Clawntext.Provider value={
        {
          state: this.state,
          setBreed: (breed: string) => this.setState({
            selectedBreed: breed
          })
        }
      }>
        {this.props.children}
      </Clawntext.Provider>
    );
  }
}

export default Pawvider;