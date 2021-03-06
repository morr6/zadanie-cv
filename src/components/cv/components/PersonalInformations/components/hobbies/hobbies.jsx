import React, {Component} from 'react'; 
import {Hobbies,
        HobbiesTitle,
        HobbyBox,
        HobbyIcon,
        HobbyName,
    } from './hobbies.s';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyles = { 
    color: '#fdc935',
    fontSize: matchMedia('(max-width:980px)').matches ? '15px' : '25px'
}

export class HobbiesContainer extends Component {

    render() {
        return(
            <Hobbies>
                <HobbiesTitle> HOBBIES </HobbiesTitle>
                <HobbyBox>
                    <HobbyIcon>  
                        <FontAwesomeIcon icon="plane" style={iconStyles} />
                    </HobbyIcon>
                    <HobbyName> Travel </HobbyName>
                </HobbyBox>
                <HobbyBox>
                    <HobbyIcon>  
                        <FontAwesomeIcon icon="book" style={iconStyles} />
                    </HobbyIcon>
                    <HobbyName> Reading </HobbyName>
                </HobbyBox>
                <HobbyBox>
                    <HobbyIcon>  
                        <FontAwesomeIcon icon="music" style={iconStyles} />
                    </HobbyIcon> 
                    <HobbyName> Music </HobbyName>
                </HobbyBox>
                <HobbyBox>
                    <HobbyIcon>  
                        <FontAwesomeIcon icon="pen-fancy" style={iconStyles} />
                    </HobbyIcon>
                    <HobbyName> Writing </HobbyName>
                </HobbyBox>
            </Hobbies>
        )
    }
}
