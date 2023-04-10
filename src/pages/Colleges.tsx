import allColleges from "../data/colleges.json";
import { formatCurrency } from "../utilities/formatCurrency";
import Table from "react-bootstrap/Table";
import CollegesNavbar from "../components/Colleges/CollegesNavbar/CollegesNavbar";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";

export default function Colleges() {
  const [collegesList, setCollegesList] = useState(allColleges);
  const [filterByStates, setFilterByStates] = useState<string>("All States");

  const [lowestTuition, setLowestTuition] = useState(
    Math.min(...collegesList.map((college: any) => college.tuition))
  );

  const [highestTuition, setHighestTuition] = useState(
    Math.max(...collegesList.map((college: any) => college.tuition))
  );

  const [filterByTuition, setFilterByTuition] = useState<number[]>([lowestTuition, highestTuition]);

  useEffect(() => {
    let myDoubleFilteredColleges = allColleges;
    if (filterByStates === "All States") {
      myDoubleFilteredColleges = allColleges;
    } else {
      myDoubleFilteredColleges = myDoubleFilteredColleges.filter(
        (college) => college.state === filterByStates
      );
    }
    myDoubleFilteredColleges = myDoubleFilteredColleges.filter(
      (college) => college.tuition >= filterByTuition[0] && college.tuition <= filterByTuition[1]
    );

    setCollegesList(myDoubleFilteredColleges);
  }, [filterByStates, filterByTuition]);

  return (
    <div>
      <CollegesNavbar
        collegesList={collegesList}
        setFilterByStates={setFilterByStates}
        filterByTuition={filterByTuition}
        setFilterByTuition={setFilterByTuition}
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
