import { CareersTableHeaderType } from "../../../../../../types/CareersTableHeaderType";
import { useEffect, useState } from "react";

export default function CareersTableHead({ sortDirection, setSortDirection }: CareersTableHeaderType) {
  const [arrow, setArrow] = useState<{ career: string; salary: string }>({ career: "", salary: "" });

  const handleSortByCareers = () => {
    setSortDirection(sortDirection === "career-asc" ? "career-desc" : "career-asc");
  };

  const handleSortBySalary = () => {
    setSortDirection(sortDirection === "salary-asc" ? "salary-desc" : "salary-asc");
  };

  useEffect(() => {
    if (sortDirection === "career-asc") {
      setArrow({ career: "↓", salary: "" });
    } else if (sortDirection === "career-desc") {
      setArrow({ career: "↑", salary: "" });
    } else if (sortDirection === "salary-asc") {
      setArrow({ career: "", salary: "↑" });
    } else {
      setArrow({ career: "", salary: "↓" });
    }
  }, [sortDirection]);

  return (
    <thead>
      <tr>
        <th></th>
        <th onClick={handleSortByCareers} style={{ cursor: "pointer" }}>
          Career {arrow.career}
        </th>
        <th onClick={handleSortBySalary} style={{ cursor: "pointer" }}>
          Salary {arrow.salary}
        </th>
      </tr>
    </thead>
  );
}
