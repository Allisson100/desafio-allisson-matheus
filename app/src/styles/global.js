import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        padding: 0;
    }

    #root {
        height: 100vh;
        padding: 1rem;
        width: 100%;

        @media screen and (max-width: 1180px) {
            height: 100%;
        }
    }

    body {
        background-color: #1e1e1e;
    }
`