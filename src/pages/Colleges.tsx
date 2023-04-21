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
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<"college" | "tuition" | "">("");

  useEffect(() => {
    let filteredColleges = filterColleges(filterByStates, filterByTuition);
    setCollegesList(filteredColleges);
  }, [filterByStates, filterByTuition]);

  function sortColleges(column: "college" | "tuition") {
    const sortedList = collegesList.slice().sort((a, b) => {
      if (column === "college") {
        return a.name.localeCompare(b.name);
      } else {
        return a.tuition - b.tuition;
      }
    });
    if (sortOrder === "asc") {
      sortedList.reverse();
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
    setSortColumn(column);
    setCollegesList(sortedList);
  }

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
                <th
                  onClick={() => sortColleges("college")}
                  style={{ cursor: "pointer" }}
                  onMouseOver={(e: any) => (e.target.style.backgroundColor = "#1cb0f6")}
                  onMouseOut={(e: any) => (e.target.style.backgroundColor = "")}
                >
                  College {sortColumn === "college" && (sortOrder === "asc" ? "↓" : "↑")}
                </th>
                <th
                  onClick={() => sortColleges("tuition")}
                  style={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
                  onMouseOver={(e: any) => (e.target.style.backgroundColor = "#1cb0f6")}
                  onMouseOut={(e: any) => (e.target.style.backgroundColor = "")}
                >
                  Tuition / Year {sortColumn === "tuition" && (sortOrder === "asc" ? "↓" : "↑")}
                </th>
              </tr>
            </thead>
            <tbody>
              {collegesList.map((college) => (
                <tr>
                  <td>
                    <Link to={`/colleges/${college.id}`}>{college.name}</Link>
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
