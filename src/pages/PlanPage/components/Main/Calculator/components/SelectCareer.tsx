import React, { useEffect, useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import allCareers from "../../../../../../data/allCareers";
import { brandGreen, brandGreen_Dark, brandRed } from "../../../../../../assets/brandColors";
export default function SelectCareer() {
  const [collegeCareer, setCollegeCareer] = useState({
    jobTitle: "Registered Nurses",
    jobSalary: 81220,
    yearsWorked: 40,
  });

  const [noCollegeCareer, setNoCollegeCareer] = useState({
    jobTitle: "Electricians",
    jobSalary: 60240,
    yearsWorked: 44,
  });

  const [calculateNetIncomeValue, setCalculateNetIncomeValue] = useState(0);

  const handleCareerChange = (event: any, careerType: any) => {
    const { value } = event.target;
    const selectedCareer = allCareers.find((career) => career.jobTitle === value);
    if (selectedCareer) {
      const jobSalary = parseFloat(selectedCareer.salary.replace(/[$,]/g, ""));
      careerType === "college"
        ? setCollegeCareer({ ...collegeCareer, jobTitle: value, jobSalary })
        : setNoCollegeCareer({
            ...noCollegeCareer,
            jobTitle: value,
            jobSalary,
          });
    }
  };

  const handleYearsWorkedChange = (event: any, careerType: any) => {
    const { value } = event.target;
    careerType === "college"
      ? setCollegeCareer({ ...collegeCareer, yearsWorked: value })
      : setNoCollegeCareer({ ...noCollegeCareer, yearsWorked: value });
  };

  const generateNumberOptions = (max: any) => {
    return Array.from({ length: max }, (_, index) => (
      <MenuItem key={index} value={index + 1}>
        {index + 1}
      </MenuItem>
    ));
  };

  const calculateIncome = (salary: any, yearsWorked: any) => {
    if (!isNaN(salary)) {
      const totalIncome = salary * yearsWorked;
      return "$" + totalIncome.toLocaleString();
    } else {
      return "Invalid salary";
    }
  };

  const calculateNetIncome = (
    collegeCareerSalary: any,
    collegeCareerYearsWorked: any,
    noCollegeCareerSalary: any,
    noCollegeCareerYearsWorked: any
  ) => {
    const netIncome = collegeCareerSalary * collegeCareerYearsWorked - noCollegeCareerSalary * noCollegeCareerYearsWorked;

    return netIncome;
  };

  useEffect(() => {
    setCalculateNetIncomeValue(
      calculateNetIncome(
        Number(collegeCareer.jobSalary),
        Number(collegeCareer.yearsWorked),
        Number(noCollegeCareer.jobSalary),
        Number(noCollegeCareer.yearsWorked)
      )
    );
  }, [collegeCareer, noCollegeCareer]);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom style={{ fontWeight: "bold" }}>
            Select Career that Requires College
          </Typography>
          <Grid item xs={10} style={{ margin: "0 auto" }}>
            <FormControl fullWidth>
              <InputLabel id='college-career-label'>Job</InputLabel>
              <Select value={collegeCareer.jobTitle} onChange={(event) => handleCareerChange(event, "college")}>

                {allCareers
                  .filter((career) => career.educationRequired !== "No High School Diploma" && career.educationRequired !== "High School Diploma")
                  .map((career) => (
                    <MenuItem key={career.jobTitle} value={career.jobTitle}>
                      {career.jobTitle}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>{" "}
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={10} style={{ margin: "0 auto" }}>
            <FormControl fullWidth>
              <InputLabel id='college-years-label'>Years</InputLabel>
              <Select
                labelId='college-years-label'
                id='college-years-select'
                value={collegeCareer.yearsWorked}
                label='Years'
                onChange={(event) => handleYearsWorkedChange(event, "college")}>
                {generateNumberOptions(70)}
              </Select>
            </FormControl>
          </Grid>{" "}
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom style={{ fontWeight: "bold" }}>
            Compare to Career that Doesn't Require College
          </Typography>
          <Grid item xs={10} style={{ margin: "0 auto" }}>
            <FormControl fullWidth>
              <InputLabel id='no-college-career-label'>Job</InputLabel>
              <Select value={noCollegeCareer.jobTitle} onChange={(event) => handleCareerChange(event, "noCollege")}>
                {allCareers
                  .filter((career) => career.educationRequired === "No High School Diploma" || career.educationRequired === "High School Diploma")
                  .map((career) => (
                    <MenuItem key={career.jobTitle} value={career.jobTitle}>
                      {career.jobTitle}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>{" "}
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={10} style={{ margin: "0 auto" }}>
            <FormControl fullWidth>
              <InputLabel id='no-college-years-label'>Job</InputLabel>
              <Select
                labelId='no-college-years-label'
                id='no-college-years-select'
                value={noCollegeCareer.yearsWorked}
                label='Years Worked'
                onChange={(event) => handleYearsWorkedChange(event, "noCollege")}>
                {generateNumberOptions(70)}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom style={{ fontWeight: "bold" }}>
            Extra Income With College
          </Typography>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div>
              {collegeCareer.jobSalary.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })}{" "}
              salary x {collegeCareer.yearsWorked} years = {calculateIncome(collegeCareer.jobSalary, collegeCareer.yearsWorked)} total
            </div>
            <div>
              {noCollegeCareer.jobSalary.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              })}{" "}
              salary x {noCollegeCareer.yearsWorked} years = {calculateIncome(noCollegeCareer.jobSalary, noCollegeCareer.yearsWorked)} total
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}>
              <span style={{ color: calculateNetIncomeValue >= 0 ? brandGreen_Dark : brandRed }}>
                {calculateNetIncomeValue.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0,
                })}
              </span>
              <span> Net Lifetime Earnings</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
