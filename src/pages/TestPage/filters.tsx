import MultiRangeSlider from "./multi-range-slider/multi-range-slider";

function Filters() {
  return (
    <div className='filters'>
      <div className='mb-4 d-flex align-items-center justify-content-between'>
        <h5 className='mb-0'>Filters:</h5>
        <a href='#'>Clear All Filters</a>
      </div>
      <div className='salary-range'>
        <h6>Salary Range</h6>
        <MultiRangeSlider min={0} max={10000} onChange={({ min, max }) => {}} />
      </div>
      <div className='mb-4 mt-5'>
        <h6>Job outlook</h6>
        <ul className='filter-checkbox'>
          <li>
            <label className='label-container'>
              Above Average
              <input type='checkbox' id='' name='' readOnly />
              <span className='checkmark'></span>
            </label>
          </li>
          <li>
            <label className='label-container'>
              Average
              <input type='checkbox' id='' name='' readOnly />
              <span className='checkmark'></span>
            </label>
          </li>
          <li>
            <label className='label-container'>
              Below Average
              <input type='checkbox' id='' name='' readOnly />
              <span className='checkmark'></span>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h6>Education Required</h6>
        <ul className='filter-checkbox'>
          <li>
            <label className='label-container'>
              High School Degree
              <input type='checkbox' id='' name='' readOnly />
              <span className='checkmark'></span>
            </label>
          </li>
          <li>
            <label className='label-container'>
              Associate Degree
              <input type='checkbox' id='' name='' readOnly />
              <span className='checkmark'></span>
            </label>
          </li>
          <li>
            <label className='label-container'>
              Bachelor Degree
              <input type='checkbox' id='' name='' readOnly />
              <span className='checkmark'></span>
            </label>
          </li>
          <li>
            <label className='label-container'>
              Master's Degree
              <input type='checkbox' id='' name='' readOnly />
              <span className='checkmark'></span>
            </label>
          </li>
          <li>
            <label className='label-container'>
              PHD
              <input type='checkbox' id='' name='' readOnly />
              <span className='checkmark'></span>
            </label>
          </li>
          <li>
            <label className='label-container'>
              None
              <input type='checkbox' id='' name='' readOnly />
              <span className='checkmark'></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filters;
