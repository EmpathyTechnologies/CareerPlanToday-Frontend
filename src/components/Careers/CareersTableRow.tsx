import { formatCurrency } from "../../utilities/formatCurrency";
export default function CareersTableRow(props: any) {
  let { career } = props;

  function checkIf208000(salary: string) {
    if (salary === "$208,000") return "$208,000+";
    else return salary;
  }

  return (
    <tr>
      <td>{career.title}</td>
      <td>{checkIf208000(formatCurrency(career.salary.national.average))}</td>
    </tr>
  );
}
