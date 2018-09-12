import glamorous from 'glamorous'

export const CvContainer = glamorous.div(props => {
    return {
        width: '32.5%',
        margin: 'auto',
        background: 'white',
        boxShadow: '5px 5px 30px -5px black', 

        '@media screen and (max-width: 1024px)': {
            width: '100%',
            height: '100%'
        }
    }
})

