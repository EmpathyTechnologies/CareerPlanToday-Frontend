import { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";

export default function Invest() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [annualContribution, setAnnualContribution] = useState(6000);
  const [annualReturnRate, setAnnualReturnRate] = useState(7);
  const [inflationRate, setInflationRate] = useState(2);

  const calculateRetirementBalance = () => {
    let balance = 0;
    let yearlyContribution = annualContribution;
    let totalContribution = 0;
    const yearsToRetirement = retirementAge - currentAge;

    for (let i = 1; i <= yearsToRetirement; i++) {
      totalContribution += yearlyContribution;
      balance += yearlyContribution;
      const growth = balance * ((1 + annualReturnRate / 100) ** i - 1);
      balance += growth;
      yearlyContribution *= 1 + inflationRate / 100;
      balance *= 1 + inflationRate / 100;
    }

    return { balance: balance.toFixed(0), totalContribution: totalContribution.toFixed(0) };
  };

  return (
    <Container className='footer-spacer'>
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
        Disclaimer: This Roth IRA calculator is intended for educational and informational purposes only. It is not intended to provide financial or
        investment advice. The results provided by this calculator are estimates based on the information you have provided and do not reflect the
        actual performance of any particular investment. The actual results may vary based on various factors, including changes in investment
        performance, taxes, and fees. The information provided by this calculator is not a substitute for professional financial advice. We recommend
        that you consult with a financial advisor or investment professional before making any investment decisions. We do not guarantee the accuracy
        or completeness of the information provided by this calculator, and we are not responsible for any errors or omissions. By using this
        calculator, you agree to indemnify and hold us harmless from any and all claims, damages, and expenses arising from your use of this
        calculator. Furthermore, this is an early version of this calculator and may contain errors.
      </div>
    </Container>
  );
}
