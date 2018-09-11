import glamorous from 'glamorous';

export const ProfileContainer = glamorous.div(props => {
    return {
        width: '100%',
        marginTop: '10%'
    }
})
export const SectionIcon = glamorous.div(props => {
    return {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        width: '27%',
        height: '35px',
        float: 'left',
        
        '@media screen and (max-width:980px)': {
            height: '20px',
        }
    }
})
export const SectionName = glamorous.div(props => {
    return {
        marginBottom: '5%',
        paddingLeft: '3%',
        display: 'flex',
        alignItems:'center',
        color: 'white',
        background: '#383838',
        width: '70%',
        height: '35px',
        fontSize: '20px',
        
        '@media screen and (max-width:480px)': {
            height: '20px',
            fontSize: '15px'
        }

    }
})
export const SectionContent = glamorous.div(props => {
    return {
        width: '90%',
        fontSize: '10.5px',
        textAlign: 'left',
        margin: '5% auto',
        
        '@media screen and (max-width:980px)': {
            fontSize: '8px',
        }

    }
})