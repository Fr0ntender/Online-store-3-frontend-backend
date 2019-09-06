import styled from 'styled-components'
import { 
    color,
    fontsize,
    fontfamily,
} from '../../styles/var.style'


export const Nav = styled.nav`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        text-decoration: none;
        color: ${color.default};
    }
`
export const Logos = styled.div`
    display: flex;
    align-items: center;
`
export const LogosIcon = styled.img`
    margin-right: 7px;
`
export const LogosDesc = styled.span`
    color: ${color.primary};
    font-size: ${fontsize.header.h2.md};
    font-weight: 600;
    letter-spacing: normal;
    font-family: ${fontfamily.default};

`
export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3px 10px;
    cursor: pointer;
    
    ${props => props.enter ? 
        `
        &:hover {
            color: ${color.primary};
        }
        svg {
            margin-left: -9px;
        }
        &:hover svg path {
            stroke: ${color.primary};
        }
        ` : 
        `
        &:hover {
            color: ${color.accent2};
        }
        svg {
            margin-right: -6px;
        }
        &:hover svg path {
            stroke: ${color.accent2};
        }
        `
    }
    
`
export const IconText = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    font-family: Calibri, Arial,sans-serif;
`