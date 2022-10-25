import React from "react";
import { Container, Wrapper } from "./styles";

export const Ofertas = () => {
  return (
    <Container>
      <Wrapper>
        <div className="ofertas">
          <div className="contenido-ofertas">
            <p>¡Recibe las mejores ofertas y promociones!</p>
          </div>
        </div>
        <div className="suscribirme">
          <div className="contenido-suscribirme">
            <div className="input">
              <input
                className="correo"
                type="email"
                placeholder="Ingresa tu correo"
              />
              
            </div>
            <div className="button">
            <button className="boton">Suscribirme</button>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
