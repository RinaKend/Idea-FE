import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from "./Components/Note/note";
import Fullnote from "./Components/FullNote/fullnote";

class App extends Component {

  render() {
    return (
      <div className="App">
          <Note title='First Note' text='траляляля'/>

      </div>
    );
  }
}

export default App;
