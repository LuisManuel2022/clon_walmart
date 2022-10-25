import React from "react";
import { Container, Wrapper } from "./styles";

export const Privacidad = () => {
  return (
    <Container>
      <Wrapper>
        <div className="contenido-privacidad">
            <div className="contenido">
          <p>
            Al suscribirme, acepto el  
            <strong><a href="#">  Aviso de Privacidad</a></strong> y los 
            <strong><a href="#">Términos y
            Condiciones</a></strong> , así como el envío de noticias y promociones exclusivas
            de Walmart.
          </p>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
