import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
    }

    body::-webkit-scrollbar {
        height: 10px;
        width: 10px;
    }

    body::-webkit-scrollbar-track {
        background: #4C5980;        
    }

    body::-webkit-scrollbar-thumb {
        background-color: #FFC44C;    
        border-radius: 20px;       
    }

`
