export function sortCareers(careers: any, sortDirection: any) {
  return careers.slice().sort((a: any, b: any) => {
    switch (sortDirection) {
      case "career-asc":
        return a.title.localeCompare(b.title);
      case "career-desc":
        return b.title.localeCompare(a.title);
      case "salary-desc":
        return a.salary.national.average - b.salary.national.average;
      default:
        return b.salary.national.average - a.salary.national.average;
    }
  });
}
