import { FormControl, Grid, Input, InputAdornment, InputLabel } from "@mui/material";
import { useState } from "react";

const Budget = () => {
  const [averageMonthlySalary, setAverageMonthlySalary] = useState(0);
  const [estimatedTaxes, setEstimatedTaxes] = useState(0);
  const [taxPercentage, setTaxPercentage] = useState(0);

  return (
    <>
      <div>
        <h3>Lifestyle Budget</h3>
      </div>
      <div>
        <h4>INCOME</h4>
        <Grid container spacing={1} xs={3} id='income'>
          <Grid item spacing={2}>
            <FormControl variant='standard'>
              <InputLabel htmlFor='average-salary'>Average Salary</InputLabel>
              <Input
                id='average-salary'
                startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                placeholder={averageMonthlySalary.toString()}
                onChange={(e) => setAverageMonthlySalary(parseInt(e.target.value))}
              />
            </FormControl>
          </Grid>
          <Grid item spacing={2} id='tax-section'>
            <FormControl variant='standard' id='tax-percentage'>
              <div>
                <InputLabel htmlFor='tax-percentage'>Estimated Tax %</InputLabel>
                <Input
                  id='tax-percentage'
                  endAdornment={<InputAdornment position='end'>%</InputAdornment>}
                  placeholder={taxPercentage.toString()}
                  onChange={(e) => {
                    setTaxPercentage(parseInt(e.target.value));
                    setEstimatedTaxes(taxPercentage * averageMonthlySalary);
                  }}
                />
              </div>
              <br />
              <div>
                <p id='estimated-tax-total' placeholder=''>
                  ${estimatedTaxes}
                </p>
              </div>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Budget;
