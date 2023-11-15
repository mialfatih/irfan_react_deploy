import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Gallery1 from "../assets/img/gallery/gambar1.jpg";
import Gallery2 from "../assets/img/gallery/gambar2.jpg";
import Gallery3 from "../assets/img/gallery/gambar3.jpg";

const GalleryComp = () => {
  return (
    <div className="gallery min-vh-100 d-flex align-items-center" id="gallery">
      <Container>
        <Row>
          <Col>
            <h1
              className="text-center fw-bold py-3 pt-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Skill Fotografi
            </h1>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-1 row-cols-sm-1 row-cols-1 g-5">
          <Col>
            <img
              src={Gallery1}
              alt="unsplash.com"
              className="w-80 text-center"
              data-aos="fade-up"
            />
          </Col>
          <Col>
            <img
              src={Gallery2}
              alt="unsplash.com"
              className="w-80 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </Col>
          <Col>
            <img
              src={Gallery3}
              alt="unsplash.com"
              className="w-80 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryComp;
