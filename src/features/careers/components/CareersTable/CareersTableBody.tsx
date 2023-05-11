import CareersTableRow from "./CareersTableRow";

export default function CareersTableBody(props: any) {
  let {
    sortedCareers,
    // favorites, setFavorites
  } = props;

  return (
    <tbody>
      {sortedCareers.map((career: any) => (
        <CareersTableRow
          key={career.title}
          career={career}
          // favorites={favorites} setFavorites={setFavorites}
        />
      ))}
    </tbody>
  );
}
