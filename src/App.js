import React, { Component } from 'react';
import './App.css';
import './animations/animations.css'
import { Questionnaire } from './components/questionnaire/questionnaire';
import { LackOfAccess } from './components/lackOfAccess/lackOfAccess';
import { CV } from './components/cv/CVContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faEnvelope,faPhone,faHome,
        faGlobe,faPlane,faBook,faMusic,
        faPenFancy,faCogs,faUser,faGraduationCap,
        faTv } from '@fortawesome/free-solid-svg-icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const MODES = {
  QUESTIONS: 1,
  CV: 2,
  CV_UNAVAILABLE: 3 
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      mode: MODES.QUESTIONS
    }
  }

  isCvAvailable(access) { 
    this.setState({ mode: access ? MODES.CV : 
      !access ? MODES.CV_UNAVAILABLE :
      MODES.QUESTIONS
    })
  }

  repeatQuestions() {
    this.setState({ mode: MODES.QUESTIONS })
  }

  renderContent() {
    switch (this.state.mode) {
      case MODES.QUESTIONS: 
        return <Questionnaire setCvAccess={ (access) => this.isCvAvailable(access) } />;
       case MODES.CV:
         return <CV />;
      case MODES.CV_UNAVAILABLE: 
        return <LackOfAccess repeat={ () => this.repeatQuestions() }/>
      default:
        break
     }
  }

  render() { 
    return (
      <ReactCSSTransitionGroup
        transitionName="questions"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="App"> 
            { this.renderContent() }
        </div>
      
      </ReactCSSTransitionGroup>
    )
  }
}

export default App;

library.add(faEnvelope, faPhone, faHome,faGlobe,faPlane,
  faBook,faMusic,faPenFancy,faCogs,faUser,faGraduationCap,faTv
)