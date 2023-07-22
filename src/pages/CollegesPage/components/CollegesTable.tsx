import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../utilities/formatCurrency";

interface College {
  id: number;
  name: string;
  tuition: number;
}

interface CollegesTableProps {
  colleges: College[];
  setColleges: any;
}

export default function CollegesTable({ colleges, setColleges }: CollegesTableProps) {
  const [sortColumn, setSortColumn] = useState<any>();
  const [sortOrder, setSortOrder] = useState<any>();

  function sortColleges(column: "college" | "tuition") {
    const sortedList = colleges.slice().sort((a: any, b: any) => {
      if (column === "college") return a.name.localeCompare(b.name);
      else return a.tuition - b.tuition;
    });

    if (sortOrder === "asc") {
      sortedList.reverse();
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
    setSortColumn(column);
    setColleges(sortedList);
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={() => sortColleges("college")} className={"colleges-header"}>
            College {sortColumn === "college" && (sortOrder === "asc" ? "↓" : "↑")}
          </th>
          <th onClick={() => sortColleges("tuition")} className={"colleges-header flex-center"}>
            Tuition / Year {sortColumn === "tuition" && (sortOrder === "asc" ? "↓" : "↑")}
          </th>
        </tr>
      </thead>

      <tbody>
        {colleges.map((college: any) => (
          <tr>
            <td>
              <Link to={`/colleges/${college.id}`}>{college.name}</Link>
            </td>
            <td className='flex-center'>{formatCurrency(college.tuition)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
