import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { formatCurrency } from "../../../utilities/formatCurrency";

export default function CollegesNavbarTuitionSlider({ filterByTuition, setFilterByTuition, minimumTuition, maximumTuition }: any) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setFilterByTuition([newValue, newValue]);
    } else {
      let [min, max] = newValue;
      min = Math.max(min, minimumTuition);
      max = Math.min(max, maximumTuition);
      setFilterByTuition([min, max]);
    }
  };

  return (
    <div>
      <Box sx={{ width: 550, marginLeft: "30px", display: "flex" }}>
        <span style={{ paddingRight: "25px" }}>{formatCurrency(minimumTuition)}</span>
        <Slider
          style={{ width: 200 }}
          value={filterByTuition}
          onChange={handleChange}
          valueLabelDisplay='auto'
          min={minimumTuition}
          max={maximumTuition}
        />
        <span style={{ paddingLeft: "25px" }}>{formatCurrency(maximumTuition)}</span>
      </Box>
    </div>
  );
}
