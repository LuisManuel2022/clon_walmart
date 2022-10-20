import React from "react";
import { Container, Wrapper, IconSea } from "./styles";
import { CgSearch } from "react-icons/cg";

 
const HeaderBot = () => {
  return (
    <Container>
      <Wrapper>
        <div className="men">
          <img
            className="menu"
            src="https://www.walmart.com.gt/_v/public/assets/v1/published/walmartgt.mega-menu@1.0.29/public/react/666f3c8cfa246a70d3ade74eb2507f42.svg"
            alt="men"
          />
          <p>Menú</p>
        </div>
        <div className="marca">
          <img
            src="https://walmartgt.vtexassets.com/assets/vtex/assets-builder/walmartgt.store-theme/1.0.138/waltmart-logo___a095e1f47875aea1c10fcc867f8ac7ac.png"
            alt="logo"
          />
        </div>
        <div className="busqueda">
          <div className="buscador">
            <input type="text" placeholder="¿Qué estás buscando?" />
            <IconSea>
              <CgSearch />
            </IconSea>
          </div>
        </div>
        <div className="mis">
          <div className="list">
            <img
              className="noteb"
              src="https://walmartgt.vtexassets.com/assets/vtex/assets-builder/walmartgt.store-theme/1.0.220/icon_favorito___01c7b2d7fb4f83db1447c0e36448aa05.svg"
              alt="note"
            />
            <span> Mis listas</span>
          </div>
        </div>
        <div className="mi">
          <div className="cuenta">
            <img
              className="noteb"
              src="https://walmartgt.vtexassets.com/assets/vtex/assets-builder/walmartgt.store-theme/1.0.220/icon_user___c66e9132360927d7c1060c2e4db32339.svg"
              alt="note"
            />
            <span> Mi Cuenta</span>
          </div>
        </div>
        <div className="tus">
          <div className="pedidos">
            <img
              className="noteb"
              src="https://walmartgt.vtexassets.com/assets/vtex/assets-builder/walmartgt.store-theme/1.0.220/icon_box___0621230fdcfef1d33772d21134b1a441.svg"
              alt="note"
            />
            <span> Mis Pedidos</span>
          </div>
        </div>
        <div className="carrito">
          <div className="contiene-carrito">
          <img
              className="carrote"
              src="https://walmartgt.vtexassets.com/assets/vtex/assets-builder/walmartgt.store-theme/1.0.220/icon_cart___61e8364bf79f4b28ec023c354342169e.svg"
              alt="note"
            />
          </div>
        </div>
        <div className="mycar">
          <span> Mi Carrito</span>
        </div>
      </Wrapper>
    </Container>
  );
};

export default HeaderBot;
