import React, {Component} from 'react';
import {ExperienceContainer,
        SectionIcon,
        SectionName,
        SectionContent} from './experience.s';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyles = {
    color: '#fdc935',
    fontSize: '40px'
}

export class Experience extends Component {

    render() {
        return(
            <ExperienceContainer>
                <SectionIcon>
                    <FontAwesomeIcon icon='tv' style={iconStyles} />
                </SectionIcon>
                <SectionName> EXPERIENCE </SectionName>
                <SectionContent>
                    <span style={{position:'relative',left:'-17px'}}> DUGAB YK.CO </span> <br/> 
                    <span> Junior Web Developer <br/> 2015 </span> <br/>
                    <span>
                        Lorem ipnsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse non sem ac melus bibendum pulvinar.
                        Nunc laoreel sed mauris id malesauda cuabiut. 
                    </span>
                </SectionContent>   
            </ExperienceContainer >
        )
    }
}
