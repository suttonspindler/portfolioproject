import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SUTTON SPINDLER</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <span style={{ fontSize: "1.7em", lineHeight: "1.5" }}>&lt;I am a: </span>
                <span style={{ display: "inline-block", verticalAlign: "middle", marginTop: "-.7em" }}>
                  <Type />
                </span>
                <span style={{ fontSize: "1.7em", lineHeight: "1.5" }}> &#47;&gt;</span>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
