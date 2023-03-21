import React from "react";

export default function CareersTable(props: any) {
  let { career, handleCheckboxChange } = props;

  return (
    <tr>
      <td>
        <input
          type='checkbox'
          checked={career.favorite}
          onChange={() => handleCheckboxChange(career.title)}
        />
      </td>
      <td>{career.title}</td>
      <td>
        {career.salary.national.average.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        })}
      </td>
    </tr>
  );
}
