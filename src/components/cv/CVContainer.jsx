import React, {Component} from 'react';
import {CvContainer,
} from './CVContainer.s';
import { PersonalInformations } from './components/personalInformations/PersonalInformations';
import { ProfessionalInformations } from './components/professionalInformations/ProfessionalInformations';

export class CV extends Component {

    render() {
        return(
            <CvContainer>
                <PersonalInformations />
                <ProfessionalInformations />
            </CvContainer>
        )
    }
} 