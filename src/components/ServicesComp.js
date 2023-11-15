import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServicesComp = () => {
  return (
    <div
      className="services min-vh-100 d-flex align-items-center"
      id="services"
    >
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold" data-aos="fade-up">
              Hobby
            </h1>
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
              Selain Dari Fotografer
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col className="text-center" data-aos="fade-up" data-aos-delay="400">
            <i class="fa-solid fa-motorcycle fs-2 mb-4"></i>
            <h5 className="fw-bold">Otomotif</h5>
            <p>
              Memilih hobi otomotif merupakan pilihan yang dipenuhi dengan
              kesenangan dan gairah. Selain itu, hobi ini membuka jendela menuju
              teknologi dan inovasi terkini, memungkinkan eksplorasi
              keterampilan mekanik, dan memperkenalkan pada komunitas yang
              solid. Setiap perjalanan dengan kendaraan tidak hanya membawa
              petualangan, tetapi juga menciptakan koneksi emosional yang
              mendalam dengan setiap kendaraan. Di dunia otomotif, kreativitas
              dapat diekspresikan melalui modifikasi dan kostumisasi, sementara
              pengalaman berkendara juga menjadi bentuk terapi stres yang
              menyegarkan. Dalam esensi, hobi otomotif bukan sekadar kegemaran,
              melainkan perjalanan hidup yang penuh warna dan bermakna.
            </p>
          </Col>
          <Col className="text-center" data-aos="fade-up" data-aos-delay="600">
            <i class="fa-solid fa-basketball fs-2 mb-4"></i>
            <h5 className="fw-bold">Olahraga</h5>
            <p>
              Memilih hobi olahraga memiliki berbagai alasan yang memotivasi.
              Selain manfaat kesehatan yang nyata, seperti menjaga tubuh dan
              pikiran tetap sehat, berpartisipasi dalam olahraga juga membentuk
              kedisiplinan hidup. Aktivitas fisik ini bukan hanya tentang
              gerakan tubuh, tetapi juga tentang pengembangan keterampilan dan
              keahlian khusus melalui latihan berkelanjutan. Selain itu,
              olahraga membawa keceriaan dengan merangsang produksi endorfin
              yang meningkatkan suasana hati secara keseluruhan. Aspek sosialnya
              tidak kalah penting, karena olahraga menciptakan kesempatan untuk
              bertemu dan berinteraksi dengan orang baru. Melalui pencapaian
              tujuan olahraga, seseorang dapat merasakan kepuasan dan rasa
              prestasi. Olahraga juga memicu kreativitas dan ekspresi diri,
              menciptakan kebiasaan sehat, meredakan stres, dan menyediakan
              momen kenikmatan dalam kehidupan sehari-hari. Keseluruhan, memilih
              olahraga adalah langkah positif menuju gaya hidup yang seimbang
              dan memuaskan.
            </p>
          </Col>
          <Col className="text-center" data-aos="fade-up" data-aos-delay="800">
            <i class="fa-solid fa-gamepad fs-2 mb-4"></i>
            <h5 className="fw-bold">Bermain Game</h5>
            <p>
              Bermain game menjadi pilihan hobi yang saya pilih karena
              memberikan tantangan dan kesenangan tak terbatas. Selain sebagai
              penghibur, game juga merangsang kreativitas dan strategi.
              Pengalaman bermain game bukan sekadar hiburan, melainkan peluang
              untuk melepaskan stres sambil meningkatkan keterampilan kognitif
              dan pemecahan masalah. Selain itu, game juga merupakan platform
              bersosialisasi, memungkinkan untuk berkolaborasi dan mengasah
              keterampilan tim. Dengan teknologi yang terus berkembang, bermain
              game menjadi cara inovatif untuk menjelajahi dunia virtual,
              merasakan petualangan tanpa batas, dan mengeksplorasi seni digital
              serta desain yang menarik.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesComp;
