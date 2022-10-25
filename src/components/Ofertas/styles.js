import styled from "styled-components";

export const Container = styled.div`
width: 1583px;
height: 77px;
background-color: #f4f4f4;
`

export const Wrapper = styled.div`
width: 1150px;
height: 77px;
display: flex;
margin: auto;
margin-top: 16px;
.ofertas{
    width: 456px;
    height: 77px;
}
.contenido-ofertas{
    width: 405px;
    height: 77px;
    display: flex;
    margin-left: 51px;
    align-items: center;
    p{
        color: #525252;
        font-size: 20px;
        font-weight: 630;
        line-height: 18.4px;
        text-align: right;
        width: 405px;
    }
}
.suscribirme{
    width: 685px;
    height: 77px;
}
.contenido-suscribirme{
    width:670px;
    height: 40px;
    display: flex; 
    margin-top: 19px;   
    
}
.input{
    width: 512px;
    height: 49px;
    display: flex; 
    align-items: center;
    margin-left: 20px;
        
}
.correo{
    max-height: 40px;
    margin-top: 1px;
    margin-left: 0;
    border: 1px solid #dedede;
    width: 464px;
    height: 39px;
    border-radius: 5px;
    background-color: #fff;
    
}
.button{
    width: 121px;
    height: 49px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.boton{
    color: #1a75cf;
    background-color: #fff;
    font-size: 14px;
    font-weight: 700;
    border: 1px solid #1a75cf;
    border-radius: 5px;
    width: 121px;
    height: 40px;
    display: flex;
    align-items:center;
    justify-content: center;
    cursor: pointer; 

}

`
