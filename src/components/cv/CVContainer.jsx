import React, {Component} from 'react';
import {CvContainer} from './CVContainer.s';
import { PersonalInformations } from './components/personalInformations/PersonalInformations';
import { ProfessionalInformations } from './components/professionalInformations/ProfessionalInformations';
import '../../animations/animations.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class CV extends Component {
 
    render() {
        return( 
            <CvContainer>
                <ReactCSSTransitionGroup
                    transitionName="cv-mount"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                        <div>
                            <PersonalInformations />
                            <ProfessionalInformations />
                        </div>
                </ReactCSSTransitionGroup>
            </CvContainer>
        )
    }
} 