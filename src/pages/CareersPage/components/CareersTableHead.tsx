import { useState, useEffect } from "react";

interface CareersTableInterface {
  sortDirection: any;
  setSortDirection: any;
}

export default function CareersTableHead({ sortDirection, setSortDirection }: CareersTableInterface) {
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
        <th onClick={handleSortByCareers}>Career {arrow.career}</th>
        <th onClick={handleSortBySalary}>Salary {arrow.salary}</th>
      </tr>
    </thead>
  );
}
