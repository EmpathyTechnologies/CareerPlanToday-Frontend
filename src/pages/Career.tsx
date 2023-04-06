import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import allCareers from "../data/careers.json";
import { formatCurrency } from "../utilities/formatCurrency";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Career() {
  let { id } = useParams();

  let answer: any = allCareers.filter((career) => career.id === Number(id));
  answer = answer[0];
  console.log("ANSWER: ", answer);
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
      <Card.Body>
        <Card.Title>{answer.title}</Card.Title>
        <Card.Text>
          <h2>Salary</h2>

          <div>10th Percentile Salary</div>
          <div>{formatCurrency(answer.salary.national.tenthPercentile)}</div>
          <br />
          <div>Average</div>
          <div>{formatCurrency(answer.salary.national.average)}</div>
          <br />
          <div>90th Percentile</div>
          <div>{formatCurrency(answer.salary.national.ninetiethPercentile)}</div>
        </Card.Text>
        <Button variant='primary' href='/careers'>
          Return to Careers
        </Button>
      </Card.Body>
    </Card>
  );
}
