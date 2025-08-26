import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from '../assets/about.png'; // Import the about.png image
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              "Curiosity is the wick in the candle of learning"{" "}
                
              </h1>
              
             

<h1 className="heading-name" style={{ marginTop: 40 }}>
    Hii, I'm <strong className="main-name">Dhanush A</strong>
</h1>

<div style={{ padding: 50, textAlign: "left" }}>
    <Type />
</div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={aboutImg} // Use aboutImg instead of homeLogo
                alt="about pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>

            
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;
