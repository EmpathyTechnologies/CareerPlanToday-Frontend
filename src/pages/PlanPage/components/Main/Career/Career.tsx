
import allCareers from "../../../../../data/careers.json";
import { formatCurrency } from "../../../../../utilities/formatCurrency";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NotFound from "../../../../NotFoundPage/NotFoundPage";

export default function Career({ id, setSelectedCareer }: any) {
  let answer: any = allCareers.filter((career) => career.id === Number(id));
  answer = answer[0];
  if (!answer) {
    return <NotFound />;
  }

  function checkIf208000(salary: string) {
    if (salary === "$208,000") return "$208,000+";
    else return salary;
  }

  return (
    <>
      <Card>
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
          <Button variant='primary' onClick={() => setSelectedCareer(-1)}>
            Return to All Careers
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
