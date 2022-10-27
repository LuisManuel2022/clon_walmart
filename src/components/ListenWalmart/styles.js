import styled from "styled-components";

export const Container = styled.div`
  width: 100vm;
  height: auto;
`;

export const Wrapper = styled.div`
  width: 1551px;
  height: 1378px;

  margin-top: 16px;
  display: flex;
  flex-direcion: row;
`;
export const Contenido = styled.div`
  width: 1360px;
  height: 1378px;
  display: flex;
  margin-top: 0px;
  margin-left: 93px;
  margin-right: 93px;
`;

export const SectionL = styled.div`
  width: 43%;
  height: 896px;
  margin-left: 4px;
  margin-top: 0px;
  justify-content: center;
  box-sizing: border-box;
  .title {
    width: 219px;
    height: 91px;
    margin-top: 0px;
    margin-left: 24px;
  }
  .contenedor-titulo {
    width: 535px;
    height: 91px;
    margin-top: 24px;
  }
  .content-title {
    display: flex;
    width: 219px;
    height: 91px;
    align-items: center;
  }
  span {
    width: 219px;
    height: 39px;
    display: flex;
    align-items: center;

    font-family: BogleWeb, Montserrat, sans-serif;
    font-size: 24px;
    line-height: 18.4px;
    color: #525252;
    font-wwight: 700;
    opacity: 1;
  }

  .content-blue {
    width: 535px;
    height: 613px;
    border-radius: 5px;
    background: #1a75cf;
  }
  .content-logo {
    width: 503px;
    height: 118px;
    margin: auto;
    img {
      width: 283px;
      height: 67px;
      margin: 24px 111px 27px 111px;
    }
  }
  .content-escucha {
    width: 503px;
    height: 281px;
    margin: auto;
    img {
      width: 503px;
      height: 281px;
    }
  }
  .activando {
    width: 503px;
    height: 65px;
    display: flex;
    margin: auto;
  }
  .content-activando {
    width: 503px;
    height: 33px;
    margin-top: 26px;
  }
  .title-activando {
    width: 327px;
    height: 33px;

    font-family: BogleWeb, Montserrat, sans-serif;
    margin: auto;
    span {
      width: 100%;
      color: #fff;
      text-align: center;
      font-size: 1.3rem;
      line-height: 18.4px;
      font-weight: 500;
      margin: 0;
    }
  }

  .experiencia {
    width: 503px;
    height: 96px;
    margin: auto;
  }
  .content-experiencia {
    display: flex;
    width: 416px;
    height: 96px;
    margin: auto;
  }
  .boton {
    width: 384px;
    height: 64px;
    background: #fbc12c;
    border-radius: 35px;
    margin: auto;

    span {
      width: 384px;
      height: 40px;
      justify-content: center;
      color: #1a75cf;
      font-size: 27.2px;
      line-height: 40.8px;
      margin-top: 8px;
    }
  }

  .tarjeta {
    width: 503px;
    height: 19px;
    display: flex;
    margin: auto;
    justify-content: flex-end;
    p {
      font-size: 12px;
      color: #fff;
      line-height: 19.2px;
      font-family: BogleWeb, Montserrat, sans-serif;
      display: block;
    }
  }

  .activar-main {
    width: 534px;
    height: 144px;
    display: flex;
  }
  .activar-now {
    width: 364px;
    height: 112px;

    margin-top: 32px;
  }
  .boton-blue {
    width: 280px;
    height: 37px;
    display: flex;
    background-color: #1a75cf;
    border-radius: 5px;
    justify-content: center;
    margin: 37px 42px;
    padding-top: 8px;
    span {
      width: 248px;
      height: 21px;
      justify-content: center;
      color: #fff;
      font-size: 14.4px;
      font-height: 600;
      line-height: 21.6px;
      font-family: BogleWeb, Montserrat, sans-serif;
    }
  }
  .qr {
    width: 171px;
    height: 111px;
    margin-top: 32px;

    img {
      width: 112px;
      height: 112px;
    }
  }
`;

