import allCareers from "../../../data/careers.json";

export let minSalary = Math.min(...allCareers.map((career: any) => career.salary.national.average));

export let maxSalary = Math.max(...allCareers.map((career: any) => career.salary.national.average));
