import { useState, useEffect } from "react";
import CalculatorNavbar from "../features/calculator/CalculatorNavbar";
export default function Calculator() {
  const [careerWithCollege, setCareerWithCollege] = useState({ salary: 50000, years: 40, lifetimeIncome: 2000000 });
  const [careerWithOutCollege, setCareerWithOutCollege] = useState({ salary: 35000, years: 40, lifetimeIncome: 1400000 });
  const [extraIncomeWithCollege, setExtraIncomeWithCollege] = useState(0);

  useEffect(() => {
    setCareerWithCollege((prevState) => ({ ...prevState, lifetimeIncome: prevState.salary * prevState.years }));
  }, [careerWithCollege.salary, careerWithCollege.years]);

  useEffect(() => {
    setCareerWithOutCollege((prevState) => ({ ...prevState, lifetimeIncome: prevState.salary * prevState.years }));
  }, [careerWithOutCollege.salary, careerWithOutCollege.years]);

  useEffect(() => {
    setExtraIncomeWithCollege(careerWithCollege.lifetimeIncome - careerWithOutCollege.lifetimeIncome);
  }, [careerWithCollege.lifetimeIncome, careerWithOutCollege.lifetimeIncome]);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 });
  };

  return (
    <div>
      <CalculatorNavbar />
      <div style={{ display: "flex", flexDirection: "column", alignContent: "center", margin: "40px" }}>
        <h1>College Value Calculator</h1>
        {/* EXPLORE CAREERS */}
        <table>
          <thead>
            <tr style={{ fontWeight: "bold", textAlign: "center", width: "100%", background: "var(--Humpback)", color: "white" }}>
              <td colSpan={5} style={{ background: "var(--Humpback)", color: "white" }}>
                Explore Careers
              </td>
            </tr>
            <tr style={{ background: "var(--Swan)" }}>
              <th style={{ width: "20%" }}></th>
              <th style={{ width: "20%" }}></th>
              <th style={{ width: "20%", textAlign: "center" }}>Salary</th>
              <th style={{ width: "20%", textAlign: "center" }}>Years to Work</th>
              <th style={{ width: "20%", textAlign: "center" }}>Lifetime Income</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "20%" }}>Career with College</td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%" }}>
                <input
                  style={{ width: "100%", textAlign: "center" }}
                  type='number'
                  value={careerWithCollege.salary}
                  onChange={(e) => setCareerWithCollege({ ...careerWithCollege, salary: Number(e.target.value) })}
                />
              </td>
              <td style={{ width: "20%" }}>
                <input
                  style={{ width: "100%", textAlign: "center" }}
                  type='number'
                  value={careerWithCollege.years}
                  onChange={(e) => setCareerWithCollege({ ...careerWithCollege, years: Number(e.target.value) })}
                />
              </td>
              <td style={{ width: "20%", textAlign: "center" }}>{formatCurrency(careerWithCollege.lifetimeIncome)}</td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Career without College</td>

              <td style={{ width: "20%" }}></td>

              <td style={{ width: "20%" }}>
                <input
                  style={{ width: "100%", textAlign: "center" }}
                  type='number'
                  value={careerWithOutCollege.salary}
                  onChange={(e) => setCareerWithOutCollege({ ...careerWithOutCollege, salary: Number(e.target.value) })}
                />
              </td>

              <td style={{ width: "20%" }}>
                <input
                  style={{ width: "100%", textAlign: "center" }}
                  type='number'
                  value={careerWithOutCollege.years}
                  onChange={(e) => setCareerWithOutCollege({ ...careerWithOutCollege, years: Number(e.target.value) })}
                />
              </td>

              <td style={{ width: "20%", textAlign: "center" }}>{formatCurrency(careerWithOutCollege.lifetimeIncome)}</td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Extra Income with College</td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%", textAlign: "center" }}>{formatCurrency(extraIncomeWithCollege)}</td>
            </tr>
          </tbody>
        </table>

        {/* COMPARE COLLEGES */}
        <table style={{ marginTop: "40px" }}>
          <thead>
            <tr style={{ fontWeight: "bold", textAlign: "center", width: "100%", background: "var(--Humpback)", color: "white" }}>
              <td colSpan={5} style={{ background: "var(--Humpback)", color: "white" }}>
                Compare Colleges
              </td>
            </tr>
            <tr style={{ background: "var(--Swan)" }}>
              <th style={{ width: "20%" }}></th>
              <th style={{ width: "20%", textAlign: "center" }}>Freshman</th>
              <th style={{ width: "20%", textAlign: "center" }}>Sophomore</th>
              <th style={{ width: "20%", textAlign: "center" }}>Junior</th>
              <th style={{ width: "20%", textAlign: "center" }}>Senior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "20%" }}>College</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Tuition</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Housing</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Books and supplies</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Other</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>
            <tr>
              <td style={{ width: "20%" }}>Scholarship</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>
          </tbody>
        </table>

        {/* FUNDING PLAN */}
        <table style={{ marginTop: "40px" }}>
          <thead>
            <tr style={{ fontWeight: "bold", textAlign: "center", width: "100%", background: "var(--Humpback)", color: "white" }}>
              <td colSpan={5} style={{ background: "var(--Humpback)", color: "white" }}>
                Funding Plan
              </td>
            </tr>
            <tr style={{ background: "var(--Swan)" }}>
              <th style={{ width: "20%" }}></th>
              <th style={{ width: "20%", textAlign: "center" }}>Freshman</th>
              <th style={{ width: "20%", textAlign: "center" }}>Sophomore</th>
              <th style={{ width: "20%", textAlign: "center" }}>Junior</th>
              <th style={{ width: "20%", textAlign: "center" }}>Senior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "20%" }}>Savings</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Job Hourly Pay</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Hours Per Week</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Weeks Per School Year</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Income</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>
            <tr>
              <td style={{ width: "20%" }}>Summer Job / Other</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>
            <tr>
              <td style={{ width: "20%" }}>Subtotal</td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>
            <tr>
              <td style={{ width: "20%" }}>Federal Student Loans</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>
            <tr>
              <td style={{ width: "20%" }}>Private Student Loans</td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>
            <tr>
              <td style={{ width: "20%" }}>Total Student Loans</td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%" }}>
                <input style={{ width: "100%", textAlign: "center" }} type='number' />
              </td>
            </tr>
          </tbody>
        </table>

        {/* RESULTS */}
        <table style={{ marginTop: "40px", width: "500px" }}>
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "50%" }}>Extra Income with College</td>
              <td style={{ width: "50%" }}>###</td>
            </tr>

            <tr>
              <td style={{ width: "50%" }}>Total College Cost</td>
              <td style={{ width: "50%" }}>###</td>
            </tr>

            <tr>
              <td style={{ width: "50%" }}>Total Student Loan Interest</td>
              <td style={{ width: "50%" }}>###</td>
            </tr>

            <tr>
              <td style={{ fontWeight: "bold", width: "50%" }}>Financial Value of College</td>
              <td style={{ width: "50%" }}>###</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
