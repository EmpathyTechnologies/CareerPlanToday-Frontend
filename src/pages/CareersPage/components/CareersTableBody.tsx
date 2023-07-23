import CareersTableRow from "./CareersTableRow";

import { useState, useEffect } from "react";
export default function CareersTableBody(props: any) {
  let { sortedCareers } = props;

  const [userSavedCareers, setUserSavedCareers] = useState<number[]>([5, 10, 15]);

  // useEffect(() => {
  //   fetch("https://qsv6ogegh7.execute-api.us-east-1.amazonaws.com/production/savedcareers")
  //     .then((response) => response.json())
  //     .then((savedCareers: any) => setUserSavedCareers(savedCareers));
  // }, [userSavedCareers]);

  return (
    <tbody>
      {sortedCareers.map((career: any) => (
        <CareersTableRow key={career.title} career={career} userSavedCareers={userSavedCareers} setUserSavedCareers={setUserSavedCareers} />
      ))}
    </tbody>
  );
}
