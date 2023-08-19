import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { InputLabel, Select, FormControl, MenuItem } from "@mui/material";
export default function SelectCareer() {
  const age = 10;
  const handleChange = () => {};
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {/* START: College Required */}
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Select Career (College Required)
          </Typography>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Job</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Age' onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Job</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Age' onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* END: College Required */}

        {/* START: College Not Required */}
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Select Career (College Not Required)
          </Typography>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Job</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Age' onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Job</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Age' onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* END: College Not Required */}

        {/* START: Calculated Output */}
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            Extra Income With College
          </Typography>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>College</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Age' onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>No College</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Age' onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Total</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Age' onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* END: Calculated Output */}
      </Grid>
    </React.Fragment>
  );
}
