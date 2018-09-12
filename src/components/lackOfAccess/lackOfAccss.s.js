import glamorous from 'glamorous';
import {css} from 'glamor'

const animation = css.keyframes({
    '0%': {transform: 'scale(1)'},
    '100%': {transform: 'scale(1.1)'}
})

export const MainContainer = glamorous.div(props => {
    return {
        margin: '0 auto',
        fontFamily: "'Lato', sans-serif",
    }
})

export const AccessMessage = glamorous.div(props => {
    return {
        fontSize: '70px',
        animation: `${animation} 2s infinite ease-in-out alternate` 
    }
})

export const RepeatButton = glamorous.div(props => {
    return {
        fontWeight: 'bold',
        cursor: 'pointer',
        width: '100%',
        fontSize: '25px',
        padding: '20px',
        borderRadius: '50px',
        boxShadow: '0px 6px 20px 2px grey',
        marginTop: '40%',
        textAlign: 'center',

        ':hover': {
            transition: '.5s',
            transform: 'scale(1.1)'
        }
    }
})