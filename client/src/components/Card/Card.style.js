import styled from 'styled-components'

export const CardWrap = styled.div`
    width: 100%;
`
export const CardImgWrap = styled.div`
    width: 100%;
    padding: 24px 12px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const CardPriceWrap = styled.div`
    width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
`
export const CardPrice = styled.span`
    font-size: 22px;
    font-weight: 700;
    letter-spacing: .3px;
    font-family: Arial, sans-serif;
`
export const CardDescWrap = styled.div`
    width: 100%;
    padding: 6px 15px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
`
export const CardDesc = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.38;
    letter-spacing: .3px;
    font-family: Arial, sans-serif;
`
export const CardStarWrap = styled.div`
    width: 100%;
    padding: 6px 15px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`
export const CardStarElemWrap = styled.div`
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMid' viewBox='0 0 15 15'%3E%3Cpath class='st0' fill='%23D6DBE0' d='M7.5 0l2.3 4.9 5.2.8-3.7 3.8.9 5.4-4.6-2.6L2.9 15l.9-5.4L0 5.7l5.2-.8L7.5 0z'/%3E%3C/svg%3E") repeat-x 0;
    background-size: 20px 16px;
    height: 18px;
    width: 96px;
`
export const CardStarElem = styled.div`
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMid' viewBox='0 0 15 15'%3E%3Cpath class='st0' fill='%23FF8970' d='M7.5 0l2.3 4.9 5.2.8-3.7 3.8.9 5.4-4.6-2.6L2.9 15l.9-5.4L0 5.7l5.2-.8L7.5 0z'/%3E%3C/svg%3E") repeat-x 0;
    background-size: 20px 16px;
    height: 18px;
    width: ${props => props.rating > 0 & props.rating <= 5 ? props.rating * 19.2 : (props.rating > 5 ? 5 : 0)}px;
`
export const CardStarElemWrapQuont = styled.span`
    margin-left: 6px;
    font-size: 14px;
    line-height: 1.29;
    color: #808d9a;
    font-family: Arial, sans-serif;
`
export const CardAvtor = styled.div`
    width: 100%;
    padding: 10px 15px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`
export const CardAvtorName = styled.span`
    color: #4d5f71;
    min-height: 20px;
    font-size: 14px;
    overflow: hidden;
    font-family: Arial, sans-serif;
`
export const Bay = styled.div`
    z-index: 4;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 16px;
    left: 16px;
    right: 16px;
`