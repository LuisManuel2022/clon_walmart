import styled from "styled-components";

export const Container = styled.div`
  width: 100vm;
  height: 46px;
`;

export const Wrapper = styled.div`
  width: 1366px;
  height: 46px;
  margin: 0 auto;
  display: flex;

  .select {
    width: 206px;
    display: flex;
    margin-left: 82px;
    align-items: center;
    font-size: 16px;
    color: #1a75cf;
    line-height: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .select:hover{
    background-color: #dbe9fd;
  }
  .seleccion{
    width: 162px;
    height: 16px;
    margin-right: 10px;
    text-align: right;
  }

  .loc {
    width: 24px;
    height: 24px;
    margin: 11px auto 12px 16px;
  }
  .rebajas{
    width: 104px;
    height: 46px;
    display: flex;
    margin-left: 687px;
  }
  button{
    width: 104px;
    height: 30px;
    display: flex;
    align-items: center;
    margin-top: 8px;
    background-color: #ff0008;
    border: none;
    border-radius: 5px;
    color: white;
    font-family: BogleWeb, Montserrat, sans-serif
    font-size: 16px;
    line-height: 18.4px;
    font-weight: 600; 
    
    img{
      margin-top: 3px;
      margin-left: 1px;
      padding-right:3px;
    }   
  }
   .marcas{
    width:127px;
    height: 46px;
    display: flex;
    color: #1a75cf;
    text-align: right; 
    margin-bottom: 8px;   
    margin-left: 8px;  
    align-items: center; 
   }
   .content-marcas{
    width: 127px;
    height: 30px;
    font-size: 14px;
    line-height: 25.1px;
    font-weight: 600; 
   }

   
   .familiares{
    display: flex;
    align-items: center;
    width: 141px;
    height: 46px;    
    color: #1a75cf;    
    text-align: right;   
    margin-left: 8px;  
   }
  .content-familiares{
    width: 141px;
    height: 30px;
    font-size: 14px;
    line-height: 25.1px;
    font-weight: 600; 
  }
   
 
  
`;

export const Row = styled.div``;
