import allColleges from "../data/colleges.json";
import { formatCurrency } from "../utilities/formatCurrency";
import Table from "react-bootstrap/Table";
import CollegesNavbar from "../components/Colleges/CollegesNavbar/CollegesNavbar";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";

export default function Colleges() {
  const [collegesList, setCollegesList] = useState(allColleges);
  const [filter, setFilter] = useState<string>("All States");

  const [lowestTuition, setLowestTuition] = useState(
    Math.min(...collegesList.map((college: any) => college.tuition))
  );

  const [highestTuition, setHighestTuition] = useState(
    Math.max(...collegesList.map((college: any) => college.tuition))
  );

  const [sliderValues, setSliderValues] = useState<number[]>([lowestTuition, highestTuition]);

  useEffect(() => {
    // FILTER COLLEGES LIST
    if (filter === "All States") setCollegesList(allColleges);
    else {
      let filteredCareers = allColleges.filter((college) => college.state === filter);
      setCollegesList(filteredCareers);
    }
  }, [filter]);

  return (
    <div>
      <CollegesNavbar
        collegesList={collegesList}
        setFilter={setFilter}
        sliderValues={sliderValues}
        setSliderValues={setSliderValues}
        lowestTuition={lowestTuition}
        setLowestTuition={setLowestTuition}
        highestTuition={highestTuition}
        setHighestTuition={setHighestTuition}
      />
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
