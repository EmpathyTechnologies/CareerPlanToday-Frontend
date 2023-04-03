import { useState } from "react";
import Table from "react-bootstrap/Table";
import CareersTableHead from "./CareersTableHead";
import CareersTableBody from "./CareersTableBody";

export default function CareersTable({ careersList }: any) {
  const [sortDirection, setSortDirection] = useState("career-asc");

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

  return (
    <div style={{ paddingLeft: "100px", paddingRight: "100px", paddingTop: "30px" }}>
      <Table striped bordered hover>
        <CareersTableHead sortDirection={sortDirection} setSortDirection={setSortDirection} />
        <CareersTableBody sortedCareers={sortedCareers} />
      </Table>
    </div>
  );
}
