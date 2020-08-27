import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Contacts from './components/Contacts'
import ContactDetail from './components/ContactDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <div className="App">
      <Route path="/" exact component={Contacts}></Route>
      <Route path="/preview" exact component={ContactDetail}></Route>
      </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
