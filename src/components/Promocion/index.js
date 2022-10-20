import React from "react";
import { Container, Wrapper } from "./style";

export const Promocion = () => {
  return (
    <Container>
      <Wrapper>
      <div className="content">
        <span>¡Recibe </span>
        <span className="orange">5% de descuento</span>
        <span> en tu primera compra con el código </span>
        <span className="orange">PRIMERA!</span>
      <span>Compra mínima: Q750.Aplican restricciones.</span>
      </div>
      </Wrapper>
    </Container>
  );
};
