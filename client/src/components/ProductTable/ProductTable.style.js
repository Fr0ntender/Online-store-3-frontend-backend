import styled from 'styled-components'

import {
    color,
    fontfamily,
    fontsize
} from '../../styles/var.style'

import ReactSVG from 'react-svg'

export const Table = styled.table`
    width: 100%;
    margin-top: 36.5px;
    margin-bottom: 16px;
    color: #212529;
    border-collapse: collapse;
`
const TWidth = props => {
    if (props.set && props.set < 5) {
        return `
        width: ${(props.set / 5 * 100).toFixed(2)}%;`
    } else {
        return `
        width: 100%;`
    }
}
const TdPosition = props => {
    if (props.right) {
        return `float: right;`
    } else {
        return ``
    }
}
export const Th = styled.th`
    ${props => TWidth(props)}
    color: ${color.primaryText};
    border-top: none;
    padding-bottom: 10px;
    vertical-align: bottom;
    border-bottom: 1px solid ${color.borderLight};
    font-family: ${fontfamily.default};
    font-size: ${fontsize.desc.md};
    font-weight: 500;
    text-align: left;
    ${props => props.active ? `
        &:hover {
            cursor: pointer;
        };` : ''}
    &:last-child {
        text-align: right;
    }
`
export const Td = styled.td`
    ${props => TWidth(props)}
    ${props => TdPosition(props)}
    color: ${color.primaryText};
    border-top: none;
    margin: 0;
    padding: 0;
    height: 50px;
    vertical-align: middle;
    border-bottom: 1px solid ${color.borderLight};
    font-family: ${fontfamily.default};
    font-size: ${fontsize.desc.md};
    font-weight: 400;
    a {
        text-decoration: none;
    }
    &:not(:first-child):last-child {
        text-align: right;
    }
`

export const TableDesc = styled.p`
    color: ${color.primaryText};
    font-size: ${fontsize.desc.md};
    font-weight: 400;
    letter-spacing: normal;
    font-family: ${fontfamily.default};
    ${props => props.pt ? `padding-top: ${props.pt}px;` : ''}
    ${props => props.pb ? `padding-bottom: ${props.pb}px;` : ''}
    ${props => props.mt ? `margin-top: ${props.mt}px;` : ''}
    ${props => props.mb ? `margin-bottom: ${props.mb}px;` : ''}
    &:hover {
        cursor: pointer;
        ${props => props.color === 'change' ? ` color: ${color.primary};` : ` color: ${color.accent2};`}
    }
`
const ImgRotate = props => {
    if (props.name === props.rotates.type) {
        if (props.rotates.state.sort) {
            return `transform: rotate(180deg);`
        } else {
            return ``
        }
    } else {
        return `transform: rotate(-90deg);`
    }
}
export const ImgArrow = styled(ReactSVG)`
    margin-left: 5px;
    transition: all 0.3s ease;
    ${props => ImgRotate(props)}
`
export const Content = styled.div`
    display: flex;
`
