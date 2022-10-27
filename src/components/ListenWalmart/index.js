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
              <Terminos>
                <div className="contenedor-terminos">
                  <div className="contenido-terminos">
                    <div className="title-terminos">
                      <a href="walmart.com">
                        Términos y condiciones Walmart te escucha
                      </a>
                    </div>
                    <div className="preguntas">
                      <span>Preguntas frecuentes</span>
                    </div>
                    <div className="varias-preguntas">
                      <div className="one-faq">
                        <select className="necesito">
                          <option value="value1">
                            ¿Qué necesito para participar?
                          </option>
                          <option value="value2">
                            <p>
                              Necesitás guardar tu factura para poder ingresar
                              al sorteo. Debajo de tu ticket encontrarás un
                              código único que necesitarás para participar en el
                              sorteo.
                            </p>
                          </option>
                        </select>
                      </div>
                      <div className="two-faq">
                        <select className="veces">
                          <option value="value1">
                            ¿Cuántas veces puedo participar?
                          </option>
                          <option value="value2">
                            <p>
                              Tu ticket de compra es válido para participar sólo
                              una vez.
                            </p>
                          </option>
                        </select>
                      </div>
                      <div className="two-faq">
                        <select className="veces">
                          <option value="value1">
                            ¿Con qué frecuencia se hacen los sorteos?
                          </option>
                          <option value="value2">
                            <p>Los sorteos se realizan 1 vez al mes.</p>
                          </option>
                        </select>
                      </div>
                      <div className="two-faq">
                        <select className="veces">
                          <option value="value1">
                            ¿Cuánto tiempo vale mi ticket para participar?
                          </option>
                          <option value="value2">
                            <p>
                              Tu ticket es válido por 7 días para poder ingresar
                              al sorteo.
                            </p>
                          </option>
                        </select>
                      </div>
                      <div className="two-faq">
                        <select className="veces">
                          <option value="value1">
                            ¿En dónde puedo ver a los ganadores?
                          </option>
                          <option value="value2">
                            <p>
                              Puedes ver a los ganadores del mes
                              ganadores.33mkt.com
                            </p>
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </Terminos>
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
                      <li><p>31 Cierre de sorteo Enero</p></li>
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
                        <li><p>01 Sorteo Enero</p></li>
                        <li><p>15 Se comunican ganadores del mes</p></li>
                        <li><p>28 Cierre de sorteo Febrero</p></li>
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
                        <li><p>01 Sorteo Febrero</p></li>
                        <li><p>15 Se comunican ganadores del mes</p></li>
                        <li><p>31 Cierre de sorteo Marzo</p></li>
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
                        <li><p>01 Sorteo Marzo</p></li>
                        <li><p>15 Se comunican ganadores del mes</p></li>
                        <li><p>30 Cierre de sorteo Abril</p></li>
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
                        <li><p>03 Sorteo Abril</p></li>
                        <li><p>17 Se comunican ganadores del mes</p></li>
                        <li><p>30 Cierre de sorteo Mayo</p></li>
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
                        <li><p>01 Sorteo Mayo</p></li>
                        <li><p>15 Se comunican ganadores del mes</p></li>
                        <li><p>30 Cierre de sorteo Junio</p></li>
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
                        <li><p>01 Sorteo Junio</p></li>
                        <li><p>15 Se comunican ganadores del mes</p></li>
                        <li><p>31 Cierre de sorteo Julio</p></li>
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
                        <li><p>02 Sorteo Julio</p></li>
                        <li><p>16 Se comunican ganadores del mes</p></li>
                        <li><p>31 Cierre de sorteo Agosto</p></li>
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
                        <li><p>01 Sorteo Agosto</p></li>
                        <li><p>15 Se comunican ganadores del mes</p></li>
                        <li><p>30 Cierre de sorteo Septiembre</p></li>
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
                        <li><p>01 Sorteo Septiembre</p></li>
                        <li><p>15 Se comunican ganadores del mes</p></li>
                        <li><p>31 Cierre de sorteo Octubre</p></li>
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
                        <li><p>01 Sorteo Octubre</p></li>
                        <li><p>15 Se comunican ganadores del mes</p></li>
                        <li><p>31 Cierre de sorteo Noviembre</p></li>
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
                        <li><p>01 Sorteo Noviembre</p></li>
                        <li><p>15 Se comunican ganadores del mes</p></li>
                        <li><p>31 Cierre de sorteo Diciembre</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionR>
        </Contenido>
        
      </Wrapper>
      
    </Container>
  );
};

export default ListerWalmart;
