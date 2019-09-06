import styled from 'styled-components'
import { color, fontfamily, fontsize } from '../../styles/var.style'

export const List = styled.ul`
    margin-top: 50px;
    padding-left: 0;
`
export const ListElem = styled.li`
    font-size: ${fontsize.desc.sm};
    font-weight: 600;
    line-height: 1.43;
    list-style: none;
    letter-spacing: normal;
    font-family: ${fontfamily.default};
    padding-left: 0;
    margin-top: 8px;
    &:first-child {
        margin-top: 0;
    }
`
export const CardRow = styled.div`
    display: flex;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
`
export const CardWrap = styled.div`
    width: 100%;
    margin-right: -1px;
    min-width: 215px;
    height: 540px;
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    border: 1px solid ${color.borderLight};
`