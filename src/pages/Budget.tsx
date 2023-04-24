import React from "react";

export default function Budget() {
  let displayFlex = { display: "flex", justifyContent: "space-between" };

  return (
    <div>
      <div>After College Budget</div>
      <div style={{ fontWeight: "bold" }}>INCOME</div>
      <div style={displayFlex}>
        <div>Average Salary</div>
        <input type='text' />
      </div>
      <div style={displayFlex}>
        <div>Estimated Taxes</div>
        <input type='text' />
      </div>
      <div style={displayFlex}>
        <div>Monthly Take-home</div>
        <input type='text' />
      </div>
      <div style={displayFlex}>
        <div>Other Monthly Income</div>
        <input type='text' />
      </div>
      <div style={displayFlex}>
        <div style={{ fontWeight: "bold" }}>Total Monthly Income</div>
        <input type='text' />
      </div>
      <div style={{ fontWeight: "bold" }}>EXPENSES (per Monthl)</div>

      <div style={displayFlex}>
        <div>Housing</div>
        <select name='housing'>
          <option value='1200'>Live Alone ($1200)</option>
          <option value='600'>Roommate ($600)</option>
          <option value='250'>Live with Relatives ($250)</option>
        </select>
      </div>
      <div>
        <div>Transport</div>
        <select name='housing'>
          <option value='750'>New Car ($700)</option>
          <option value='325'>Used Car ($325)</option>
          <option value='150'>Public Transportation ($150)</option>
        </select>
      </div>
      <div>
        <div>Food</div>
        <select name='housing'>
          <option value='1000'>Restaurants ($1000)</option>
          <option value='750'>Fast Food ($750)</option>
          <option value='500'>Groceries ($500)</option>
        </select>
      </div>
      <div>
        <div>Entertainment</div>
        <select name='housing'>
          <option value='1200'>Live Alone ($1200)</option>
          <option value='600'>Roommate ($600)</option>
          <option value='250'>Live with Relatives ($250)</option>
        </select>
      </div>
      <div>
        <div>Pets</div>
        <select name='housing'>
          <option value='1200'>2 Pets ($500)</option>
          <option value='600'>1 Pet ($250)</option>
          <option value='250'>No Pets ($0)</option>
        </select>
      </div>
      <div>
        <div>Kids</div>
        <select name='housing'>
          <option value='1200'>Live Alone ($1200)</option>
          <option value='600'>Roommate ($600)</option>
          <option value='250'>Live with Relatives ($250)</option>
        </select>
      </div>
      <div>
        <div>Other</div>
        <div>Insurance</div>
        <div>Internet</div>
        <div>Phone</div>
        <div>Student Loan Payment</div>
        <div>Emergency Savings</div>
        <div>Retirement Savings</div>
        <div>Home Savings</div>
        <div>Other</div>
      </div>

      <div>
        <div>Total Monthly Income</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div>
        <div>Total Monthly Expenses</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div>Net Income (Loss)</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
