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
        animation: `${animation} 2s infinite ease-in-out alternate`,

        '@media screen and (max-width: 1024px)': {
            fontSize: '40px'
        }
    }
})

export const RepeatButton = glamorous.div(props => {
    return {
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '25px',
        padding: '10px 0',
        borderRadius: '50px',
        boxShadow: '0px 10px 5px 2px grey',
        marginTop: '40%',
        textAlign: 'center',

        '@media screen and (max-width:1024px)': {
            width: '80%', 
            fontSize: '25px',
            margin: '40% auto 0 auto'
        },

        ':hover': {
            transition: '.5s',
            transform: 'scale(1.1)'
        }
    }
})