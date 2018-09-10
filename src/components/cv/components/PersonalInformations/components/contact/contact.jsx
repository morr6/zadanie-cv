import React, {Component} from 'react';
import {Contact,
        ContactTitle,
        ContactItem,
        ContactItemIcon,
    } from './contact.s';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyles = { 
    color: '#fdc935',
    marginLeft:'auto',
    marginRight: '10%',
    fontSize: '20px'
}

export class ContactContainer extends Component {

    render() {
        return(
            <Contact>
            <ContactTitle> CONTACT  </ContactTitle>
            <ContactItem> 
                <ContactItemIcon> 
                    <FontAwesomeIcon icon="envelope" style={iconStyles} />
                </ContactItemIcon> 
                johnsmith@company.com 
            </ContactItem>
            <ContactItem> 
                <ContactItemIcon>
                    <FontAwesomeIcon icon="phone" style={iconStyles} />
                </ContactItemIcon>
                +62 0819090168930 
            </ContactItem>
            <ContactItem> 
                <ContactItemIcon> 
                    <FontAwesomeIcon icon="home" style={iconStyles} />
                </ContactItemIcon>
                Merkid, Yogyakarta  
            </ContactItem>
            <ContactItem> 
                <ContactItemIcon> 
                    <FontAwesomeIcon icon="globe" style={iconStyles} />
                </ContactItemIcon>
                www.jhonmrongos.com  
            </ContactItem>
        </Contact>
        )
    }
} 

