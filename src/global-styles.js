import { injectGlobal } from 'styled-components';

injectGlobal`

    html, body, #root {
        height: 100%;
    }

    html {
        /* Box model */
        box-sizing: border-box;

        /* Typo */
        font-size: 16px;
    }
    body {
        /* Typo */
        font-family: 'Montserrat', Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        line-height: 1.5;

    }

    *, *:before, *:after {
        box-sizing: inherit;
    }
`;
