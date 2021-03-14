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

export default App;
