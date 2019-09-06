import styled from 'styled-components'
import { color } from '../../styles/var.style'
import searchPath from '../../assets/search.svg'

export const Nav = styled.nav`
    margin-top: 20px;
    display: flex;
    align-items: center;
`
export const Logotype = styled.img`
    margin-left: -7px;
`
export const Search = styled.div`
    height: 40px;
    box-sizing: border-box;
    flex: 1;
    align-items: stretch;
    justify-content: flex-start;
    border: 2px solid ${color.primary};
    border-right-width: 0;
    border-radius: 4px 0 0 4px;
`
export const SearchInput = styled.input`
    height: 100%;
    width: 100%;
    flex: 1;
    box-sizing: border-box;
    margin: 0;
    padding: 0 0 0 8px;
    border: 1px solid transparent;
    font-size: 14px;
    font-family: Calibri, Arial,sans-serif;
    color: #001a34;
    line-height: 18px;
    outline: none;
    vertical-align: middle;
    border-radius: 2px 0 0 2px;
    text-overflow: ellipsis;
    box-shadow: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    
`
export const SearchButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 76px;
    
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
    background-color: #005bff;
    padding: 0;
    margin-right: 24px;
`
export const SearchButtonWrapContent = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    height: 40px;
    padding: 0 15px;
    background-color: transparent;
    &::before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 24px;
        height: 24px;
        background-image: url(${searchPath});
        background-color: transparent;
        background-repeat: no-repeat;
    }
`
export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3px 10px;
    cursor: pointer;
    &:hover {
        color: ${color.primary};
    }
    &:hover svg path {
        fill: ${color.primary};
    }
`
export const IconText = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    font-family: Calibri, Arial,sans-serif;
`
export const BookText = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    font-family: Calibri, Arial,sans-serif;
`
export const HeaderH1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    letter-spacing: normal;
    font-family: Arial, sans-serif;
`