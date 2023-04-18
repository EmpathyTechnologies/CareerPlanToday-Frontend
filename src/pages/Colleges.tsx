import { useState, useEffect } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import allColleges from "../data/colleges.json";
import CollegesNavbar from "../features/colleges/components/CollegesNavbar";
import Table from "react-bootstrap/Table";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { minimumTuition, maximumTuition } from "../features/colleges/utils/minAndMaxTuition";
import { filterColleges } from "../features/colleges/utils/filterColleges";

export default function Colleges() {
  const [collegesList, setCollegesList] = useState(allColleges);
  const [filterByStates, setFilterByStates] = useState<string>("All States");
  const [filterByTuition, setFilterByTuition] = useState<number[]>([
    minimumTuition,
    maximumTuition,
  ]);

  useEffect(() => {
    let filteredColleges = filterColleges(filterByStates, filterByTuition);
    setCollegesList(filteredColleges);
  }, [filterByStates, filterByTuition]);

  return (

    <div>
          <div className='CareersContainer'>

      <CollegesNavbar
        collegesList={collegesList}
        minimumTuition={minimumTuition}
        maximumTuition={maximumTuition}
        filterByTuition={filterByTuition}
        setFilterByTuition={setFilterByTuition}
        setFilterByStates={setFilterByStates}
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
                <td>
                  <Link to={`/colleges/${college.id}`}>{college.collegeName}</Link>
                </td>
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
    </div>
  );
}
