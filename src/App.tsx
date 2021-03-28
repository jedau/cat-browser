import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './containers/Homepage';
import SingleCatPage from './containers/SingleCatPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/:id" render={(matchProps) => <SingleCatPage {...matchProps} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
