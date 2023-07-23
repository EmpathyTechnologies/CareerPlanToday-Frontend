import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface College {
  id: number;
  name: string;
  tuition: number;
}

interface CollegesTableProps {
  colleges: College[];
  setColleges: any;
  userSavedColleges: any;
  setUserSavedColleges: any;
}

export default function CollegesTable({ colleges, setColleges, userSavedColleges, setUserSavedColleges }: CollegesTableProps) {
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

  function toggleSaveCollege(id: any) {
    if (userSavedColleges.includes(id)) {
      setUserSavedColleges(userSavedColleges.filter((element: number) => element !== parseInt(id)));
    } else {
      setUserSavedColleges([...userSavedColleges, id]);
    }
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
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
            {userSavedColleges.includes(college.id) ? (
              <div onClick={toggleSaveCollege} style={{ color: "rgb(255, 56, 92)" }}>
                <AiFillHeart />
              </div>
            ) : (
              <div onClick={toggleSaveCollege}>
                <AiOutlineHeart />
              </div>
            )}
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
