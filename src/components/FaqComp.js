import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComp = () => {
  return (
    <div className="faq" id="faq">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold" data-aos="fade-up">
              Pertanyaan Yang Sering Ditanya
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4">
          <Col data-aos="fade-up" data-aos-delay="400">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Kamu Berapa Bersaudara?</Accordion.Header>
                <Accordion.Body>2</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="500">
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Kamu Anak Keberapa?</Accordion.Header>
                <Accordion.Body>2</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="600">
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Agama Kamu Apa?</Accordion.Header>
                <Accordion.Body>Islam</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="700">
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Makanan Favorit Kamu Apa?</Accordion.Header>
                <Accordion.Body>
                  Burger, Sate dan Cumi Bumbu Kuning
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="800">
            <Accordion>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Tahun Kelahiran Kamu Berapa?
                </Accordion.Header>
                <Accordion.Body>2004</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="900">
            <Accordion>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Kamu Asal Mana?</Accordion.Header>
                <Accordion.Body>Jambi</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="1000">
            <Accordion>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Kosan Kamu Dimana?</Accordion.Header>
                <Accordion.Body>Cilimus</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="1100">
            <Accordion>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Cara Melupakan Masalalu Gimana?
                </Accordion.Header>
                <Accordion.Body>
                  Cari Orang Baru Karna Dunia Ini Luas
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComp;
