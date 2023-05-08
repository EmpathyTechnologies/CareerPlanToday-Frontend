import allColleges from "../../../data/colleges.json";

export let minTuition = Math.min(...allColleges.map((college: any) => college.tuition));

export let maxTuition = Math.max(...allColleges.map((college: any) => college.tuition));
