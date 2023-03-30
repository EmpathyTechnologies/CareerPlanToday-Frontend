import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import CareersTableRow from "./CareersTableRow";

export default function CareersTable({ careersList }: any) {
  const [sortDirection, setSortDirection] = useState("career-asc");
  const [careerArrow, setCareerArrow] = useState("↓");
  const [salaryArrow, setSalaryArrow] = useState("");

  const sortedCareers = [...careersList].sort((a: any, b: any) => {
    if (sortDirection === "career-asc") {
      return a.title.localeCompare(b.title);
    } else if (sortDirection === "career-desc") {
      return b.title.localeCompare(a.title);
    } else if (sortDirection === "salary-desc") {
      return a.salary.national.average - b.salary.national.average;
    } else {
      return b.salary.national.average - a.salary.national.average;
    }
  });

  useEffect(() => {
    if (sortDirection === "career-asc") {
      setCareerArrow("↑");
      setSalaryArrow("");
    } else if (sortDirection === "career-desc") {
      setCareerArrow("↓");
      setSalaryArrow("");
    } else if (sortDirection === "salary-asc") {
      setCareerArrow("");
      setSalaryArrow("↑");
    } else {
      setCareerArrow("");
      setSalaryArrow("↓");
    }
  }, [sortDirection]);

  const handleSortByCareers = () => {
    setSortDirection(sortDirection === "career-asc" ? "career-desc" : "career-asc");
  };

  const handleSortBySalary = () => {
    setSortDirection(sortDirection === "salary-asc" ? "salary-desc" : "salary-asc");
  };

  return (
    <div style={{ paddingLeft: "100px", paddingRight: "100px", paddingTop: "30px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={handleSortByCareers}>Career {careerArrow}</th>
            <th onClick={handleSortBySalary}>Salary {salaryArrow}</th>
          </tr>
        </thead>
        <tbody>
          {sortedCareers.map((career: any) => (
            <CareersTableRow key={career.title} career={career} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
