import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Navigation from "../../layouts/navbar";
import Footer from "../../layouts/footer";

function Accessibility() {
  return (
    <div>
      <Navigation />
      <h1>Accessibility</h1>
      <div className='d-flex flex-column'>
        <FormControlLabel control={<Switch />} label='Dark Mode' />
        <FormControlLabel control={<Switch />} label='Dyslexic Friendly Font' />
      </div>
      <Footer />
    </div>
  );
}

export default Accessibility;
