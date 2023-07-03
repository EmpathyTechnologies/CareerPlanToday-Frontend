import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';



function Accessibility() {


  return (<div>
        <h1>Accessibility</h1>
        <div className="d-flex flex-column">
        <FormControlLabel control={<Switch  />} label="Dark Mode" />
        <FormControlLabel control={<Switch  />} label="Dyslexic Friendly Font" />
        </div>
    </div>
  )
}

export default Accessibility