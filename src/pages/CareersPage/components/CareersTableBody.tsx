import CareersTableRow from "./CareersTableRow";

export default function CareersTableBody(props: any) {
  let { sortedCareers, setSelectedCareer } = props;

  return (
    <tbody>
      {sortedCareers.map((career: any) => (
        <CareersTableRow key={career.title} careerData={career} setSelectedCareer={setSelectedCareer} />
      ))}
    </tbody>
  );
}
