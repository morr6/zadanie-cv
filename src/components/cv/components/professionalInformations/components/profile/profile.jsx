import React, {Component} from 'react';
import {ProfileContainer, 
        SectionIcon,
        SectionName,
        SectionContent} from './profile.s'
import {StyledFAI} from '../../../../../../assets/icons/iconsStyles'

export class Profile extends Component {

    render() {
        return(
            <ProfileContainer>
                <SectionIcon> 
                        <StyledFAI icon='user' />
                </SectionIcon>
                <SectionName> PROFILE </SectionName>
                <SectionContent>
                    Lorem ipsum dolor sit armel, consectetur adipiscing 
                    elit Suspendisse non sem ac metus bibendum pulvinar. 
                    Nunc loareet sed mauris id malesuada. 
                    Curabiur, nibh sit amet lempus eleifend, ligula 
                    nibh nocgue lectus, quis feugiat erat turpis et nula 
                    <br/> . <br />
                    Nullam dolor odio, cursus sit amet
                    commodo non, iaculis sit amet dolor.
                    Proin dignissim nibh a finibus molesite
                    Donec vehicula magna nec volutpap finibus.
                    Funsce accumsan bibendum quam at pulvinar
                </SectionContent>
            </ProfileContainer>
        )
    }
}
