import React from "react";
import { Container, Wrapper } from "./styles";
export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <div className="contenido-left">
            <div className="title-left">
              <span>Conocenos</span>
              <div className="descripcion-left">
                <p>Términos y condiciones</p>
                <p>Aviso de Privacidad Integral eCommerce</p>
                <p>Reglamento de promociones</p>
                <p>Acciones contra el COVID-19 en nuestras tiendas</p>
                <p>Walmart te escucha</p>
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="contenido-center">
            <div className="title-center">
              <span>¿Necesitas ayuda?</span>
              <div className="descripcion-center">
                <p>¿Cómo comprar en walmart.com.gt?</p>
                <p>Preguntas frecuentes</p>
                <p>Llámanos 1-801-00-96-722</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="contenido-right">
            <div className="title-right">
              <span>Servicio</span>
              <div className="descripcion-right">
                <p>Tarjeta de crédito</p>
                <p>Tarjeta de regalo</p>
                <p>Otros servicios:</p>
                <p> -Remesas</p>
                <p> -Pagos de servicios</p>
                <p> -Financiamiento</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
