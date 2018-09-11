import glamorous from 'glamorous'

export const CvContainer = glamorous.div(props => {
    return {
        height: '90%',
        width: '32.5%',
        margin: 'auto',
        background: 'white',
        boxShadow: '5px 5px 30px -5px black',

        '@media screen and (max-width: 992px)': {
            width: '100%',
            height: '100%'
        }
    }
})

