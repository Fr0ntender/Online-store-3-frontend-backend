import styled from 'styled-components'
import { 
    color,
    fontsize,
    fontfamily, 
} from './var.style'

export const HeaderH1 = styled.h1`
    color: ${color.default};
    font-size: ${fontsize.header.h1.md};
    font-weight: 600;
    letter-spacing: normal;
    font-family: ${fontfamily.default};
    ${props => props.pt ? `padding-top: ${props.pt}px;` : ''}
    ${props => props.pb ? `padding-bottom: ${props.pb}px;` : ''}
    ${props => props.mt ? `margin-top: ${props.mt}px;` : ''}
    ${props => props.mb ? `margin-bottom: ${props.mb}px;` : ''}
`

export const HeaderH3 = styled.h3`
    color: ${color.default};
    font-size: ${fontsize.header.h3.md};
    font-weight: 600;
    letter-spacing: normal;
    font-family: ${fontfamily.default};
    ${props => props.pt ? `padding-top: ${props.pt}px;` : ''}
    ${props => props.pb ? `padding-bottom: ${props.pb}px;` : ''}
    ${props => props.mt ? `margin-top: ${props.mt}px;` : ''}
    ${props => props.mb ? `margin-bottom: ${props.mb}px;` : ''}
`
export const Desc1 = styled.p`
    color: ${color.default};
    font-size: ${fontsize.desc.md};
    font-weight: 400;
    letter-spacing: normal;
    font-family: ${fontfamily.default};
    ${props => props.pt ? `padding-top: ${props.pt}px;` : ''}
    ${props => props.pb ? `padding-bottom: ${props.pb}px;` : ''}
    ${props => props.mt ? `margin-top: ${props.mt}px;` : ''}
    ${props => props.mb ? `margin-bottom: ${props.mb}px;` : ''}
`
export const Desc2 = styled.p`
    color: ${color.primaryText};
    font-size: ${fontsize.desc.md};
    font-weight: 600;
    letter-spacing: normal;
    font-family: ${fontfamily.default};
    ${props => props.pt ? `padding-top: ${props.pt}px;` : ''}
    ${props => props.pb ? `padding-bottom: ${props.pb}px;` : ''}
    ${props => props.mt ? `margin-top: ${props.mt}px;` : ''}
    ${props => props.mb ? `margin-bottom: ${props.mb}px;` : ''}
`