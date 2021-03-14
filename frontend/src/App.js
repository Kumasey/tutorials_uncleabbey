<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
=======
import React from 'react';
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnimalDetails from './AnimalDetails';
import './App.css';
import EditAnimals from './EditAnimals';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/animals/:id" component={AnimalDetails} />
        <Route path="/edit/:id" component={EditAnimals} />
      </Switch>
    </BrowserRouter>
  );
};
>>>>>>> 2c2ed4857b4f3f5bfa4add22b20f4831921e8682

export default App;
