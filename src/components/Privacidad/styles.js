import styled from "styled-components";

export const Container = styled.div`
width: 1583px;
height: 56px;
background-color: #f4f4f4;
`

export const Wrapper = styled.div`
width: 1366px;
height: 56px;
display: flex;
margin: auto;
.contenido-privacidad{
    width: 1358px;
    height: 56px;
    display: flex;
    margin: auto;
}
.contenido{
    width: 985px;
    height: 56px;
    display: flex;
    margin: auto;
    align-items: center;
    p{
        color: #525252;
        font-size: 15px;
        font-family: BogleWeb,Montserrat,sans-serif;
        width: 985px;
        height: auto;
    }
    a{
        color: #525252;
        cursor: pointer;       
    }
     a: hover {
        color: #1a75cf;
    }
}
`