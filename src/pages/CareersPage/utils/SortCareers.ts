interface CareersProps {
  id: number;
  title: string;
  favorite: boolean;
  alsoCalled: string[];
  industries: string[];
  education: string;
  jobOutlook: string;
  salary: {
    national: {
      tenthPercentile: number;
      average: number;
      ninetiethPercentile: number;
    };
    state: any;
    zip: any;
  };
}

export function sortCareers(careers: any, sortDirection: string) {
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

export function sortColleges() {}

export function sortPeople() {}
