import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { formatCurrency } from "../utilities/formatCurrency";

export function FilterDoubleSlider({ filter, setFilter, minNumber, maxNumber }: any) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setFilter([newValue, newValue]);
    } else {
      let [min, max] = newValue;
      min = Math.max(min, minNumber);
      max = Math.min(max, maxNumber);
      setFilter([min, max]);
    }
  };

  return (
    <div className='btn btn-blue w-240 h-50'>
      <Box sx={{ width: "100%" }}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <span>{formatCurrency(minNumber)}</span>
          <span>{formatCurrency(maxNumber)}</span>
        </Box>
        <Slider value={filter} onChange={handleChange} min={minNumber} max={maxNumber} valueLabelDisplay='auto' />
      </Box>
    </div>
  );
}

export default FilterDoubleSlider;
