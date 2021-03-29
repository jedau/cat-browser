import { Component, createContext } from 'react';

interface ClawntextInterface {
  state: any,
  setBreed: any,
  setLoading: any
}

export const Clawntext = createContext<ClawntextInterface | null>(null);

// The CatProvider component ;)
class Pawvider extends Component {
  state = {
    selectedBreed: '',
    loading: true
  }

  render() {
    return (
      <Clawntext.Provider value={
        {
          state: this.state,
          setBreed: (breed: string) => this.setState({
            selectedBreed: breed
          }),
          setLoading: (loading: boolean) => this.setState({
            loading: loading
          })
        }
      }>
        {this.props.children}
      </Clawntext.Provider>
    );
  }
}

export default Pawvider;