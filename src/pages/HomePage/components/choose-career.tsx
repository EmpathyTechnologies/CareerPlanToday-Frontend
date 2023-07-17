import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import img from "../../../assets/images/home/img-10.png";
import Btn from "../../../components/Button";
import Heading from "./heading";

function ChooseCareer() {
  return (
    <div className='choose-career'>
      <Container>
        <Card className='text-white'>
          <Card.Img id='choose-career-img' src={img} alt='Card image' />
          <Card.ImgOverlay>
            <Card.Title className='mb-3'>
              <Heading cn='choose-career-heading' title='Let us Help Choose The Career Wisely' />
            </Card.Title>
            <Card.Text className='mb-3'>
              Lörem ipsum besost lant: sakroll. Tris koskade och vindvändare. Nevossa bedins. Miras kaktig. Dinägönade denat. Psykostat anömegen.
            </Card.Text>
            <Btn name='Start Now' />
          </Card.ImgOverlay>
        </Card>
      </Container>
    </div>
  );
}

export default ChooseCareer;
