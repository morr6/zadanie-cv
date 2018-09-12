import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import glamorous from 'glamorous';

export const StyledFAI = glamorous(FontAwesomeIcon)( () => ({
    color: '#fdc935',
    fontSize: '40px',

    '@media (max-width: 480px)': {
        fontSize: '20px'
    }
}))