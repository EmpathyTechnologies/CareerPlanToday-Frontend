import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollegeSave } from "../../../redux/actions";

interface College {
  id: number;
  name: string;
  tuition: number;
}

interface CollegesTableProps {
  colleges: College[];
  setColleges: any;

  setUserSavedColleges: any;
}

export default function CollegesTable({ colleges, setColleges, setUserSavedColleges }: CollegesTableProps) {
  const userSavedColleges = useSelector((state: any) => state.colleges);
  const dispatch = useDispatch();

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

  function toggleSaveCollege(id: number) {
    dispatch(toggleCollegeSave(id));
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
              <div onClick={() => toggleSaveCollege(college.id)} style={{ color: "rgb(255, 56, 92)" }}>
                <AiFillHeart />
              </div>
            ) : (
              <div onClick={() => toggleSaveCollege(college.id)}>
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