export const SectionR = styled.div`
width: 57%;
height: 851px;
.contenedor-derecho{  
  width; 750px;
  height: 851px;
  
  margin-top: 48px;  
}
.cabecera-derecha{
  display: flex;
  width: 726px;
  height: 56px;
  margin: 48px 24px 0 24px;
  
}
.calendario{
  display: flex;
  width: 123px;
  height: 48px;
  margin: 4px 4px 0 4px;
  align-items: center;
  border-bottom: 2px solid #1a75cf;
  p {
    font-size: 14px;
    color: #525252;    
    font-weight: 700;
    width: 115px;
    height: 22px;
    text-align: center;    
  }
  
}
.ganadores{
  display: flex;
  width: 122px;
  height: 48px;
  margin: 4px 4px 0 4px;
  align-items: center;
  p {
    font-size: 14px;
    color: #525252;    
    font-weight: 700;
    width: 115px;
    height: 22px;
    text-align: center;    
  }  
}
.cabecera-actividades{
  display: flex;
  width: 726px;
  height: 54px;  
  margin: 0px auto;
  align-items: center;
  .ul{
    color: rgb(253, 187, 48);
  }
}
.contenedor-actividades{  
width: 180px;
height: 54px;
margin: 0px 24px;
}
img{
  width: 24px;
  height: 32px;  
}
span{
  witdh: 148px;
  height: 30px;
  color: #525252;
  font-size: 20px;
  font-weight:600;
  margin-left: 8px;  
}
.months-left{
  display: block;
  width: 363px;
  height: auto; 
  flex-direction: column;
  box-sizing: border-box;
  margin-left: 24px;
  .enero{
    width: 363px;
    height: 33x;
  }
  span{
    width: 50px;
    height: 33px;
    font-size: 16px;
    color: #525252;
    line-height: normal;
  }
  detail-enero{
    width: 363px;
    height: 33px;
  }
  .contenido-enero{
    display: flex;
    align-items: center;
    width: 191px;
    height: 33px;
    font-size: 14px;  
    font-family: BogleWeb, Montserrat, sans-serif;
    color: #525252;
    margin-left: 16px; 
    li{
      color: rgb(253, 187, 48);
    }  
    li p {
      color: #525252;         
    }
  }
  .febrero{
    width: 363px;
    height: 33px;
    margin-top: 16px;
  }
  .detail-febrero{
    width: 363px;
    height: 67px;        
  }
  .contenido-detail-febrero{
    width: 248px;
    height: 67px;    
    color: #525252;    
  }
  .contenido-febrero{
    display: block;    
    width: 246px;
    height: 67px;
    font-size: 14px;
    margin-left: 16px; 
    li{
      color: rgb(253, 187, 48);
    }  
    li p {
      color: #525252;         
    }      
  }
   span{
      width: 230px;
      height: 33px;
      font-size: 16px;
      color: #525252;
      line-height: normal;
      display: flex;
  align-items: center;
    } 
    .marzo{
      width: 363px;
      height: 33px;
      margin-top: 16px;
    }
    .detail-marzo{
      width: 363px;
      height: 67px;        
    }
    .contenido-detail-marzo{
      width: 248px;
      height: 67px;      
      color: #525252;      
    }
    .contenido-marzo{
      display: block;    
      width: 246px;
      height: 67px;
      font-size: 14px;
      margin-left: 16px; 
      li{
        color: rgb(253, 187, 48);
      }  
      li p {
        color: #525252;         
      }         
    }
     span{
        width: 230px;
        height: 33px;
        font-size: 16px;
        color: #525252;
        line-height: normal;
        display: flex;
  align-items: center;
      }     
     
}
.months-right{
  display: block;
  float: right;
  margin-top: -646px;
  margin-right: 23px;
  width: 363px;
  height:auto;  
  
}
.julio{
  display: flex;
  align-items: center;  
  margin: auto;
  width: 247px;
  height: 33px;
  
}
detail-julio{
  width: 246px;
  height: 67px; 
}

.contenido-detail-julio{
  display: block;    
  width: 246px;
  height: 67px;
  font-size: 14px;
  margin-left: 58px; 
  color: #525252;
  
}
.contenido-julio{     
  width: 230px;
  height: 67px;
  font-size: 14px;
  margin-left: 16px; 
  li{
    color: rgb(253, 187, 48);
  }  
  li p {
    color: #525252;         
  }
}
span{
  display: flex;
  align-items: center;
  width: 230px;
  height: 33px;  
  margin-left: 5px;
  font-size: 16px;
  color: #525252;
  line-height: normal;
} 
.agosto{
  display: flex;
  align-items: center;  
  margin: auto;
  margin-top: 16px;
  width: 247px;
  height: 33px;  
}
detail-agosto{
  width: 246px;
  height: 67px; 
  
}

.contenido-detail-agosto{
  display: block;    
  width: 246px;
  height: 67px;
  font-size: 14px;
  margin-left: 58px; 
  color: #525252;
  
}
.contenido-agosto{     
  width: 230px;
  height: 67px;
  font-size: 14px;
  margin-left: 16px;   
  li{
    color: rgb(253, 187, 48);
  }  
  li p {
    color: #525252;         
  }  
}


`;

export const Terminos = styled.div`
  .contenedor-terminos {
    witdth: 1358px;
    height: 482px;
    display: flex;
    margin-top: 24px;
    margin-left: -25px;
  }
  .contenido-terminos {
    width: 1018px;
    heigth: 482px;
    display: block;
  }
  .title-terminos {
    display: flex;
    width: 970px;
    height: 56px;
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 48px;
    align-items: center;
    a {
      color: #1a75cf;
      font-size: 16px;
      font-family: BogleWeb, Montserrat, sans-serif;
      line-height: 18.4px;
      font-weight: 700;
    }
  }
  .preguntas {
    width: 970px;
    height: 72px;
    display: flex;
    align-items: center;
    margin: auto;
  }
  span {
    display: flex;
    width: 100%;
    color: #525252;
    font-weight: 600;
  }
  .varias-preguntas {
    width: 970px;
    height: 290px;
    margin: auto;
  }
  .one-faq {
    width: 970px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .necesito {
    width: 952px;
    height: 32px;
    color: #525252;
    line-height: 1.5;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #dedede;
    cursor: pointer;
    overflow: visible;
    outline: none;
  }
  .p {
    font-family: BogleWeb, Montserrat, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0;
    color: red;
  }
  .two-faq {
    width: 970px;
    height: 50px;
    display: flex;
    margin-top: 8px;
    align-items: center;
    justify-content: center;
  }
  .veces {
    width: 952px;
    height: 32px;
    color: #525252;
    line-height: 1.5;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #dedede;
    cursor: pointer;
    overflow: visible;
    outline: none;
  }
`;


