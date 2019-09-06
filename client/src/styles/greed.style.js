import styled from 'styled-components'
import { breakpoint } from './var.style'

const ColWidth = props => {
    if (props.set && props.set < 12) {
        let mw = (props.set / 12 * 100).toFixed(2)
        return `
        flex: 0 0 ${mw}%;
        max-width: ${mw}%;`
    } else {
        return `
        flex: 0 0 100%;
        max-width: 100%;`
    }
}
export const Container = styled.div`
    width: 100%;
    flex: 0 0 auto;
    position: relative;
    max-width: ${breakpoint.xl};
    margin: 0 auto;
    padding-right: 15px;
    padding-left: 15px;
    @media screen and (max-width: 1000px) {
        max-width: ${breakpoint.l};
    }
    @media screen and (max-width: 800px) {
        max-width: ${breakpoint.md};
    }
    @media screen and (max-width: 500px) {
        max-width: ${breakpoint.sm};
    }
`
export const Row = styled.div`
    display: flex;
    max-width: 100%;
    margin-right: -15px;
    margin-left: -15px;
    flex-wrap: wrap;
    ${props => props.pt ? `padding-top: ${props.pt}px;` : ''}
    ${props => props.pb ? `padding-bottom: ${props.pb}px;` : ''}
    ${props => props.mt ? `margin-top: ${props.mt}px;` : ''}
    ${props => props.mb ? `margin-bottom: ${props.mb}px;` : ''}
`
export const Col = styled.div`
    width: 100%;
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    position: relative;
    ${props => props.pt ? `padding-top: ${props.pt}px;` : ''}
    ${props => props.pb ? `padding-bottom: ${props.pb}px;` : ''}
    ${props => props.mt ? `margin-top: ${props.mt}px;` : ''}
    ${props => props.mb ? `margin-bottom: ${props.mb}px;` : ''}
    ${props => props.flex ? `display: flex;` : ''}
    ${props => props.js ? `justify-content: ${props.js};` : ''}
    ${props => props.al ? `align-items: ${props.al};` : ''}
    ${props => ColWidth(props)}
`