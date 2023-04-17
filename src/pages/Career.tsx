import { useParams } from "react-router-dom";
import allCareers from "../data/careers.json";
import { formatCurrency } from "../utilities/formatCurrency";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NoMatch from "./404/NoMatch";

export default function Career() {
  let { id } = useParams();

  let answer: any = allCareers.filter((career) => career.id === Number(id));
  answer = answer[0];
  if (!answer) {
    return <NoMatch />;
  }

  function checkIf208000(salary: string) {
    if (salary === "$208,000") return "$208,000+";
    else return salary;
  }

  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
      <Card.Body>
        <Card.Title>{answer.title}</Card.Title>
        <Card.Text>
          <h2>Salary</h2>

          <div>10th Percentile Salary</div>
          <div>{checkIf208000(formatCurrency(answer.salary.national.tenthPercentile))}</div>
          <br />
          <div>Average</div>
          <div>{checkIf208000(formatCurrency(answer.salary.national.average))}</div>
          <br />
          <div>90th Percentile</div>
          <div>{checkIf208000(formatCurrency(answer.salary.national.ninetiethPercentile))}</div>
        </Card.Text>
        <Button variant='primary' href='/careers'>
          Return to Careers
        </Button>
      </Card.Body>
    </Card>
  );
}
