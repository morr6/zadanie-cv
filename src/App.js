import React, { Component } from 'react';
import './App.css';
import { Questionnaire } from './components/questionnaire/questionnaire';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  componentWillMount() {

  }


  render() {
    return (
      <div className="App"> 
        <Questionnaire />

      </div>
    )
  }
}

export default App;
