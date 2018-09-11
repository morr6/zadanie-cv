import glamorous from 'glamorous';

export const ProfessionalInformationsContainer = glamorous.div(props => {
    return {
        float: 'left',
        height: '100%',
        width: '58%',
        background: 'white',
    }
})

export const Profile = glamorous.div(props => {
    return {
        width: '100%',
        marginTop: '15%'
    }
})
export const SectionIcon = glamorous.div(props => {
    return {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        width: '23%',
        height: '40px',
        float: 'left'
    }
})
export const SectionName = glamorous.div(props => {
    return {
        paddingLeft: '3%',
        display: 'flex',
        alignItems:'center',
        color: 'white',
        background: '#383838',
        width: '74%',
        height: '40px',
        fontSize: '25px'
    }
})
export const SectionContent = glamorous.div(props => {
    return {
        width: '90%',
        fontSize: '9px',
        textAlign: 'left',
        margin: '5% auto'

    }
})