import React, {Component} from 'react';
import {CvContainer,
} from './CVContainer.s';
import { PersonalInformations } from './components/PersonalInformations/PersonalInformations';

export class CV extends Component {

    render() {
        return(
            <CvContainer>
                <PersonalInformations />
            </CvContainer>
        )
    }
} 