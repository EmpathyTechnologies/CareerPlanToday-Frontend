import allColleges from "../../../data/colleges.json";

export function filterColleges(filterByStates: any, filterByTuition: any) {
  let filterColleges = allColleges;

  filterColleges =
    filterByStates === "All States"
      ? allColleges
      : filterColleges.filter((college) => college.state === filterByStates);

  filterColleges = filterColleges.filter(
    (college) => college.tuition >= filterByTuition[0] && college.tuition <= filterByTuition[1]
  );

  return filterColleges;
}
