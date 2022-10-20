import React from "react";
import { Container, HeadPhone } from "./styles";
import Signo from "../assets/18436.png";
import { BsHeadphones } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <Container>
      <div className="how">
        <img src={Signo} alt="signo" />
        <span>
          <strong>¿Cómo comprar?</strong>
        </span>
      </div>
      <div className="contact">
        <HeadPhone>
          <BsHeadphones />
        </HeadPhone>
        <span>
          <strong>Contáctanos al 1-801-0096-722</strong>
        </span>
      </div>
    </Container>
  );
};

export default HeaderTop;
