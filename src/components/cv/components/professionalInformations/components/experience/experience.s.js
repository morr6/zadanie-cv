import glamorous from 'glamorous';


export const ExperienceContainer = glamorous.div(props => {
    return {
        width: '100%',
        marginTop: '7.55%'
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
        position: 'relative',
        width: '80%',
        fontSize: '9px',
        textAlign: 'left',
        marginLeft: 'auto',
        padding: '10px 0 0 20px',
        borderLeft: '2px solid #fdc935',
        
        '@media screen and (max-width:480px)': {
            fontSize: '8px',
            padding: '10px 0 0 15px',
        },

        '&::before': {
          content: `''`,
          display: 'inline-block',
          background: '#fdc935',
          position: 'absolute',
          left: '-9',
          top: '7.5',
          width: '15px',
          height: '15px',
          borderRadius: '50%'
          
        }
    }
})