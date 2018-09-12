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
         background:'green',
        width: '90%',
        fontSize: '10.5px',
        textAlign: 'left',
        margin: '5%'

    }
});
export const SkillBox = glamorous.div(props => {
    return {
        height: '50px',
        float: 'left',
        margin: '20px 2.5px 20px 10px',

        '@media screen and (max-width:380px)': {
            margin: '10px 0 5px 0px'
        }
    }
})

export const SkillBorder = glamorous.div(props => {
    return {  
        height: '60px',
        width: '60px',
        float: 'left',
        position: 'absolute', 

        '@media screen and (max-width:380px)': {
            height: '40px',
            width: '40px',
        }
    }
})
export const SkillKnowledge = glamorous.div(props => {
    return {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:'60px',
        width: '60px',
        float: 'left',
        fontWeight: '800',

        '@media screen and (max-width:380px)': {
            fontSize: '8px',
            height: '40px',
            width: '40px',
        }
    }
})
export const SkillName = glamorous.div(props => {
    return {
        marginLeft: '2.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        float: 'left',
        height:'60px',
        width: '20px',

        '@media screen and (max-width:380px)': {
            fontSize: '8px',
            alignItems: 'center',
            height: '40px',
            marginLeft: '3px',
        }
    }
})