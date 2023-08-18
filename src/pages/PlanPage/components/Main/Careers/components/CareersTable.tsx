import { useState } from "react";
import Table from "react-bootstrap/Table";
import CareersTableHead from "./CareersTableHead";
import CareersTableBody from "./CareersTableBody";
import { sortCareers } from "../utilities/SortCareers";

export default function CareersTable({ careers, setSelectedCareer }: any) {
  const [sortDirection, setSortDirection] = useState("career-asc");
  let sortedCareers = sortCareers(careers, sortDirection);

  return (
    <div>
      <Table striped bordered hover>
        <CareersTableHead sortDirection={sortDirection} setSortDirection={setSortDirection} />
        <CareersTableBody sortedCareers={sortedCareers} setSelectedCareer={setSelectedCareer} />
      </Table>
    </div>
  );
}
