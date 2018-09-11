import React, {Component} from 'react';
import {SkillsContainer, 
        SectionIcon, 
        SectionName, 
        SectionContent, 
        SkillBox,
        SkillKnowledge,
        SkillName} from './skills.s';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyles = {
    color: '#fdc935',
    fontSize: matchMedia('(max-width:450px)').matches ? '20px' : '40px'
}

export class Skills extends Component {

    render() {
        return (
            <SkillsContainer>
                <SectionIcon>
                    <FontAwesomeIcon icon='cogs' style={iconStyles} />
                </SectionIcon>
                <SectionName> SKILLS </SectionName>
                <SectionContent>
                    <SkillBox>
                        <SkillKnowledge> 25% </SkillKnowledge>
                        <SkillName> Java </SkillName>
                    </SkillBox>
                    <SkillBox>
                        <SkillKnowledge> 55% </SkillKnowledge>
                        <SkillName> PHP </SkillName>
                    </SkillBox>
                    <SkillBox>
                        <SkillKnowledge> 60% </SkillKnowledge>
                        <SkillName> C# </SkillName>
                    </SkillBox>
                    <SkillBox>
                        <SkillKnowledge> 70% </SkillKnowledge>
                        <SkillName> HTML5 </SkillName>
                    </SkillBox>
                    <SkillBox>
                        <SkillKnowledge> 85% </SkillKnowledge>
                        <SkillName> CSS </SkillName>
                    </SkillBox>
                    <SkillBox>
                        <SkillKnowledge> 90% </SkillKnowledge>
                        <SkillName> Swift </SkillName>
                    </SkillBox>
                </SectionContent>
            </SkillsContainer>
        )
    }
}