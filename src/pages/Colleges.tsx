import React from "react";
import allColleges from "../data/colleges.json";
import { formatCurrency } from "../utilities/formatCurrency";
import Table from "react-bootstrap/Table";
import CollegesNavbar from "../components/Colleges/CollegesNavbar/CollegesNavbar";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";

export default function Colleges() {
  const [filter, setFilter] = useState<string>("All States");
  const [collegesList, setCollegesList] = useState(allColleges);

  useEffect(() => {
    if (filter === "All States") setCollegesList(allColleges);
    else {
      let filteredCareers = allColleges.filter((college) => college.state === filter);
      setCollegesList(filteredCareers);
    }
  }, [filter]);

  return (
    <div>
      <CollegesNavbar setFilter={setFilter} />
      <div style={{ padding: "25px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>College</th>
              <th style={{ display: "flex", justifyContent: "center" }}>Tuition / Year</th>
            </tr>
          </thead>
          <tbody>
            {collegesList.map((college) => (
              <tr>
                <td>{college.collegeName}</td>
                <td style={{ display: "flex", justifyContent: "center" }}>
                  {formatCurrency(college.tuition)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
}
