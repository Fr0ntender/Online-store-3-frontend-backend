import styled from 'styled-components'
import {
    color,
    fontsize,
    fontfamily
} from './var.style'

export const FileInput = styled.input`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`

export const FileLabel = styled.label`
    outline: none;
    border: none;
    cursor: pointer;
    min-width: 217.55px;
    background-color: ${color.primary};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 8px 15px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 3px;
    transition: all .08s ease-in-out;
    
    &:hover {
        background-color: ${color.primaryHover};
    }
    ${props => props.pt ? `padding-top: ${props.pt}px;` : ''}
    ${props => props.pb ? `padding-bottom: ${props.pb}px;` : ''}
    ${props => props.pl ? `padding-left: ${props.pl}px;` : ''}
    ${props => props.pr ? `padding-right: ${props.pr}px;` : ''}
    ${props => props.mt ? `margin-top: ${props.mt}px;` : ''}
    ${props => props.mb ? `margin-bottom: ${props.mb}px;` : ''}
    ${props => props.ml ? `margin-left: ${props.ml}px;` : ''}
    ${props => props.mr ? `margin-right: ${props.mr}px;` : ''}
`
export const FileLabelDesc = styled.span`
    font-weight: 700;
    font-family: Arial,sans-serif;
    line-height: 1.17;
    font-size: 14px;
    color: ${color.light};
    user-select: none;
    ${props => props.ml ? `margin-left: ${props.ml}px;` : ''}
    ${props => props.mr ? `margin-right: ${props.mr}px;` : ''}
`
const ibsnValid = props => {
    switch (props.name) {
        case 'isbn':
            if (!props.isbnValid) {
                return `
                    content: "ISBN не корректен, повторите ввод";
                    opacity: 1;
                `
            } else {
                return `
                    content: "";
                    opacity: 0;
                `
            }
        case 'year':
            if (!props.yearValid) {
                return `
                    content: "Год должен быть не ранее 1800 г, повторите ввод";
                    opacity: 1;
                `
            } else {
                return `
                    content: "";
                    opacity: 0;
                `
            }
        case 'name':
            if (!props.nameRequired) {
                return `
                    content: "обязательный параметр";
                    opacity: 1;
                `
            } else {
                return `
                    content: "";
                    opacity: 0;
                `
            }
        case 'firstName':
            if (!props.firstRequired) {
                return `
                    content: "обязательный параметр";
                    opacity: 1;
                `
            } else {
                return `
                    content: "";
                    opacity: 0;
                `
            }
        case 'lastName':
            if (!props.lastRequired) {
                return `
                    content: "обязательный параметр";
                    opacity: 1;
                `
            } else {
                return `
                    content: "";
                    opacity: 0;
                `
            }
        default:
            return `
                content: "";
                opacity: 0;
            `
    }
}
export const TextInput = styled.input`
    position: relative;
    display: block;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid ${color.bottom};
    background-color: transparent;
    padding: 8px 0;

    width: 100%;
    height: 34px;
    font-weight: 600;
    font-family: Arial,sans-serif;
    line-height: 1.17;
    font-size: 14px;
    color: ${color.default};
    z-index: 1;
    &:focus {
        border-bottom: 2px solid ${color.primary};
    }
    
`
export const TextInputWrap = styled.div`
    width: 100%;
    z-index: 1;
    background-color: transparent;
    &::after {
        ${props => ibsnValid(props)}
        display: block;
        position: absolute;
        bottom: -35px; left: 15px;
        z-index: 2;
        width: 100%; height: 34px;
        color: ${color.accent2};
        font-size: ${fontsize.desc.md};
        font-weight: 600;
        letter-spacing: normal;
        font-family: ${fontfamily.default};
    }
`