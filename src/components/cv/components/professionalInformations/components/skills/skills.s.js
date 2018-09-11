import glamorous from 'glamorous';

export const SkillsContainer = glamorous.div(props => {
    return {
        width: '100%',
        marginTop: '7.5%'
    }
});
export const SectionIcon = glamorous.div(props => {
    return {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        width: '27%',
        height: '35px',
        float: 'left'
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
        fontSize: '20px'
    }
})
export const SectionContent = glamorous.div(props => {
    return {
         background:'green',
        width: '90%',
        fontSize: '10.5px',
        textAlign: 'left',
        margin: '5% auto'

    }
});
export const SkillBox = glamorous.div(props => {
    return {
        height: '50px',
        float: 'left',
        margin: '20px 2.5px 20px 10px'
    }
})
export const SkillKnowledge = glamorous.div(props => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: '8px solid #fcca35',
        height:'40px',
        width: '40px',
        float: 'left',
        fontWeight: '800'
    }
})
export const SkillName = glamorous.div(props => {
    return {
        marginLeft: '7.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        float: 'left',
        height:'100%',
        width: '30px',
    }
})