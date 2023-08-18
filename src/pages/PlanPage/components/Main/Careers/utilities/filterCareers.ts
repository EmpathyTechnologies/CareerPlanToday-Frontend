import allCareers from "../../../../../../data/careers.json";

export function filterCareers(filterByCareerName: string, filterBySalary: [number, number]) {
  let filteredCareers = allCareers;

  filteredCareers =
    filterByCareerName === "All Careers" ? allCareers : filteredCareers.filter((career) => career.industries.includes(filterByCareerName));

  filteredCareers = filteredCareers.filter(
    (career) => career.salary.national.average >= filterBySalary[0] && career.salary.national.average <= filterBySalary[1]
  );

  return filteredCareers;
}
