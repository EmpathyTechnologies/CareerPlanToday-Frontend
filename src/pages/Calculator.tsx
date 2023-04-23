export default function Calculator() {
  let displayFlex = { display: "flex", justifyContent: "space-between" };

  return (
    <div>
      <div style={{ width: "1000px", outline: "1px solid black", margin: "25px", background: "lightgrey" }}>
        <div style={{ fontWeight: "bold" }}>COMPARE CAREERS</div>
        <div style={displayFlex}>
          <div>Salary</div>
          <div>Years Worked</div>
          <div>Lifetime Income</div>
        </div>
        <div style={displayFlex}>
          <div>Your Career with College</div>
          <input type='text' />
          <input type='text' />
        </div>
        <div style={displayFlex}>
          <div>Your Career without College</div>
          <input type='text' />
          <input type='text' />
        </div>
        <div style={displayFlex}>
          <div>Extra Income with College</div>
          <div>Amount</div>
        </div>
      </div>

      <div style={{ width: "1000px", outline: "1px solid black", margin: "25px", background: "lightgrey" }}>
        <div style={{ fontWeight: "bold" }}>COMPARE COLLEGES</div>
        <div style={displayFlex}>
          <div>State of Residence</div>
          <input type='text' />
        </div>
        <div style={displayFlex}>
          <div></div>
          <div>Freshman</div>
          <div>Sophomore</div>
          <div>Junior</div>
          <div>Senior</div>
        </div>
        <div style={displayFlex}>
          <div>Your School</div>
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <input type='text' />
        </div>
        <div style={displayFlex}>
          <div>Scholarship</div>
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <input type='text' />
        </div>
        <div style={displayFlex}>
          <div>Total College Cost</div>
          <div></div>
          <div></div>
          <div></div>
          <input type='text' />
        </div>
      </div>

      <div style={{ width: "1000px", outline: "1px solid black", margin: "25px", background: "lightgrey" }}>
        <div style={{ fontWeight: "bold" }}>FUNDING PLAN</div>
        <div style={displayFlex}>
          <div></div>
          <div>Freshman</div>
          <div>Sophomore</div>
          <div>Junior</div>
          <div>Senior</div>
        </div>
        <div style={displayFlex}>
          <div>Savings</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div style={displayFlex}>
          <div>Job Hourly Pay</div>
          <input type='text' />
          <div></div>
          <div></div>
          <div></div>
        </div>{" "}
        <div style={displayFlex}>
          <div>Hours Per Week</div>
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <input type='text' />
        </div>
        <div style={displayFlex}>
          <div>Weeks per year</div>
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <input type='text' />
        </div>
        <div style={displayFlex}>
          <div>Income</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div style={displayFlex}>
          <div>Summer Job, Other</div>
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <input type='text' />
        </div>
        <div style={displayFlex}>
          <div style={{ fontWeight: "bold" }}>Subtotal</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div style={displayFlex}>
          <div>Federal Student Loan</div>
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <input type='text' />
        </div>
        <div style={displayFlex}>
          <div>Private Student Loan</div>
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <input type='text' />
        </div>
        <div style={displayFlex}>
          <div style={{ fontWeight: "bold" }}>Total Student Loan</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div style={displayFlex}>
          <div></div>
          <div>Avg. Loan Rate</div>
          <div>Term (months)</div>
          <div>Monthly Payment</div>
          <div>Total Interest</div>
        </div>
        <div style={displayFlex}>
          <div>Student Loan Interest</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div style={{ width: "1000px", outline: "1px solid black", margin: "25px", background: "lightgrey" }}>
        <div style={{ fontWeight: "bold" }}>RESULTS</div>
        <div style={displayFlex}>
          <div>Extra Income with College</div>
          <div></div>
        </div>
        <div style={displayFlex}>
          <div>Total College Cost</div>
          <div></div>
        </div>

        <div style={displayFlex}>
          <div>Total Student Loan Interest Cost</div>
          <div></div>
        </div>

        <div style={displayFlex}>
          <div style={{ fontWeight: "bold" }}>Financial Value of College</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
