import { useState, useEffect } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Navigation from "../../layouts/Navigation";
import Footer from "../../layouts/Footer";
import Chart from 'react-apexcharts';

export default function Invest() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [annualContribution, setAnnualContribution] = useState(6000);
  const [annualReturnRate, setAnnualReturnRate] = useState(7);
  const [inflationRate, setInflationRate] = useState(2);

  // const [annualReturn, setAnnualReturn] = useState([0]);

  
  const calculateRetirementBalance = () => {
    let balance = 0;
    let yearlyContribution = annualContribution;
    let totalContribution = 0;
    const yearsToRetirement = retirementAge - currentAge;
    const realRateOfReturn = annualReturnRate - inflationRate;
    let graphArray: any[] = [];
    
    for (let i = 1; i <= yearsToRetirement; i++) {
      balance += yearlyContribution;
      const growth = balance * (realRateOfReturn / 100);
      balance += growth;
      graphArray.push(balance);
      totalContribution += annualContribution;
    }
    
    return {
      balance: balance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}), 
      totalContribution: totalContribution.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}), 
      graphArray: graphArray.map((number) => {return number.toFixed(2)})
    }    
  };

  console.log(calculateRetirementBalance().graphArray);
  
// graph
const series = [
  {
    name: "Retirement",
    data: calculateRetirementBalance().graphArray
  }
];
const options = {
  xaxis: {
    categories: [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057]
  }
};


  return (
    <>
      <Navigation />
      <Container>
        <h2>Roth IRA Calculator</h2>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column md={2}>
              Current Age:
            </Form.Label>
            <Col md={10}>
              <Form.Control type='number' value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column md={2}>
              Retirement Age:
            </Form.Label>
            <Col md={10}>
              <Form.Control type='number' value={retirementAge} onChange={(e) => setRetirementAge(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column md={2}>
              Annual Contribution:
            </Form.Label>
            <Col md={10}>
              <Form.Control type='number' value={annualContribution} onChange={(e) => setAnnualContribution(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column md={2}>
              Annual Return Rate:
            </Form.Label>
            <Col md={10}>
              <Form.Control type='number' value={annualReturnRate} onChange={(e) => setAnnualReturnRate(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column md={2}>
              Inflation Rate:
            </Form.Label>
            <Col md={10}>
              <Form.Control type='number' value={inflationRate} onChange={(e) => setInflationRate(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>
        </Form>

        <div>
          <h3>Results</h3>
          <p>Total Contributions: ${calculateRetirementBalance().totalContribution}</p>
          <p>Your Retirement Balance will be: ${calculateRetirementBalance().balance}</p>
        </div>
        <div>
          <Chart type="line" series={series} options={options} />
        </div>
        <div>
          Disclaimer: This Roth IRA calculator is intended for educational and informational purposes only. It is not intended to provide financial or
          investment advice. The results provided by this calculator are estimates based on the information you have provided and do not reflect the
          actual performance of any particular investment. The actual results may vary based on various factors, including changes in investment
          performance, taxes, and fees. The information provided by this calculator is not a substitute for professional financial advice. We
          recommend that you consult with a financial advisor or investment professional before making any investment decisions. We do not guarantee
          the accuracy or completeness of the information provided by this calculator, and we are not responsible for any errors or omissions. By
          using this calculator, you agree to indemnify and hold us harmless from any and all claims, damages, and expenses arising from your use of
          this calculator. Furthermore, this is an early version of this calculator and may contain errors.
        </div>
      </Container>
      <Footer />
    </>
  );
}
