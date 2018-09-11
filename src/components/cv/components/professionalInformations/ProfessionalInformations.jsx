import React, {Component} from 'react';
import {ProfessionalInformationsContainer} from './ProfesionalInformations.s';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileContainer } from './components/profile/profile';
import { EducationContainer } from './components/education/education';

const iconStyles = {
    color: '#fdc935',
    fontSize: '40px'
}

export class ProfessionalInformations extends Component {

    render() {
        return(
            <ProfessionalInformationsContainer>
                <ProfileContainer />
                <EducationContainer />
                   
            </ProfessionalInformationsContainer>
        )
    }
}
