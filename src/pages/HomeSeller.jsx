import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import carData from "../assets/data/carData";
import CarItemSell from "../components/UI/CarItemsSell";
import Testimonial from "../components/UI/Testimonial";

const HomeSeller = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        {/* <HeroSlider /> */}

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>give your vehicles for rent here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                {/* ToDo show user profile and statics */}
                {/* <FindCarForm /> */}
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItemSell item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== testimonial section =========== */}
    </Helmet>
  );
};

export default HomeSeller;
