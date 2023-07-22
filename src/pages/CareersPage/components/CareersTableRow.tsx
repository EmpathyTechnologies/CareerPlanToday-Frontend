import { formatCurrency } from "../../../utilities/formatCurrency";
import { Link } from "react-router-dom";

interface Career {
  id: string;
  title: string;
  salary: {
    national: {
      average: number;
    };
  };
}

interface CareersTableRowProps {
  career: Career;
}

export default function CareersTableRow(props: CareersTableRowProps) {
  let { career } = props;

  function checkIf208000(salary: string) {
    return salary === "$208,000" ? "$208,000+" : salary;
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
