import Hero from "../features/home/Hero";
import Card from "../components/Card";

import teacher from "../assets/images/home/Teacher.jpg";
import nurse from "../assets/images/home/Nurse.jpg";
import engineer from "../assets/images/home/Engineer.jpg";

import school from "../assets/images/home/School.jpg";
import college from "../assets/images/home/College.jpg";
import university from "../assets/images/home/University.jpg";

import career from "../assets/images/home/Career.jpg";
import budget from "../assets/images/home/Family-budget.jpg";
import retirement from "../assets/images/home/Retirement.jpg";

import Button from "../components/Button";
export default function Home() {
  return (
    <div>
      <Hero />

      <div className='home-cards-container'>
        <div className='home-cards'>
          <Card img={teacher} alt='Teacher' title='Teacher' text='Salary $61,690' />
          <Card img={nurse} alt='Nurse' title='Nurse' text='Salary $81,220' />
          <Card img={engineer} alt='Engineer' title='Engineer' text='Salary $127,260' />
        </div>
        <div className='home-card-buttons'>
          <Button text='Explore Careers' color='btn-green' />
        </div>
      </div>

      <div className='home-cards-container'>
        <div className='home-cards'>
          <Card img={school} alt='University of Washington' title='University of Washington' text='Cost $11,745' />
          <Card img={college} alt='Texas A&M' title='Texas A&M' text='Cost $12,783' />
          <Card img={university} alt='University of Notre Dame' title='University of Notre Dame' text='Cost $57,699' />
        </div>
        <div className='home-card-buttons'>
          <Button text='Compare Colleges' color='btn-green' />
        </div>
      </div>

      <div className='home-cards-container'>
        <div className='home-cards'>
          <Card img={career} alt='Calculator' title='Calculator' text='Determine the financial value of college' />
          <Card img={budget} alt='Budget' title='Budget' text='Explore how to afford your lifestyle' />
          <Card img={retirement} alt='Invest' title='Invest' text='Form your retirement plan' />
        </div>
        <div className='home-card-buttons'>
          <Button text='Form Your Plan' color='btn-green' />
        </div>
      </div>
    </div>
  );
}
