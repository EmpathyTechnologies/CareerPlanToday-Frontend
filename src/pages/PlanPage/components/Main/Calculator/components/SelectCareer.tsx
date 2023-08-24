import React, { useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import allCareers from "../../../../../../data/allCareers";

export default function SelectCareer() {
  const [careerWithCollegeJobTitle, setCareerWithCollegeJobTitle] =
    useState("Registered Nurses");

  const [careerWithCollegeJobSalary, setCareerWithCollegeJobSalary] =
    useState<any>(0);

  const [careerWithNoCollegeJobSalary, setCareerWithNoCollegeJobSalary] =
    useState<any>(0);

  const [careerWithCollegeYearsWorked, setCareerWithCollegeYearsWorked] =
    useState(40);

  const [careerWithNoCollegeJobTitle, setCareerWithNoCollegeJobTitle] =
    useState("Electricians");

  const [careerWithNoCollegeYearsWorked, setCareerWithNoCollegeYearsWorked] =
    useState(44);

  const handleCareerWithCollegeJobTitle = (event: any) => {
    const selectedCareer = allCareers.find(
      (career) => career.jobTitle === event.target.value
    );

    setCareerWithCollegeJobTitle(event.target.value);

    if (selectedCareer) {
      setCareerWithCollegeJobSalary(selectedCareer.salary);
    } else {
      setCareerWithCollegeJobSalary(0);
    }
  };

  const handleCareerWithCollegeYearsWorked = (event: any) => {
    setCareerWithCollegeYearsWorked(event.target.value);
  };

  const handleCareerWithNoCollegeJobTitle = (event: any) => {
    setCareerWithNoCollegeJobTitle(event.target.value);

    const selectedCareer = allCareers.find(
      (career) => career.jobTitle === event.target.value
    );

    setCareerWithNoCollegeJobTitle(event.target.value);

    if (selectedCareer) {
      setCareerWithNoCollegeJobSalary(selectedCareer.salary);
    } else {
      setCareerWithCollegeJobSalary(0);
    }
  };

  const handleCareerWithNoCollegeYearsWorked = (event: any) => {
    setCareerWithNoCollegeYearsWorked(event.target.value);
  };

  const generateNumberOptions = (max: number) => {
    return Array.from({ length: max }, (_, index) => (
      <MenuItem key={index} value={index + 1}>
        {index + 1}
      </MenuItem>
    ));
  };

  const calculateIncome = (salaryStr: any, yearsWorked: any) => {
    if (typeof salaryStr !== "string") {
      return "Invalid salary";
    }

    const salary = parseFloat(salaryStr.replace(/[^0-9.-]+/g, ""));

    if (!isNaN(salary)) {
      const totalIncome = salary * yearsWorked;
      return "$" + totalIncome.toLocaleString();
    } else {
      return "Invalid salary";
    }
  };

  function calculateNetIncome(
    careerWithCollegeJobSalary: any,
    careerWithCollegeYearsWorked: any,
    careerWithNoCollegeJobSalary: any,
    careerWithNoCollegeYearsWorked: any
  ) {
    if (typeof careerWithCollegeJobSalary !== "string") {
      return "Invalid salary";
    }
  
    const salaryCollege = parseFloat(
      careerWithCollegeJobSalary.replace(/[^0-9.-]+/g, "")
    );

    
    const salaryNoCollege = parseFloat(
      String(careerWithNoCollegeJobSalary).replace(/[^0-9.-]+/g, "")
    );
    
  
    const netIncome = Math.floor(
      salaryCollege * careerWithCollegeYearsWorked -
        salaryNoCollege * careerWithNoCollegeYearsWorked
    ).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0, // Ensure no decimal places
    });
  
    return netIncome;
  }
  

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {/* START: College Required */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Select Career (College Required)
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Job</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={careerWithCollegeJobTitle}
              label="Career with College"
              onChange={handleCareerWithCollegeJobTitle}
            >
              {allCareers
                .filter(
                  (career) =>
                    career.educationRequired !== "No High School Diploma" &&
                    career.educationRequired !== "High School Diploma"
                )
                .map((career) => (
                  <MenuItem value={career.jobTitle}>{career.jobTitle}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Years</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={careerWithCollegeYearsWorked}
              label="Years"
              onChange={handleCareerWithCollegeYearsWorked}
            >
              {generateNumberOptions(70)}
            </Select>
          </FormControl>
        </Grid>
        {/* END: College Required */}

        {/* START: College Not Required */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Select Career (College Not Required)
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Job</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={careerWithNoCollegeJobTitle}
              label="Age"
              onChange={handleCareerWithNoCollegeJobTitle}
            >
              {allCareers
                .filter(
                  (career) =>
                    career.educationRequired === "No High School Diploma" ||
                    career.educationRequired === "High School Diploma"
                )
                .map((career) => (
                  <MenuItem value={career.jobTitle}>{career.jobTitle}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Job</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={careerWithNoCollegeYearsWorked}
              label="Years Worked"
              onChange={handleCareerWithNoCollegeYearsWorked}
            >
              {[...Array(70)].map((_, index) => (
                <MenuItem key={index} value={index + 1}>
                  {index + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/* END: College Not Required */}

        {/* START: Calculated Output */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Extra Income With College {careerWithCollegeJobSalary}
          </Typography>
          <div>
            {careerWithCollegeJobSalary} salary x {careerWithCollegeYearsWorked}{" "}
            years ={" "}
            {calculateIncome(
              careerWithCollegeJobSalary,
              careerWithCollegeYearsWorked
            )}{" "}
            total
          </div>
          <div>
            {careerWithNoCollegeJobSalary} salary x{" "}
            {careerWithNoCollegeYearsWorked} years ={" "}
            {calculateIncome(
              careerWithNoCollegeJobSalary,
              careerWithNoCollegeYearsWorked
            )}{" "}
            total
          </div>
          <div>
            {calculateNetIncome(
              careerWithCollegeJobSalary,
              careerWithCollegeYearsWorked,
              careerWithNoCollegeJobSalary,
              careerWithNoCollegeYearsWorked
            )}{" "}
            Net Income with College
          </div>
        </Grid>
        {/* END: Calculated Output */}
      </Grid>
    </React.Fragment>
  );
}
