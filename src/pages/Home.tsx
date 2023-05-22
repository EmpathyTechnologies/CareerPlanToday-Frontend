import Hero from "../components/Hero";
import Card from "../components/Card";

import teacher from "../assets/images/home/teacher.png";
import nurse from "../assets/images/home/nurse.png";
import developer from "../assets/images/home/developer.png";
import studentStanding from "../assets/images/home/student-standing.png";
import studentReading from "../assets/images/home/students-reading.png";
import studentStudying from "../assets/images/home/students-studying.png";
import calculator from "../assets/images/home/calculator.jpeg";
import budget from "../assets/images/home/budget.png";
import invest from "../assets/images/home/invest.png";

import Button from "../components/Button";
export default function Home() {
  return (
    <div>
      <Hero />

      <div className='home-cards-container'>
        <div className='home-cards'>
          <Card img={teacher} alt='Teacher' title='Teacher' text='Salary $61,690' />
          <Card img={nurse} alt='Nurse' title='Nurse' text='Salary $81,220' />
          <Card img={developer} alt='Developer' title='Developer' text='Salary $127,260' />
        </div>
        <div className='home-card-buttons'>
          <Button text='Explore Careers' color='btn-blue' />
        </div>
      </div>

      <div className='home-cards-container'>
        <div className='home-cards'>
          <Card img={studentStanding} alt='University of Washington' title='University of Washington' text='Cost $11,745' />
          <Card img={studentReading} alt='Texas A&M' title='Texas A&M' text='Cost $12,783' />
          <Card img={studentStudying} alt='University of Notre Dame' title='University of Notre Dame' text='Cost $57,699' />
        </div>
        <div className='home-card-buttons'>
          <Button text='Compare Colleges' color='btn-blue' />
        </div>
      </div>

      <div className='home-cards-container'>
        <div className='home-cards'>
          <Card img={calculator} alt='Calculator' title='Calculator' text='Determine the financial value of college' />
          <Card img={budget} alt='Budget' title='Budget' text='Explore how to afford your lifestyle' />
          <Card img={invest} alt='Invest' title='Invest' text='Form your retirement plan' />
        </div>
        <div className='home-card-buttons'>
          <Button text='Form Your Plan' color='btn-blue' />
        </div>
      </div>
    </div>
  );
}
