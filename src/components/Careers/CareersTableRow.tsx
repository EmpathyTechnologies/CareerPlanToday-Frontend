import { formatCurrency } from "../../utilities/formatCurrency";
export default function CareersTableRow(props: any) {
  let { career } = props;

  return (
    <tr>
      <td>{career.title}</td>
      <td>{formatCurrency(career.salary.national.average)}</td>
    </tr>
  );
}
