import React, {Component} from 'react';
import {ProfessionalInformationsContainer} from './ProfesionalInformations.s';
import { Profile } from './components/profile/profile';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';

export class ProfessionalInformations extends Component {

    render() {
        return(
            <ProfessionalInformationsContainer>
                <Profile />
                <Education />
                <Experience />
                <Skills />                   
            </ProfessionalInformationsContainer>
        )
    }
}
