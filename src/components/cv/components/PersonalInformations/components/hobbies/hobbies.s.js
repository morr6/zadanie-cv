import glamorous from 'glamorous';

export const Hobbies = glamorous.div(props => {
    return {
        width: '100%',
        textAlign: 'center',
        color: '#383838',
    }
})
export const HobbiesTitle = glamorous.div(props => {
    return {
        fontSize: '25px',
        marginTop: '10%',
        width: '100%',

        '@media screen and (max-width:992px)': {
            fontSize: '15px'
        }
    }
})
export const HobbyBox = glamorous.div(props => {
    return {
        display: 'flex',
        alignItems: 'center',       
        width: '40%',
        height: '40px',
        margin: '5% 5%',
        float: 'left',  
        color: 'black',
    }
})
export const HobbyIcon = glamorous.div(props => {
    return {
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#383838',
        float: 'left',
        width: '40%',
        height: '100%',
        marginRight: '10%',

        '@media screen and (max-width:992px)': {
            width: '20%',
            height:'50%'
        }
    }
})

export const HobbyName = glamorous.span(props => {
    return {
        display: 'flex',
        alignItems: 'center', 
        height: '100%',
        width:'50%',
    }
})