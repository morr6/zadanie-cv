import React, {Component} from 'react';
import { MainContainer, AccessMessage, RepeatButton } from './lackOfAccss.s';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../animations/animations.css';

export class LackOfAccess extends Component {

    render() {
        return(
            <MainContainer>
                <ReactCSSTransitionGroup
                    transitionName="access-denied"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
            
                    <AccessMessage> 
                        Access denied 
                    </AccessMessage>
                
                </ReactCSSTransitionGroup>
                <RepeatButton onClick={ () => this.props.repeat()}> 
                    Try again

                </RepeatButton>
            </MainContainer>
        )
    }
}