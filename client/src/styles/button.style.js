import styled from 'styled-components'
import { color } from './var.style'

export const BayButton1 = styled.button`
    outline: none;
    border: none;
    cursor: pointer;

    font-family: Arial,sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.17;
    text-align: center;
    text-decoration: none;
    color: ${color.light};

    background-color: ${color.primary};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
    padding: 8px 15px;
    vertical-align: middle;
    border-radius: 2px;
    transition: all .08s ease-in-out;
    user-select: none;
    &:hover {
        background-color: ${color.primaryHover};
    }
`