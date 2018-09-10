import glamorous from 'glamorous';

export const Contact = glamorous.div(props => {
    return {
        width: '100%',
        textAlign: 'center',
        color: '#383838',
    }
})
export const ContactTitle = glamorous.div(props => {
    return {
        fontSize: '25px',
        marginTop: '10%',
        width: '100%',
    }
})
export const ContactItem = glamorous.div(props => {
    return {
        color: 'black',
        alignItems: 'center',
        display: 'flex',
        fontSize: '12px',   
        margin: '5% 0',
        backgroundSize: '30% 30%',
        height: '30px',
        width: '100%',
        
    }
})
export const ContactItemIcon = glamorous.div(props => {
    return { 
        display:'flex',
        alignItems: 'center',
        marginRight: '2%',
        width: '25%',
        height: '100%',
        background: '#383838',
    }
})
