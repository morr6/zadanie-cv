import React, {Component} from 'react';
import {EducationContainer, 
        SectionIcon,
        SectionName,
        SectionContent} from './education.s'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyles = {
    color: '#fdc935',
    fontSize: matchMedia('(max-width:400px)').matches ? '20px' : '40px'
}

export class Education extends Component {

    render() {
        return(
            <EducationContainer>
                <SectionIcon> 
                        <FontAwesomeIcon icon='graduation-cap' style={iconStyles} />
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
