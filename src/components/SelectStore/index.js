import React from "react";
import { Container, Wrapper, Row } from "./styles";
import { FaArrowDown } from "react-icons/fa";

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
              <FaArrowDown
                style={{
                  color: "yellow",
                  fontSize: "25px",
                  float: "left",
                  marginLeft: "5px",
                }}
              />
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
