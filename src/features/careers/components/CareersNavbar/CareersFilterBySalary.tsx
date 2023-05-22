import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { formatCurrency } from "../../../../utilities/formatCurrency";

export default function CareersNavbarTuitionSlider({ filterBySalary, setFilterBySalary, minSalary, maxSalary }: any) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setFilterBySalary([newValue, newValue]);
    } else {
      let [min, max] = newValue;
      min = Math.max(min, minSalary);
      max = Math.min(max, maxSalary);
      setFilterBySalary([min, max]);
    }
  };

  return (
    <div>
      <Box>
        <span>{formatCurrency(minSalary)}</span>
        <Slider value={filterBySalary} onChange={handleChange} valueLabelDisplay='auto' min={minSalary} max={maxSalary} />
        <span>{formatCurrency(maxSalary)}</span>
      </Box>
    </div>
  );
}
