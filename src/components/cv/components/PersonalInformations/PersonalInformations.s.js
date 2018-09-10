import glamorous from 'glamorous';

export const PersonalInformationsContainer = glamorous.div(props => {
    return {
        height: '100%',
        width: '42%',
        background: '#fdc935',
        paddingTop: '10%'
    }
})

export const ImageBox = glamorous.div(props => {
    return {
        display: 'flex',
        justifyContent: 'center',
        height: '16.5%',
        width: '100%',
    }
})
export const Image = glamorous.img(props => {
    return {
        border: '5px solid white',
        borderRadius: '50%',
        height: '100%',
        width: '55% ',
        padding: '3px'
    }
})
export const Name = glamorous.div(props => {
    return {
        marginTop: '10%',
        fontWeight: 'bold',
        fontSize: '45px',
        textAlign: 'center',
        color: '#383838'
    }
})
export const Profession = glamorous.div(props => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '4%',
        background: '#383838',
        color: '#fdc935' 
    }
})


export const SocialMedia = glamorous.div(props => {
    return {
        width: '40%',
        float: 'left',
        margin: '15% 2.5% 2.5% 5%',
        fontSize: '11px'
    }
})
