import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 51px;
background-color: #f4f4f4;
`
export const Wrapper = styled.div`

width: 1366px;
height: 51px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
background-color: #f4f4f4;
.container-copy{
    width: 1358px;
    height: 51px;
    margin:auto;
    display: inline-flex;
}
.contenido-cop{
    width: 1086px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 8px;    
    p{
        font-size: 10px;
        color: #525252;
        font-weight: 700;
    }
}
.power{
    width: 81px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: 8px;
    p{
        display: flex;
    align-items: center;
    justify-content:center;
        width: 70px;
        height: 35px;
        font-size: 10px;
        color: #525252;
        font-weight: 700;        
        margin-right: 11px;
    }
}
.corebiz{
    width: 95px;
    height: 35px;
    display:flex;
    margin-top: 8px;
    img{
        width: 72px;
        max-width: 100%;
    }
}
.vtex{
    width: 95px;
    height: 35px;
    display: flex;
    margin-top: 8px;
    img{
        width: 72px;
        max-width: 100%;
    }
}
`