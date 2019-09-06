import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => (props.themeColor === true ? 'white' : 'black')};
    }
    *,
    ::after, 
    ::before {
        box-sizing: border-box;
    }
`