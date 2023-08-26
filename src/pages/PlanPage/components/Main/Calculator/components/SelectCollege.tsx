import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";

import colleges from "../../../../../../data/colleges.json";
import React, { useState } from "react";
// Montana
// New Mexico
// Wyoming

export default function SelectCollege() {
  const USAStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const [USAState, setUSAState] = useState<any>("Indiana");

  const [college, setCollege] = useState<any>({
    name: "University of Vermont",
    state: "Vermont",
    tuition: 19062,
  });

  const handleUSAState = (event: any) => {
    const { value } = event.target;
    setUSAState(value);

    setCollege({
      name: "",
      state: "",
      tuition: 0,
    });
  };

  const handleCollege = (event: any) => {
    const { value } = event.target;
    const selectedCollege = colleges.find((college) => college.name === value);
    setCollege(selectedCollege);
  };

  const filteredColleges = colleges.filter((college) => college.state === USAState);

  return (
    <React.Fragment>
      {/* START Select USA State */}
      <Grid item xs={12}>
        <Typography variant='h6' gutterBottom style={{ fontWeight: "bold" }}>
          Select State
        </Typography>
        <Grid item xs={10} style={{ margin: "0 auto" }}>
          <FormControl fullWidth>
            <InputLabel>State</InputLabel>
            <Select value={USAState} onChange={handleUSAState}>
              {USAStates.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
            {/* <Select value={USAState} onChange={handleUSAState}>
              {USAStates.filter((filterCollege) => filterCollege === college).map((USAState) => (
                <MenuItem key={USAState} value={USAState}>
                  {USAState}
                </MenuItem>
              ))}
            </Select> */}
          </FormControl>
        </Grid>
      </Grid>
      {/* END Select USA State */}
      {/* START Select College */}
      <Grid item xs={12}>
        <Typography variant='h6' gutterBottom style={{ fontWeight: "bold" }}>
          Select College
        </Typography>
        <Grid item xs={10} style={{ margin: "0 auto" }}>
          <FormControl fullWidth>
            <InputLabel>College</InputLabel>
            <Select value={college.name} onChange={handleCollege}>
              {filteredColleges.map((college) => (
                <MenuItem key={college.name} value={college.name}>
                  {college.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/* END Select College */}
    </React.Fragment>
  );
}
