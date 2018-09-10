import glamorous from 'glamorous';
import { css } from 'glamor';   

const renderAnimation = css.keyframes({
    '0%': { marginLeft: '0%' },
    '100%' : { marginLeft: 'auto' }
})

export const QuestionnaireContainer = glamorous.div(props => {
    return {    
        height: '50%',
        width: '40%',
        textAlign: 'center',
        margin: 'auto',
    }
})

export const Question = glamorous.div(props => {
    return {
        height: '20%',
        width: '80%',
        margin: '5% auto',
        fontSize: '35px',
        textAlign: 'center'
    }
})
export const Answer = glamorous.div(props => {
    return {
        transition: '.5s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        height: '15%',
        width: '50%',
        margin: '5% auto',
        fontSize: '35px',
        background:'purple',
        borderRadius: '50px',

        ':hover': {
            background: 'black',
            color:'purple',
        }
    }
})