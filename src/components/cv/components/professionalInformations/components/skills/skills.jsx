import React, {Component} from 'react';
import {SkillsContainer, 
        SectionIcon, 
        SectionName, 
        SectionContent, 
        SkillBox,
        SkillKnowledge,
        SkillName,
        SkillBorder} from './skills.s';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { keyframes } from 'glamor';

const iconStyles = {
    color: '#fdc935',
    fontSize: matchMedia('(max-width:450px)').matches ? '20px' : '40px'
}

export class Skills extends Component {

    renderSkillKnowledgeBorder(percent) {
        return <svg id='elo'viewBox="0 0 37 37">
            <path 
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#666666"
                strokeWidth="5"
                strokeDasharray='100'
            />
            <path id='elo'
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#fdc935"
                strokeWidth="5"
                strokeDasharray={percent + ',100'}
            />
            <animate 
                xLinkHref="#elo"
                attributeName="strokeDasharray"
                from='0,100'
                to={percent + ',100'}
                dur='2s'
            />
        </svg>
    }

    render() {
        return (
            <SkillsContainer>
                <SectionIcon>
                    <FontAwesomeIcon icon='cogs' style={iconStyles} />
                </SectionIcon>
                <SectionName> SKILLS </SectionName>
                <SectionContent>
                    <SkillBox>
                        <SkillBorder>
                            { this.renderSkillKnowledgeBorder(25) }
                        </SkillBorder>
                        <SkillKnowledge> 25% </SkillKnowledge>
                        <SkillName> Java </SkillName>
                    </SkillBox>
                    <SkillBox>
                        <SkillBorder>
                            { this.renderSkillKnowledgeBorder(55) }
                        </SkillBorder>
                        <SkillKnowledge> 55% </SkillKnowledge>
                        <SkillName> PHP </SkillName>
                    </SkillBox>
                    <SkillBox>
                        <SkillBorder>
                            { this.renderSkillKnowledgeBorder(50) }
                        </SkillBorder>
                        <SkillKnowledge> 50% </SkillKnowledge>
                        <SkillName> C# </SkillName>
                    </SkillBox>
                    <SkillBox>
                        <SkillBorder>
                            { this.renderSkillKnowledgeBorder(70) }
                        </SkillBorder>
                        <SkillKnowledge> 70% </SkillKnowledge>
                        <SkillName> HTML5 </SkillName>
                    </SkillBox>
                    <SkillBox>
                        <SkillBorder>
                            { this.renderSkillKnowledgeBorder(85) }
                        </SkillBorder>
                        <SkillKnowledge> 85% </SkillKnowledge>
                        <SkillName> CSS </SkillName>
                    </SkillBox>
                    <SkillBox>
                        <SkillBorder>
                            { this.renderSkillKnowledgeBorder(90) }
                        </SkillBorder>
                        <SkillKnowledge> 90% </SkillKnowledge>
                        <SkillName> Swift </SkillName>
                    </SkillBox>
                </SectionContent>
            </SkillsContainer>
        )
    }
}