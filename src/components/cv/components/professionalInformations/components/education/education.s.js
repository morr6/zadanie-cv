import glamorous from 'glamorous';
import * as borderImg from '../../../../../../assets/border.png'

export const Education = glamorous.div(props => {
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
        marginBottom: '5%',
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
        width: '70%',
        fontSize: '10.5px',
        textAlign: 'left',
        margin: '0 auto 0 auto',
        padding: '10px 0 0 20px',
        borderLeft: '2px solid #fdc935',

        '&::before': {
          content: `''`,
          display: 'inline-block',
          background: '#fdc935',
          position: 'relative',
          left: '-29.5',
          top: '5',
          width: '17px',
          height: '17px',
          borderRadius: '50%'
          
        }
    }
})