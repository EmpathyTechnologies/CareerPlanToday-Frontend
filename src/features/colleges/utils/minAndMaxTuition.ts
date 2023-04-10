import allColleges from "../../../data/colleges.json";

export let minimumTuition = Math.min(...allColleges.map((college: any) => college.tuition));

export let maximumTuition = Math.max(...allColleges.map((college: any) => college.tuition));
