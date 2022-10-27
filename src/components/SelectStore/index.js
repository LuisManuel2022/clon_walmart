import React from "react";
import { Container, Wrapper, Row } from "./styles";


const SelectStore = () => {
  return (
    <Container>
      <Wrapper>
        <div className="select">
          <img
            className="loc"
            src="https://walmartgt.vtexassets.com/_v/public/assets/v1/published/walmartgt.store-selector@0.0.41/public/react/a1abbca5da8a4fefa9014dc21863643f.svg"
            alt="location"
          />
          <p className="seleccion">Selecciona tu tienda</p>
        </div>
        <Row>
          <div className="rebajas">
            <div className="content-rebajas">
            <button>
            <img src="https://walmartgt.vtexassets.com/assets/vtex/assets-builder/walmartgt.store-theme/1.0.225/icon_rebajas___15bc85986c2f953bbf622bcf66b77800.svg"
              alt="arrow"/>
              REBAJAS
            </button>
            </div>
          </div>
        </Row>
        <div className="marcas">
          <div className="content-marcas">
            <span>Nuestras marcas</span>
          </div>
        </div>
        <div className="familiares">
          <div className="content-familiares">
            <span>Tamaños familiares</span>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default SelectStore;
