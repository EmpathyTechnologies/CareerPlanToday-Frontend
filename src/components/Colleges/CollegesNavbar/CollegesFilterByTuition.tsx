import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { formatCurrency } from "../../../utilities/formatCurrency";

export default function CollegesNavbarTuitionSlider({
  collegesList,
  sliderValues,
  setSliderValues,
  lowestTuition,
  setLowestTuition,
  highestTuition,
  setHighestTuition,
}: any) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setSliderValues([newValue, newValue]);
    } else {
      let [min, max] = newValue;
      min = Math.max(min, lowestTuition);
      max = Math.min(max, highestTuition);
      setSliderValues([min, max]);
    }
  };

  return (
    <div>
      <Box sx={{ width: 550, marginLeft: "30px", display: "flex" }}>
        <span style={{ paddingRight: "25px" }}>{formatCurrency(lowestTuition)}</span>
        <Slider
          style={{ width: 200 }}
          value={sliderValues}
          onChange={handleChange}
          valueLabelDisplay='auto'
          min={lowestTuition}
          max={highestTuition}
        />
        <span style={{ paddingLeft: "25px" }}>{formatCurrency(highestTuition)}</span>
      </Box>
    </div>
  );
}
