import { useState, useEffect } from "react";
import CalculatorNavbar from "../features/calculator/CalculatorNavbar";
import CalculatorSelectCollege from "../features/calculator/CalculatorSelectCollege";
import colleges from "../data/colleges.json";
import { formatCurrency } from "../utilities/formatCurrency";

export default function Calculator() {
  const [careerWithCollege, setCareerWithCollege] = useState({ salary: 50000, years: 40, lifetimeIncome: 2000000 });
  const [careerWithOutCollege, setCareerWithOutCollege] = useState({ salary: 35000, years: 44, lifetimeIncome: 1400000 });
  const [extraIncomeWithCollege, setExtraIncomeWithCollege] = useState(0);

  const [freshmanCollege, setFreshmanCollege] = useState("");
  const [freshmanTuition, setFreshmanTuition] = useState(0);
  const [freshmanHousing, setFreshmanHousing] = useState(0);
  const [freshmanBooksAndSupplies, setFreshmanBooksAndSupplies] = useState(0);
  const [freshmanOther, setFreshmanOther] = useState(0);
  const [freshmanScholarship, setFreshmanScholarship] = useState(0);
  const [freshmanTotalCost, setFreshmanTotalCost] = useState(0);

  const [sophomoreCollege, setSophomoreCollege] = useState("");
  const [sophomoreTuition, setSophomoreTuition] = useState(0);
  const [sophomoreHousing, setSophomoreHousing] = useState(0);
  const [sophomoreBooksAndSupplies, setSophomoreBooksAndSupplies] = useState(0);
  const [sophomoreOther, setSophomoreOther] = useState(0);
  const [sophomoreScholarship, setSophomoreScholarship] = useState(0);
  const [sophomoreTotalCost, setSophomoreTotalCost] = useState(0);

  const [juniorCollege, setJuniorCollege] = useState("");
  const [juniorTuition, setJuniorTuition] = useState(0);
  const [juniorHousing, setJuniorHousing] = useState(0);
  const [juniorBooksAndSupplies, setJuniorBooksAndSupplies] = useState(0);
  const [juniorOther, setJuniorOther] = useState(0);
  const [juniorScholarship, setJuniorScholarship] = useState(0);
  const [juniorTotalCost, setJuniorTotalCost] = useState(0);

  const [seniorCollege, setSeniorCollege] = useState("");
  const [seniorTuition, setSeniorTuition] = useState(0);
  const [seniorHousing, setSeniorHousing] = useState(0);
  const [seniorBooksAndSupplies, setSeniorBooksAndSupplies] = useState(0);
  const [seniorOther, setSeniorOther] = useState(0);
  const [seniorScholarship, setSeniorScholarship] = useState(0);
  const [seniorTotalCost, setSeniorTotalCost] = useState(0);

  const [collegeTotalCost, setCollegeTotalCost] = useState(0);

  const [financialValueOfCollege, setFinancialValueOfCollege] = useState(0);

  // career
  useEffect(() => {
    setCareerWithCollege((prevState) => ({ ...prevState, lifetimeIncome: prevState.salary * prevState.years }));
  }, [careerWithCollege.salary, careerWithCollege.years]);

  useEffect(() => {
    setCareerWithOutCollege((prevState) => ({ ...prevState, lifetimeIncome: prevState.salary * prevState.years }));
  }, [careerWithOutCollege.salary, careerWithOutCollege.years]);

  useEffect(() => {
    setExtraIncomeWithCollege(careerWithCollege.lifetimeIncome - careerWithOutCollege.lifetimeIncome);
  }, [careerWithCollege.lifetimeIncome, careerWithOutCollege.lifetimeIncome]);

  // college

  // TODO:  update the CalculatorCustomDropDown component so that if freshman college is updated, then that component is updated too
  useEffect(() => {
    setSophomoreCollege(freshmanCollege);
    setJuniorCollege(freshmanCollege);
    setSeniorCollege(freshmanCollege);
  }, [freshmanCollege]);

  useEffect(() => {
    setFreshmanTotalCost(freshmanTuition + freshmanHousing + freshmanBooksAndSupplies + freshmanOther - freshmanScholarship);
  }, [freshmanTuition, freshmanHousing, freshmanBooksAndSupplies, freshmanOther, freshmanScholarship]);

  useEffect(() => {
    setSophomoreTotalCost(sophomoreTuition + sophomoreHousing + sophomoreBooksAndSupplies + sophomoreOther - sophomoreScholarship);
  }, [sophomoreTuition, sophomoreHousing, sophomoreBooksAndSupplies, sophomoreOther, sophomoreScholarship]);

  useEffect(() => {
    setJuniorTotalCost(juniorTuition + juniorHousing + juniorBooksAndSupplies + juniorOther - juniorScholarship);
  }, [juniorTuition, juniorHousing, juniorBooksAndSupplies, juniorOther, juniorScholarship]);

  useEffect(() => {
    setSeniorTotalCost(seniorTuition + seniorHousing + seniorBooksAndSupplies + seniorOther - seniorScholarship);
  }, [seniorTuition, seniorHousing, seniorBooksAndSupplies, seniorOther, seniorScholarship]);

  useEffect(() => {
    setCollegeTotalCost(freshmanTotalCost + sophomoreTotalCost + juniorTotalCost + seniorTotalCost);
  }, [freshmanTotalCost, sophomoreTotalCost, juniorTotalCost, seniorTotalCost]);

  // financial value of college
  useEffect(() => {
    setFinancialValueOfCollege(extraIncomeWithCollege - collegeTotalCost);
  }, [extraIncomeWithCollege, collegeTotalCost]);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 });
  };

  return (
    <div className='navbar-spacer footer-spacer'>
      <div style={{ position: "fixed" }}>
        <CalculatorNavbar />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignContent: "center", paddingTop: "40px", margin: "40px" }}>
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
                <CalculatorSelectCollege
                  colleges={colleges}
                  setCollegeName={setFreshmanCollege}
                  setCollegeCost={setFreshmanTuition}
                  freshmenYear={true}
                  setSophomoreCollege={setSophomoreCollege}
                  setJuniorCollege={setJuniorCollege}
                  setSeniorCollege={setSeniorCollege}
                  setSophomoreTuition={setSophomoreTuition}
                  setJuniorTuition={setJuniorTuition}
                  setSeniorTuition={setSeniorTuition}
                />
              </td>
              <td style={{ width: "20%" }}>
                <CalculatorSelectCollege colleges={colleges} setCollegeName={setSophomoreCollege} setCollegeCost={setSophomoreTuition} />
              </td>
              <td style={{ width: "20%" }}>
                <CalculatorSelectCollege colleges={colleges} setCollegeName={setJuniorCollege} setCollegeCost={setJuniorTuition} />
              </td>
              <td style={{ width: "20%" }}>
                <CalculatorSelectCollege colleges={colleges} setCollegeName={setSeniorCollege} setCollegeCost={setSeniorTuition} />
              </td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Tuition</td>
              <td style={{ width: "20%" }}>{freshmanTuition}</td>
              <td style={{ width: "20%" }}>{sophomoreTuition}</td>
              <td style={{ width: "20%" }}>{juniorTuition}</td>
              <td style={{ width: "20%" }}>{seniorTuition}</td>
            </tr>
            <tr>
              <td style={{ width: "20%" }}>Housing</td>
              <td style={{ width: "20%" }}>Freshman Housing</td>
              <td style={{ width: "20%" }}>Sophomore Housing</td>
              <td style={{ width: "20%" }}>Junior Housing</td>
              <td style={{ width: "20%" }}>Senior Housing</td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Books and supplies</td>
              <td style={{ width: "20%" }}>Freshman Books and Supplies</td>
              <td style={{ width: "20%" }}>Sophomore Books and Supplies</td>
              <td style={{ width: "20%" }}>Junior Books and Supplies</td>
              <td style={{ width: "20%" }}>Senior Books and Supplies</td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Other</td>
              <td style={{ width: "20%" }}>Freshman Other</td>
              <td style={{ width: "20%" }}>Sophomore Other</td>
              <td style={{ width: "20%" }}>Junior Other</td>
              <td style={{ width: "20%" }}>Senior Other</td>
            </tr>
            <tr>
              <td style={{ width: "20%" }}>Scholarship</td>
              <td style={{ width: "20%" }}>
                <input
                  style={{ width: "100%", textAlign: "center" }}
                  type='number'
                  value={freshmanScholarship}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = parseInt(e.target.value);
                    if (value < 0) {
                      setFreshmanScholarship(0);
                    } else {
                      setFreshmanScholarship(value);
                    }
                  }}
                />
              </td>
              <td style={{ width: "20%" }}>
                <input
                  style={{ width: "100%", textAlign: "center" }}
                  type='number'
                  value={sophomoreScholarship}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = parseInt(e.target.value);
                    if (value < 0) {
                      setSophomoreScholarship(0);
                    } else {
                      setSophomoreScholarship(value);
                    }
                  }}
                />
              </td>
              <td style={{ width: "20%" }}>
                <input
                  style={{ width: "100%", textAlign: "center" }}
                  type='number'
                  value={juniorScholarship}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = parseInt(e.target.value);
                    if (value < 0) {
                      setJuniorScholarship(0);
                    } else {
                      setJuniorScholarship(value);
                    }
                  }}
                />
              </td>
              <td style={{ width: "20%" }}>
                <input
                  style={{ width: "100%", textAlign: "center" }}
                  type='number'
                  value={seniorScholarship}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = parseInt(e.target.value);
                    if (value < 0) {
                      setSeniorScholarship(0);
                    } else {
                      setSeniorScholarship(value);
                    }
                  }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ width: "20%" }}>Subtotal Cost Per Year</td>
              <td style={{ width: "20%" }}>{freshmanTotalCost}</td>
              <td style={{ width: "20%" }}>{sophomoreTotalCost}</td>
              <td style={{ width: "20%" }}>{juniorTotalCost}</td>
              <td style={{ width: "20%" }}>{seniorTotalCost}</td>
            </tr>

            <tr>
              <td style={{ width: "20%" }}>Total College Cost</td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%" }}></td>
              <td style={{ width: "20%" }}>{collegeTotalCost}</td>
            </tr>

            {collegeTotalCost}
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
        <table style={{ marginTop: "40px" }}>
          <thead></thead>
          <tbody>
            <td colSpan={5} style={{ background: "var(--Beak-Upper)", fontWeight: "bold", textAlign: "center", width: "100%" }}>
              Financial Value of College
            </td>
            <tr>
              <td style={{ width: "50%" }}>Extra Income with College</td>
              <td style={{ width: "50%" }}>{formatCurrency(extraIncomeWithCollege)}</td>
            </tr>

            <tr>
              <td style={{ width: "50%" }}>Total College Cost</td>
              <td style={{ width: "50%" }}>{formatCurrency(collegeTotalCost)}</td>
            </tr>

            <tr>
              <td style={{ width: "50%" }}>Total Student Loan Interest</td>
              <td style={{ width: "50%" }}>###</td>
            </tr>

            <tr>
              <td style={{ fontWeight: "bold", width: "50%", fontSize: "32px" }}>Financial Value of College</td>
              <td style={{ width: "50%", fontSize: "32px" }}>
                {financialValueOfCollege < 0 ? (
                  <span style={{ color: "red" }}>{formatCurrency(financialValueOfCollege)}</span>
                ) : (
                  <span> {formatCurrency(financialValueOfCollege)}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
