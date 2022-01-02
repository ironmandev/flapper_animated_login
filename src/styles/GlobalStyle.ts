import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body, h1, h2, h3, h4, h5, h6, p, span {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    div, button, span {
        display: block;
    }
`
export default GlobalStyle
