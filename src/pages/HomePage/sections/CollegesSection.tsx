import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CollegeBox from "../../components/CollegesBox";
import img1 from "../../../assets/images/home/college_universityOfWashington.png";
import img2 from "../../../assets/images/home/college_texasAandM.png";
import img3 from "../../../assets/images/home/college_universityOfNotreDame.png";
import Heading from "../../components/heading";

function CollegesSection() {
  return (
    <div className='colleges'>
      <Container>
        <div className='heading dark-heading'>
          <Heading text='Compare Colleges' />
          <div className='heading-link'>
            <a href='/colleges'>
              See All
              <div className='ms-3 arrow'>
                <svg width='21' height='12' viewBox='0 0 31 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M1.67084 11.1562H26.7472L22.5932 16.4395C22.1297 17.0291 22.1279 17.9872 22.5892 18.5796C23.0505 19.172 23.8003 19.1742 24.2638 18.5847L30.4509 10.7156C30.4513 10.7151 30.4516 10.7146 30.4519 10.7141C30.9143 10.1246 30.9157 9.16331 30.4521 8.57176C30.4516 8.57131 30.4513 8.57078 30.451 8.57033L24.2639 0.701178C23.8005 0.111748 23.0507 0.113792 22.5893 0.706324C22.128 1.2987 22.1298 2.25685 22.5933 2.84643L26.7472 8.12965H1.67084C1.01687 8.12965 0.486755 8.80716 0.486755 9.64295C0.486755 10.4787 1.01687 11.1562 1.67084 11.1562Z'
                    fill='white'
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <Row className='justify-content-center'>
          <CollegeBox img={img1} title='University of Washington' cost='Cost $11,745' href={"colleges/124"} />
          <CollegeBox img={img2} title='Texas A&M' cost='Cost $12,783' href={"colleges/90"} />
          <CollegeBox img={img3} title='University of Notre Dame' cost='Cost $57,699' href={"colleges/781"} />
        </Row>
      </Container>
    </div>
  );
}

export default CollegesSection;
