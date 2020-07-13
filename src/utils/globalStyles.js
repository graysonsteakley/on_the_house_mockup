import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`



*,
*::before,
*::after{

    box-sizing: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;



}

a:visited,
a:link{
    text-decoration: none;
    
}


html{
    box-sizing: border-box;
    scroll-behavior: smooth;
}

code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }




`;





export default GlobalStyle;