import React from "react";
import { Container, Wrapper } from "./styles";

export const Copyright = () => {
  return (
    <Container>
      <Wrapper>
        <div className="container-copy">
          <div className="contenido-cop">
            <p>
              © 2021 Copyright. Todos los derechos reservados Walmart
              Centroamérica.
            </p>
          </div>
          <div className="power">
            <p>Powered by</p>
          </div>
          <div className="corebiz">
            <img src="https://walmartgt.vtexassets.com/assets/vtex/assets-builder/walmartgt.store-theme/1.0.224/corebiz_logo___5773d1a0b7a8402390ebd5b214ccccc1.svg"
            alt="logo"/>
          </div>
          <div className="vtex">
            <img src="https://walmartgt.vtexassets.com/assets/vtex/assets-builder/walmartgt.store-theme/1.0.224/vtex-1___0eb85bff61576b8737a89930bfb93958.svg"
            alt="vte"/>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
