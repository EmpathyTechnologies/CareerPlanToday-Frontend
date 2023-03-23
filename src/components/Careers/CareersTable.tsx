import React from "react";
import { formatCurrency } from "../../utilities/formatCurrency";
export default function CareersTable(props: any) {
  let { career, handleCheckboxChange } = props;

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={career.favorite}
          onChange={() => handleCheckboxChange(career.title)}
        />
      </td>
      <td>{career.title}</td>
      <td>{formatCurrency(career.salary.national.average)}</td>
    </tr>
  );
}
