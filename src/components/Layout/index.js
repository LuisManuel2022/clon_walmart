import React from "react";
import HeaderBot from "../HeaderBot";
import HeaderTop from "../HeaderTop";
import ListerWalmart from "../ListenWalmart";
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
    </Container>
  );
};
