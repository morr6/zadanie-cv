import React, {Component} from 'react';
import { MainContainer, AccessMessage, RepeatButton } from './lackOfAccss.s';

export class LackOfAccess extends Component {

    render() {
        return(
            <MainContainer>
                <AccessMessage> Brak dostępu </AccessMessage>
                <RepeatButton onClick={ () => this.props.repeat()}> 
                    Try again 
                </RepeatButton>
            </MainContainer>
        )
    }
}