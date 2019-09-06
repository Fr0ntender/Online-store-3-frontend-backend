import styled from 'styled-components'
import { color } from '../../styles/var.style'

export const List = styled.ul`
    margin-top: 2px;
    padding-left: 0;
    a {
        text-decoration: none;
        color: ${color.default};
        &:hover {
            color: ${color.primary}
        } 
    }
`
export const ListElem = styled.li`
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    list-style: none;
    letter-spacing: normal;
    font-family: Arial, sans-serif;
    padding-left: 0;
    color: ${color.default};
    margin-top: 15px;
    &:first-child {
        margin-top: 0;
    }
`