import './Cards.css';
import CardItem from './CardItem';
import { Button } from 'react-bootstrap';
import teacherImg from '../../assets/images/home/teacher.png';
import surgeryImg from '../../assets/images/home/surgery.png';
import developerImg from '../../assets/images/home/developer.png';
import friendsstudyingImg from '../../assets/images/home/friendsstudying.png';
import proudstudentImg from '../../assets/images/home/proudstudent.png';
import studentstudyingImg from '../../assets/images/home/studentstudying.png';
import calculatorImg from '../../assets/images/home/calculator.jpeg';
import budgetImg from '../../assets/images/home/budget.png';
import investImg from '../../assets/images/home/invest.png';

function Cards() {
  return (
    <div className='cards'>
      <div className="d-grid gap-2">
      <Button href='./careers'>Explore Careers</Button>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src={teacherImg} text='Average Pay $61,690' label='Teacher' path='/careers' />
            <CardItem src={surgeryImg} text='Average Pay $81,220' label='Nurse' path='/careers' />
            <CardItem src={developerImg} text='Average Pay $127,260' label='Developer' path='/careers' />
          </ul>
        </div>
      </div>
      <div className="d-grid gap-2">
      <Button href='./colleges'>Compare Colleges</Button>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src={proudstudentImg} text='Annual Cost $11,745' label='University of Washington' path='/colleges' />
            <CardItem src={studentstudyingImg} text='Annual Cost $12,783' label='Texas A&M' path='/colleges' />
            <CardItem src={friendsstudyingImg} text='Annual Cost $57,699' label='University of Notre Dame' path='/colleges' />
          </ul>
        </div>
      </div>
      <div className="d-grid gap-2">
      <Button href='./plan'>Form Your Plan</Button>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src={calculatorImg} text='Determine the financial value of college' label='Calculator' path='/plan' />
            <CardItem src={budgetImg} text='Explore how to afford your lifestyle' label='Budget' path='/plan' />
            <CardItem src={investImg} text='Form your retirement plan' label='Invest' path='/plan' />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
