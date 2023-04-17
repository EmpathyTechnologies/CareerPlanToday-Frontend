import { useParams } from "react-router-dom";
import allColleges from "../data/colleges.json";
import { formatCurrency } from "../utilities/formatCurrency";
import Button from "react-bootstrap/Button";

export default function College() {
  let { id } = useParams();

  let college: any = allColleges.filter((college) => college.id === Number(id));
  college = college[0];

  return (
    <div>
      <div>College: {college.collegeName}</div>
      <div>State: {college.state}</div>
      <div>Tuition: {formatCurrency(college.tuition)}</div>
      <div>Website: {college.website}</div>

      <Button variant='primary' href='/colleges'>
        Return to Colleges
      </Button>
    </div>
  );
}
