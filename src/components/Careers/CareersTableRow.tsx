import { formatCurrency } from "../../utilities/formatCurrency";
import { Link } from "react-router-dom";

export default function CareersTableRow(props: any) {
  let { career } = props;

  function checkIf208000(salary: string) {
    if (salary === "$208,000") return "$208,000+";
    else return salary;
  }

  return (
    <tr>
      <td>
        <Link to={`/careers/${career.id}`}>{career.title}</Link>
      </td>
      <td>{checkIf208000(formatCurrency(career.salary.national.average))}</td>
    </tr>
  );
}
