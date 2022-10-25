import React from "react";
import { Copyright } from "../Copyright";
import { Footer } from "../Footer";
import HeaderBot from "../HeaderBot";
import HeaderTop from "../HeaderTop";
import ListerWalmart from "../ListenWalmart";
import { Ofertas } from "../Ofertas";
import { Privacidad } from "../Privacidad";
import { Promocion } from "../Promocion";
import SelectStore from "../SelectStore";
import { 
  Container,
  Wrapper,

} from "./styles";

export const Layout = () => {
  return (
    <Container>
      <HeaderTop />
      <HeaderBot />
      <SelectStore />
      <Promocion />
      <Wrapper>
        <ListerWalmart />
      </Wrapper>
      <Ofertas />
      <Privacidad />
      <Footer />
      <Copyright />
    </Container>
  );
};
