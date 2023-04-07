import React from "react";
import allColleges from "../data/colleges.json";
import { formatCurrency } from "../utilities/formatCurrency";
import Table from "react-bootstrap/Table";

export default function Colleges() {
  return (
    <div style={{ padding: "25px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>College</th>
            <th>Tuition</th>
          </tr>
        </thead>
        <tbody>
          {allColleges.map((college) => (
            <tr>
              <td>{college.collegeName}</td>
              <td>{formatCurrency(college.tuition)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
