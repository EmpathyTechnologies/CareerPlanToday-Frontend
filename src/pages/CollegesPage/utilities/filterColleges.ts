import allColleges from "../../../data/colleges.json";

interface College {
  id: number;
  name: string;
  state: string;
  tuition: number;
}

export function filterColleges(filterByStates: string, filterByTuition: number[]) {
  let filterColleges: College[] = allColleges;

  filterColleges = filterByStates === "All States" ? allColleges : filterColleges.filter((college) => college.state === filterByStates);

  filterColleges = filterColleges.filter((college) => college.tuition >= filterByTuition[0] && college.tuition <= filterByTuition[1]);

  return filterColleges;
}
