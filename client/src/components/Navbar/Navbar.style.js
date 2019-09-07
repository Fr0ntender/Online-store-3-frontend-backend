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
    
    ${props => {
        if (props.types === "Login") {
            return `
                &:hover {
                    color: ${color.primary};
                }
                svg {
                    margin-left: -9px;
                }
                &:hover svg path {
                    stroke: ${color.primary};
                }
            `
        } else if (props.types === "Logoff") {
            return `
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
        } else if (props.types === "book") {
            return `
                width: 100px;
                &:hover {
                    color: ${color.primary};
                }
                &:hover svg path {
                    fill: ${color.primary};
                }
            `
        }
    }}
`
export const IconText = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    word-wrap: normal;
    font-family: Calibri, Arial,sans-serif;
`