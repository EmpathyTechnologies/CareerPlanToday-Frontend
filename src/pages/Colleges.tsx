import React from "react";
import allColleges from "../data/colleges.json";
import { formatCurrency } from "../utilities/formatCurrency";
import Table from "react-bootstrap/Table";
import CollegesNavbar from "../components/Colleges/CollegesNavbar";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";

export default function Colleges() {
  const [filter_USA_States, set_USA_States_Filter] = useState<string>("All States");
  const [collegesList, setCollegesList] = useState(allColleges);

  useEffect(() => {
    if (filter_USA_States === "All States") setCollegesList(allColleges);
    else {
      let filteredCareers = allColleges.filter((college) => college.state === filter_USA_States);
      setCollegesList(filteredCareers);
    }
  }, [filter_USA_States]);

  return (
    <div>
      <CollegesNavbar set_USA_States_Filter={set_USA_States_Filter} />
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
