import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import PlanBox from "../components/plan-box";
import img1 from "../../../assets/svg/icon-1.svg";
import img2 from "../../../assets/svg/icon-2.svg";
import img3 from "../../../assets/svg/icon-3.svg";
import Heading from "../components/heading";

function Plan() {
  return (
    <div className='plan'>
      <Container>
        <div className='heading'>
          <Heading title='Form Your Plan' />
        </div>
        <Row className='justify-content-center'>
          <PlanBox img={img1} title='Calculator' description='Determine the financial value of college' />
          <PlanBox img={img2} title='Budget' description='Explore how to afford your lifestyle' />
          <PlanBox img={img3} title='Invest' description='Form your retirement plan' />
        </Row>
      </Container>
    </div>
  );
}

export default Plan;
