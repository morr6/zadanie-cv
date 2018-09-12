import glamorous from 'glamorous';
import { css } from 'glamor';   

const renderAnimation = css.keyframes({
    '0%': { marginLeft: '-50%' },
    '100%' : { marginLeft: 'auto'}
})

export const QuestionnaireContainer = glamorous.div(props => {
    return {    
        fontFamily: "'Lato', sans-serif",
        width: '40%',
        textAlign: 'center',
        margin: 'auto', 
        borderRadius: '50px',
        padding: '2%',
    }
})

export const Question = glamorous.div(props => {
    return {
        height: '20%',
        width: '80%',
        margin: '5% auto',
        fontSize: '35px',
        textAlign: 'center',
    }
})
export const Answer = glamorous.div(props => {
    return {
        transition: '.5s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        height: '75px',
        width: '50%',
        margin: '5% auto',
        fontSize: '35px',
        background: 'white',
        color: 'black',
        borderRadius: '50px',
        boxShadow: '0px 6px 20px 2px #afafaf',

        ':hover': {
            transform: 'scale(1.1)'
        }
    }
})