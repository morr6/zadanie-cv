import React, {Component} from 'react';
import {PersonalInformationsContainer, 
        ImageBox,
        Image, 
        Name,
        Profession, 
        SocialMedia,
    } from './PersonalInformations.s';
import { ContactContainer } from './components/contact/contact'
import { HobbiesContainer } from './components/hobbies/hobbies';
import * as Avatar from '../../../../assets/avatar.png'


export class PersonalInformations extends Component {

    render() {
        return(
            <PersonalInformationsContainer>
                <ImageBox>
                    <Image src={Avatar} alt='Avatar' />
                </ImageBox>
                <Name> JOHN SMITH</Name>
                <Profession> WEB DEVELOPER </Profession>
                <ContactContainer />
                <HobbiesContainer />
                <SocialMedia> Twitter: @Johndoe </SocialMedia>
                <SocialMedia> Facebook: John Doe</SocialMedia>
            </PersonalInformationsContainer>
        )
    }
}