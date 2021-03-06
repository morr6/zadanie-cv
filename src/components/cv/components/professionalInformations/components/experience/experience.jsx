import React, {Component} from 'react';
import {ExperienceContainer,
        SectionIcon,
        SectionName,
        SectionContent} from './experience.s';
import {StyledFAI} from '../../../../../../assets/icons/iconsStyles'

export class Experience extends Component {

    render() {
        return(
            <ExperienceContainer>
                <SectionIcon>
                    <StyledFAI icon='tv' />
                </SectionIcon>
                <SectionName> EXPERIENCE </SectionName>
                <SectionContent>
                    <span> DUGAB YK.CO </span> <br/> 
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
