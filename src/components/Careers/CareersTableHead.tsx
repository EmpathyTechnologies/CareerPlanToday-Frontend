import React, { useState, useEffect } from "react";

export default function CareersTableHead({ sortDirection, setSortDirection }: any) {
  const [careerArrow, setCareerArrow] = useState("↓");
  const [salaryArrow, setSalaryArrow] = useState("");

  const handleSortByCareers = () => {
    setSortDirection(sortDirection === "career-asc" ? "career-desc" : "career-asc");
  };

  const handleSortBySalary = () => {
    setSortDirection(sortDirection === "salary-asc" ? "salary-desc" : "salary-asc");
  };

  useEffect(() => {
    if (sortDirection === "career-asc") {
      setCareerArrow("↑");
      setSalaryArrow("");
    } else if (sortDirection === "career-desc") {
      setCareerArrow("↓");
      setSalaryArrow("");
    } else if (sortDirection === "salary-asc") {
      setCareerArrow("");
      setSalaryArrow("↑");
    } else {
      setCareerArrow("");
      setSalaryArrow("↓");
    }
  }, [sortDirection]);

  return (
    <thead>
      <tr>
        <th onClick={handleSortByCareers}>Career{careerArrow}</th>
        <th style={{ display: "flex", justifyContent: "center" }} onClick={handleSortBySalary}>
          Salary{salaryArrow}
        </th>
      </tr>
    </thead>
  );
}
