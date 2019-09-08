import searchPath from '../../assets/search.svg'
import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { 
    color
} from '../../styles/var.style'

export const Wrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Search = styled.div`
    position: relative;
    height: 40px;
    box-sizing: border-box;
    flex: 1;
    align-items: stretch;
    justify-content: flex-start;
    border: 2px solid #005bff;
    border-right-width: 0;
    border-radius: 4px 0 0 4px;
    margin-left: 25px;
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
    background-color: ${color.primary};
    padding: 0;
    margin-right: 24px;
    &:hover {
        background-color: ${color.primaryHover};
    }
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
export const CancellButton = styled(ReactSVG)`
    position: absolute;
    top: 10px;
    right: 10px;
    svg line {
        stroke: ${color.bottom};
    }
    svg:hover {
        cursor: pointer;
            line {
            stroke: ${color.default};
        }
    }
`