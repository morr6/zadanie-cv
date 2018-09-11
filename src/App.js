import React, { Component } from 'react';
import './App.css';
import { Questionnaire } from './components/questionnaire/questionnaire';
import { LackOfAccess } from './components/lackOfAccess/lackOfAccess';
import { CV } from './components/cv/CVContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faEnvelope,faPhone,faHome,faGlobe,faPlane,faBook,faMusic,
  faPenFancy,faCog,faUser,faGraduationCap,faDesktop
} from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  constructor() {
    super();

    this.state = {
      isCvAvailable: true
    }
  }

  isCvAvailable(access) { 
    this.setState({ isCvAvailable: access })
  }

  renderContent() {
    if (this.state.isCvAvailable === true) {
      return <CV />
    } else if (this.state.isCvAvailable === false) {
      return <LackOfAccess />
    } else {
      return <Questionnaire setCvAccess={ (access) => this.isCvAvailable(access) } />
    }
  }

  render() { 
    return (
      <div className="App"> 
        { this.renderContent() }
      </div>
    )
  }
}

export default App;

library.add(faEnvelope, faPhone, faHome,faGlobe,faPlane,
  faBook,faMusic,faPenFancy,faCog,faUser,faGraduationCap,faDesktop
)