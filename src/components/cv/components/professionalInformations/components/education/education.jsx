import React, {Component} from 'react';
import {EducationContainer, 
        SectionIcon,
        SectionName,
        SectionContent} from './education.s'
import {StyledFAI} from '../../../../../../assets/icons/iconsStyles'

export class Education extends Component {

    render() {
        return(
            <EducationContainer>
                <SectionIcon> 
                        <StyledFAI icon='graduation-cap' />
                </SectionIcon>
                <SectionName> EDUCATION </SectionName>
                <SectionContent>
                    <span> UNIVERSYTY OF YK </span> <br/>
                    <span> Bachelor in Technology Information <br/> 
                        2011 - 2014
                    </span> <br />
                    <span> 
                        Lorem ipnsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse non sem ac melus bibendum pulvinar.
                        Nunc laoreel sed mauris id malesauda cuabiut. 
                    </span>
                </SectionContent>
                <SectionContent>
                    <span> UNIVERSYTY OF GK </span> <br/>
                    <span> Bachelor in Technology Information <br/> 
                        2014 - 2015
                    </span> <br/>
                    <span> 
                        Lorem ipnsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse non sem ac melus bibendum pulvinar.
                        Nunc laoreel sed mauris id malesauda cuabiut. 
                    </span>
                </SectionContent>
            </EducationContainer>
        )
    }
}
