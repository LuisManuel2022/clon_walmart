import { createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
:root: {
    --black: #000000;
    --bluesup: #0000ee;
    --blueinf: #1a75cf;
    --darkgray: #727273;
    --lightgray: #979899;

    --family: BogleWeb, Montserrat, sans-serif;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
}
html{
    min-height: 100%;
}
`