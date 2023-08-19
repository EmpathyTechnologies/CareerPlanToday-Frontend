import React, { useState } from "react";
import { Grid, InputLabel, Typography, Select, FormControl, MenuItem } from "@mui/material";
import allCareers from "../../../../../../data/allCareers";

export default function SelectCareer() {
  let age = "";
  const [careerWithCollegeJobTitle, setCareerWithCollegeJobTitle] = useState("Registered Nurses");
  const [careerWithCollegeYearsWorked, setCareerWithCollegeYearsWorked] = useState(40);
  const [careerWithNoCollegeJobTitle, setCareerWithNoCollegeJobTitle] = useState("Electricians");
  const [careerWithNoCollegeYearsWorked, setCareerWithNoCollegeYearsWorked] = useState(44);

  const handleCareerWithCollegeJobTitle = (event: any) => {
    setCareerWithCollegeJobTitle(event.target.value);
  };

  const handleCareerWithCollegeYearsWorked = (event: any) => {
    setCareerWithCollegeYearsWorked(event.target.value);
  };

  const handleCareerWithNoCollegeJobTitle = (event: any) => {
    setCareerWithNoCollegeJobTitle(event.target.value);
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
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={careerWithCollegeJobTitle}
              label='Career with College'
              onChange={handleCareerWithCollegeJobTitle}>
              {allCareers
                .filter((career) => career.educationRequired !== "No High School Diploma" && career.educationRequired !== "High School Diploma")
                .map((career) => (
                  <MenuItem value={career.jobTitle}>{career.jobTitle}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Years</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={careerWithCollegeYearsWorked}
              label='Years'
              onChange={handleCareerWithCollegeYearsWorked}>
              {generateNumberOptions(70)}
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
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={careerWithNoCollegeJobTitle}
              label='Age'
              onChange={handleCareerWithNoCollegeJobTitle}>
              {allCareers
                .filter((career) => career.educationRequired == "No High School Diploma" || career.educationRequired == "High School Diploma")
                .map((career) => (
                  <MenuItem value={career.jobTitle}>{career.jobTitle}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Job</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={careerWithNoCollegeYearsWorked}
              label='Years Worked'
              onChange={handleCareerWithNoCollegeYearsWorked}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
              <MenuItem value={14}>14</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={16}>16</MenuItem>
              <MenuItem value={17}>17</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={21}>21</MenuItem>
              <MenuItem value={22}>22</MenuItem>
              <MenuItem value={23}>23</MenuItem>
              <MenuItem value={24}>24</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={26}>26</MenuItem>
              <MenuItem value={27}>27</MenuItem>
              <MenuItem value={28}>28</MenuItem>
              <MenuItem value={29}>29</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={31}>31</MenuItem>
              <MenuItem value={32}>32</MenuItem>
              <MenuItem value={33}>33</MenuItem>
              <MenuItem value={34}>34</MenuItem>
              <MenuItem value={35}>35</MenuItem>
              <MenuItem value={36}>36</MenuItem>
              <MenuItem value={37}>37</MenuItem>
              <MenuItem value={38}>38</MenuItem>
              <MenuItem value={39}>39</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={41}>41</MenuItem>
              <MenuItem value={42}>42</MenuItem>
              <MenuItem value={43}>43</MenuItem>
              <MenuItem value={44}>44</MenuItem>
              <MenuItem value={45}>45</MenuItem>
              <MenuItem value={46}>46</MenuItem>
              <MenuItem value={47}>47</MenuItem>
              <MenuItem value={48}>48</MenuItem>
              <MenuItem value={49}>49</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={51}>51</MenuItem>
              <MenuItem value={52}>52</MenuItem>
              <MenuItem value={53}>53</MenuItem>
              <MenuItem value={54}>54</MenuItem>
              <MenuItem value={55}>55</MenuItem>
              <MenuItem value={56}>56</MenuItem>
              <MenuItem value={57}>57</MenuItem>
              <MenuItem value={58}>58</MenuItem>
              <MenuItem value={59}>59</MenuItem>
              <MenuItem value={60}>60</MenuItem>
              <MenuItem value={61}>61</MenuItem>
              <MenuItem value={62}>62</MenuItem>
              <MenuItem value={63}>63</MenuItem>
              <MenuItem value={64}>64</MenuItem>
              <MenuItem value={65}>65</MenuItem>
              <MenuItem value={66}>66</MenuItem>
              <MenuItem value={67}>67</MenuItem>
              <MenuItem value={68}>68</MenuItem>
              <MenuItem value={69}>69</MenuItem>
              <MenuItem value={70}>70</MenuItem>
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
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Age' onChange={handleCareerWithCollegeJobTitle}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>No College</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Age' onChange={handleCareerWithCollegeJobTitle}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Total</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Age' onChange={handleCareerWithCollegeJobTitle}>
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
