import styled from "styled-components";
import { CgSearch } from "react-icons/cg";

export const Container = styled.header`
  width: 100vm;
  height: 72px;
  background-color: #1a75cf;
  position: relative;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  justify-content: flex-start;
  z-index: 999;
`;

export const Wrapper = styled.nav`
  max-width: 1366px;
  width: 100%;
  display: flex;
  padding: 0 109px;
  margin: 0 auto;
  height: 72px;
  font-family: BogleWeb, Montserrat, sans-serif;

  img {
    max-width: 160px;
    height: 37px;
    margin-top: 16px;
    float: left;
  }
  p {
    color: white;
    font-size: 14px;
    line-height: 18.4px;
    font-family: Comic-sans;
    margin-top: 15px;
    font-weight: 600;
    font-family: BogleWeb, Montserrat, sans-serif;
  }

  .menu {
    width: 30px;
    height: 30px;
    margin: 15px 12px 0 2px;
    filter: brightness(0) invert(1);
  }

  .marca {
    width: 150px;
    height: 72px;
  }
  .busqueda {
    width: 503px;
    height: 72px;
    .buscador {
      width: 477px;
      height: 72px;
      margin-left: 20px;
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      height: 38px;
      border-radius: 5px;
      border: none;
      font-size: 14px;
      color: #979899;
      line-height: 18.4px;
      padding-left: 1rem;
      
    }
  }
  .mis {
    display: flex;
    width: 150px;
    height: 72px;
    align-items: center;
  }

  .noteb {
    width: 31px;
    height: 24px;
    margin: auto 6px auto 0;
  }
  .list {
    display: flex;
    align-items: center;
    width: 110px;
    height: 24px;
    margin-left: 40px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    
  }
  .mi {
    display: flex;
    width: 115px;
    height: 72px;
    align-items: center;
  }
  .cuenta {
    display: flex;
    align-items: center;
    width: 101px;
    height: 37px;
    margin-left: 14px;
    color: #fff;
    font-size: 13.3px;
    font-weight: 600;
    
  }
  .tus {
    display: flex;
    width: 122px;
    height: 72px;
    align-items: center;
  }
  .pedidos {
    display: flex;
    align-items: center;
    line-height: 18.4px;
    width: 106px;
    height: 24px;
    margin-left: 16px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    span {
      width: 79px;
      height: 20px;
    }
  }
  .carrito {
    display: flex;
    width: 89px;
    height: 72px;
    align-items: center;
  }
  .contiene-carrito {
    display: flex;    
    width: 56px;
    height: 64px;
    justify-content: center;
    margin: 4px 10px 4px 23px;
  }
  .carrote {
    display: flex;
    align-items: center;
    width: 32px;
    height: 32px;
  }
  .mycar {
    display: flex;
    width: 82px;
    heigth: 72px;
    align-items: center;
    span {
      width: 62px;
      color: #fff;
      font-size: 14px;
      
      
    }
  }
`;
export const IconSea = styled(CgSearch)`
  width: 24px;
  height: 24px;
  color: gray;
  margin-left: 445px;
  position: absolute;
`;
