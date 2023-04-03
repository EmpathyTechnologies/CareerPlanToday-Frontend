import CareersTableRow from "./CareersTableRow";

export default function CareersTableBody(props: any) {
  let { sortedCareers } = props;

  return (
    <tbody>
      {sortedCareers.map((career: any) => (
        <CareersTableRow key={career.title} career={career} />
      ))}
    </tbody>
  );
}
