import React, {Component} from 'react';
import {ProfileContainer, 
        SectionIcon,
        SectionName,
        SectionContent} from './profile.s'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyles = {
    color: '#fdc935',
    fontSize: matchMedia('(max-width:400px)').matches ? '30px' : '40px'
}

export class Profile extends Component {

    render() {
        return(
            <ProfileContainer>
                <SectionIcon> 
                        <FontAwesomeIcon icon='user' style={iconStyles} />
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
