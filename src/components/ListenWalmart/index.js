import React from "react";
import { 
  Container,
  Wrapper,
  SectionL,
  SectionR,
  Contenido,
  Terminos,
} from "./styles";

const ListerWalmart = () => {
  return (
    <Container>
      <Wrapper>
        <Contenido>
          <SectionL>
            <div className="title">
              <div className="contenedor-titulo">
                <div className="content-title">
                  <span>Walmart Te Escucha</span>
                </div>
              </div>
              <div className="content-blue">
                <div className="content-logo">
                  <img
                    src="https://walmartgt.vtexassets.com/assets/vtex/assets-builder/walmartgt.store-theme/1.0.138/waltmart-logo___a095e1f47875aea1c10fcc867f8ac7ac.png"
                    alt="logo"
                  />
                </div>
                <div className="content-escucha">
                  <img
                    className="listen"
                    src="https://walmartgt.vtexassets.com/assets/vtex/assets-builder/walmartgt.store-theme/1.0.220/walmart-te-escucha/walmart-te-escucha___6ac0cad15f1d5064d9d6c4783897bb81.png"
                    alt="listen"
                  />
                </div>
                <div className="activando">
                  <div className="content-activando">
                    <div className="title-activando">
                      <span>Activando tu código de factura en</span>
                    </div>
                  </div>
                </div>
                <div className="experiencia">
                  <div className="content-experiencia">
                    <div className="boton">
                      <span>experiencia.walmart.com</span>
                    </div>
                  </div>
                </div>
                <div className="tarjeta">
                  <p>*Tarjeta de regalo</p>
                </div>
              </div>
              <div className="activar-main">
                <div className="activar-now">
                  <div className="boton-blue">
                    <span>¡Activar ahora!</span>
                  </div>
                </div>
                <div className="qr">
                  <img
                    className="codigo"
                    src="https://walmartgt.vtexassets.com/assets/vtex/assets-builder/walmartgt.store-theme/1.0.220/walmart-te-escucha/walmart-te-escucha-QR___418fcb436eeefb8f3221ab40e09d73ae.jpg"
                    alt="qr"
                  />
                </div>
              </div>
            </div>
          </SectionL>
          <SectionR>
            <div className="contenedor-derecho">
              <div className="cabecera-derecha">
                <div className="calendario">
                  <p>Calendario</p> <hr />
                </div>
                <div className="ganadores">
                  <p>Ganadores</p>
                </div>
              </div>
              <div className="contenedor-actividades">
                <div className="cabecera-actividades">
                  <img
                    src="https://walmartgt.vtexassets.com/assets/vtex/assets-builder/walmartgt.store-theme/1.0.220/walmart-te-escucha/icon-fecha___569e55b28999a1bfe06413ebd04d1a2c.svg"
                    alt="calendar"
                  />
                  <span>Actividades 2022</span>
                </div>
              </div>
              <div className="months-left">
                <div className="enero">
                  <span>Enero</span>
                </div>
                <div className="detail-enero">
                  <div className="contenido-enero">
                    <ul>
                      <li>31 Cierre de sorteo Enero</li>
                    </ul>
                  </div>
                </div>
                <div className="febrero">
                  <span>Febrero</span>
                </div>
                <div className="detail-febrero">
                  <div className="contenido-detail-febrero">
                    <div className="contenido-febrero">
                      <ul>
                        <li>01 Sorteo Enero</li>
                        <li>15 Se comunican ganadores del mes</li>
                        <li>28 Cierre de sorteo Febrero</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="marzo">
                  <span>Marzo</span>
                </div>
                <div className="detail-marzo">
                  <div className="contenido-detail-marzo">
                    <div className="contenido-marzo">
                      <ul>
                        <li>01 Sorteo Febrero</li>
                        <li>15 Se comunican ganadores del mes</li>
                        <li>31 Cierre de sorteo Marzo</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="marzo">
                  <span>Abril</span>
                </div>
                <div className="detail-febrero">
                  <div className="contenido-detail-marzo">
                    <div className="contenido-febrero">
                      <ul>
                        <li>01 Sorteo Marzo</li>
                        <li>15 Se comunican ganadores del mes</li>
                        <li>30 Cierre de sorteo Abril</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="marzo">
                  <span>Mayo</span>
                </div>
                <div className="detail-marzo">
                  <div className="contenido-detail-marzo">
                    <div className="contenido-marzo">
                      <ul>
                        <li>03 Sorteo Abril</li>
                        <li>17 Se comunican ganadores del mes</li>
                        <li>30 Cierre de sorteo Mayo</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="marzo">
                  <span>Junio</span>
                </div>
                <div className="detail-marzo">
                  <div className="contenido-detail-marzo">
                    <div className="contenido-marzo">
                      <ul>
                        <li>01 Sorteo Mayo</li>
                        <li>15 Se comunican ganadores del mes</li>
                        <li>30 Cierre de sorteo Junio</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="months-right">
                <div className="julio">
                  <span>Julio</span>
                </div>
                <div className="detail-julio">
                  <div className="contenido-detail-julio">
                    <div className="contenido-julio">
                      <ul>
                        <li>01 Sorteo Junio</li>
                        <li>15 Se comunican ganadores del mes</li>
                        <li>31 Cierre de sorteo Julio</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="agosto">
                  <span>Agosto</span>
                </div>
                <div className="detail-agosto">
                  <div className="contenido-detail-agosto">
                    <div className="contenido-agosto">
                      <ul>
                        <li>02 Sorteo Julio</li>
                        <li>16 Se comunican ganadores del mes</li>
                        <li>31 Cierre de sorteo Agosto</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="agosto">
                  <span>Septiembre</span>
                </div>
                <div className="detail-agosto">
                  <div className="contenido-detail-agosto">
                    <div className="contenido-agosto">
                      <ul>
                        <li>01 Sorteo Agosto</li>
                        <li>15 Se comunican ganadores del mes</li>
                        <li>30 Cierre de sorteo Septiembre</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="agosto">
                  <span>Octubre</span>
                </div>
                <div className="detail-agosto">
                  <div className="contenido-detail-agosto">
                    <div className="contenido-agosto">
                      <ul>
                        <li>01 Sorteo Septiembre</li>
                        <li>15 Se comunican ganadores del mes</li>
                        <li>31 Cierre de sorteo Octubre</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="agosto">
                  <span>Noviembre</span>
                </div>
                <div className="detail-agosto">
                  <div className="contenido-detail-agosto">
                    <div className="contenido-agosto">
                      <ul>
                        <li>01 Sorteo Octubre</li>
                        <li>15 Se comunican ganadores del mes</li>
                        <li>31 Cierre de sorteo Noviembre</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="agosto">
                  <span>Diciembre</span>
                </div>
                <div className="detail-agosto">
                  <div className="contenido-detail-agosto">
                    <div className="contenido-agosto">
                      <ul>
                        <li>01 Sorteo Noviembre</li>
                        <li>15 Se comunican ganadores del mes</li>
                        <li>31 Cierre de sorteo Diciembre</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionR>
          <Terminos>
            <div className="contenedor-terminos">
              <div className="contenido-terminos">
                
              </div>
            </div>
          </Terminos>
        </Contenido>
        
      </Wrapper>
      
    </Container>
  );
};

export default ListerWalmart;
