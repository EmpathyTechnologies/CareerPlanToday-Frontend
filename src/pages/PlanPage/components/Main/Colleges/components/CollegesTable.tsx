import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { brandBlue_Dark, brandRed } from "../../../../../../assets/brandColors";
import { CollegesTableType } from "../../../../../../types/CollegesTableType";
import { formatCurrency } from "../../../../../../utilities/formatCurrency";
import { toggleCollegeSave } from "../../../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Table from "react-bootstrap/Table";

export default function CollegesTable({ colleges, setColleges, setSelectedCollege }: CollegesTableType) {
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

  function toggleSaveCollege(college: any, id: number) {
    dispatch(toggleCollegeSave(college));
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th onClick={() => sortColleges("college")} className={"colleges-header"} style={{ cursor: "pointer" }}>
            College {sortColumn === "college" && (sortOrder === "asc" ? "↓" : "↑")}
          </th>
          <th onClick={() => sortColleges("tuition")} className={"colleges-header flex-center"} style={{ cursor: "pointer" }}>
            Tuition / Year {sortColumn === "tuition" && (sortOrder === "asc" ? "↓" : "↑")}
          </th>
        </tr>
      </thead>

      <tbody>
        {colleges.map((college: any) => (
          <tr>
            {userSavedColleges.includes(college) ? (
              <div onClick={() => toggleSaveCollege(college, college.id)} style={{ color: brandRed, cursor: "pointer" }}>
                <AiFillHeart />
              </div>
            ) : (
              <div onClick={() => toggleSaveCollege(college, college.id)} style={{ cursor: "pointer" }}>
                <AiOutlineHeart />
              </div>
            )}
            <td>
              <div
                onClick={() => setSelectedCollege(college.id)}
                style={{
<<<<<<< HEAD
                  color: brandBlue_Dark,
=======
                   color: brandBlue_Dark,
>>>>>>> 7abd0fdab468fcbe2d857fb498f1e1fa81b786af
                  cursor: "pointer",
                }}>
                {college.name}
              </div>
            </td>
            <td className='flex-center'>{formatCurrency(college.tuition)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
