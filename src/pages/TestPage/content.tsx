import { useState } from "react";
import { Container, Button, Col, Row, Image } from "react-bootstrap";

import CareerBox from "./career-box";
import fil from "./img/fil-icon.svg";
import close from "./img/close.svg";
import Filters from "./filters";

function Content({ careers }: any) {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <div className='content-box'>
        <Row>
          <Col lg={3} md={4}>
            <div className='desktop-filter'>
              <Filters />
            </div>
            <div className='mobile-filter-btn'>
              <Button className='btn-show' onClick={() => setShow(true)}>
                Filter
                <span className='fil-icon'>
                  <Image src={fil} />
                </span>
              </Button>
              <div className={show ? "mobile-filter-show mobile-filter" : "mobile-filter-hide mobile-filter"}>
                <div className='mobile-filter-navbar my-4 d-flex align-items-center justify-content-between'>
                  <p className='logo mb-0'>Career Plan Today</p>
                  <Button className='close-btn' onClick={() => setShow(false)}>
                    <Image src={close} />
                  </Button>
                </div>
                <Filters />
              </div>
            </div>
          </Col>
          <Col lg={9} md={8}>
            <Row>
              {careers.map((career: any) => (
                <CareerBox img={career.img} jobTitle={career.jobTitle} salary={career.salary} />
              ))}
            </Row>
            <div className='pagination'>
              <button className='btn-nav left-btn'>
                <svg width='30' height='30' viewBox='0 0 53 53' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M35.4684 16.6057L25.5928 26.5029L35.4684 36.4001L32.4281 39.4404L19.4906 26.5029L32.4281 13.5654L35.4684 16.6057Z'
                    fill='#000'
                  />
                </svg>
              </button>
              <div className='page-numbers'>
                <button className='btn-page btn-selected'>1</button>
                <button className='btn-page'>2</button>
                <span className='dots'>...</span>
                <button className='btn-page'>9</button>
                <button className='btn-page'>10</button>
              </div>
              <button className='btn-nav right-btn'>
                <svg width='30' height='30' viewBox='0 0 52 53' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M17.0256 16.6067L26.9013 26.5039L17.0256 36.4011L20.0659 39.4414L33.0034 26.5039L20.0659 13.5664L17.0256 16.6067Z'
                    fill='#000'
                  />
                </svg>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Content;
