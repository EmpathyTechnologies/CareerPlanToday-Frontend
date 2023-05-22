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

  useEffect(() => {
    setCareerWithCollege((prevState) => ({ ...prevState, lifetimeIncome: prevState.salary * prevState.years }));
  }, [careerWithCollege.salary, careerWithCollege.years]);

  useEffect(() => {
    setCareerWithOutCollege((prevState) => ({ ...prevState, lifetimeIncome: prevState.salary * prevState.years }));
  }, [careerWithOutCollege.salary, careerWithOutCollege.years]);

  useEffect(() => {
    setExtraIncomeWithCollege(careerWithCollege.lifetimeIncome - careerWithOutCollege.lifetimeIncome);
  }, [careerWithCollege.lifetimeIncome, careerWithOutCollege.lifetimeIncome]);

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

  useEffect(() => {
    setFinancialValueOfCollege(extraIncomeWithCollege - collegeTotalCost);
  }, [extraIncomeWithCollege, collegeTotalCost]);

  return (
    <div>
      <div>
        <CalculatorNavbar />
      </div>
      <div>
        <h1>College Value Calculator</h1>
        {/* EXPLORE CAREERS */}
        <table>
          <thead>
            <tr>
              <td colSpan={5}>Explore Careers</td>
            </tr>
            <tr>
              <th></th>
              <th></th>

              <th>Salary</th>
              <th>Years to Work</th>
              <th>Lifetime Income</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Career with College</td>
              <td></td>
              <td>
                <input
                  type='number'
                  value={careerWithCollege.salary}
                  onChange={(e) => setCareerWithCollege({ ...careerWithCollege, salary: Number(e.target.value) })}
                />
              </td>
              <td>
                <input
                  type='number'
                  value={careerWithCollege.years}
                  onChange={(e) => setCareerWithCollege({ ...careerWithCollege, years: Number(e.target.value) })}
                />
              </td>
              <td>{formatCurrency(careerWithCollege.lifetimeIncome)}</td>
            </tr>

            <tr>
              <td>Career without College</td>

              <td></td>

              <td>
                <input
                  type='number'
                  value={careerWithOutCollege.salary}
                  onChange={(e) => setCareerWithOutCollege({ ...careerWithOutCollege, salary: Number(e.target.value) })}
                />
              </td>

              <td>
                <input
                  type='number'
                  value={careerWithOutCollege.years}
                  onChange={(e) => setCareerWithOutCollege({ ...careerWithOutCollege, years: Number(e.target.value) })}
                />
              </td>

              <td>{formatCurrency(careerWithOutCollege.lifetimeIncome)}</td>
            </tr>

            <tr>
              <td>Extra Income with College</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{formatCurrency(extraIncomeWithCollege)}</td>
            </tr>
          </tbody>
        </table>

        {/* COMPARE COLLEGES */}
        <table>
          <thead>
            <tr>
              <td colSpan={5}>Compare Colleges</td>
            </tr>
            <tr>
              <th></th>
              <th>Freshman</th>
              <th>Sophomore</th>
              <th>Junior</th>
              <th>Senior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>College</td>
              <td>
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
              <td>
                <CalculatorSelectCollege colleges={colleges} setCollegeName={setSophomoreCollege} setCollegeCost={setSophomoreTuition} />
              </td>
              <td>
                <CalculatorSelectCollege colleges={colleges} setCollegeName={setJuniorCollege} setCollegeCost={setJuniorTuition} />
              </td>
              <td>
                <CalculatorSelectCollege colleges={colleges} setCollegeName={setSeniorCollege} setCollegeCost={setSeniorTuition} />
              </td>
            </tr>

            <tr>
              <td>Tuition</td>
              <td>{freshmanTuition}</td>
              <td>{sophomoreTuition}</td>
              <td>{juniorTuition}</td>
              <td>{seniorTuition}</td>
            </tr>
            <tr>
              <td>Housing</td>
              <td>Freshman Housing</td>
              <td>Sophomore Housing</td>
              <td>Junior Housing</td>
              <td>Senior Housing</td>
            </tr>

            <tr>
              <td>Books and supplies</td>
              <td>Freshman Books and Supplies</td>
              <td>Sophomore Books and Supplies</td>
              <td>Junior Books and Supplies</td>
              <td>Senior Books and Supplies</td>
            </tr>

            <tr>
              <td>Other</td>
              <td>Freshman Other</td>
              <td>Sophomore Other</td>
              <td>Junior Other</td>
              <td>Senior Other</td>
            </tr>
            <tr>
              <td>Scholarship</td>
              <td>
                <input
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
              <td>
                <input
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
              <td>
                <input
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
              <td>
                <input
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
              <td>Subtotal Cost Per Year</td>
              <td>{freshmanTotalCost}</td>
              <td>{sophomoreTotalCost}</td>
              <td>{juniorTotalCost}</td>
              <td>{seniorTotalCost}</td>
            </tr>

            <tr>
              <td>Total College Cost</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{collegeTotalCost}</td>
            </tr>

            {collegeTotalCost}
          </tbody>
        </table>

        {/* FUNDING PLAN */}
        <table>
          <thead>
            <tr>
              <td colSpan={5}>Funding Plan</td>
            </tr>
            <tr>
              <th></th>
              <th>Freshman</th>
              <th>Sophomore</th>
              <th>Junior</th>
              <th>Senior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Savings</td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
            </tr>

            <tr>
              <td>Job Hourly Pay</td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
            </tr>

            <tr>
              <td>Hours Per Week</td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
            </tr>

            <tr>
              <td>Weeks Per School Year</td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
            </tr>

            <tr>
              <td>Income</td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
            </tr>
            <tr>
              <td>Summer Job / Other</td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input type='number' />
              </td>
            </tr>
            <tr>
              <td>Federal Student Loans</td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
            </tr>
            <tr>
              <td>Private Student Loans</td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
              <td>
                <input type='number' />
              </td>
            </tr>
            <tr>
              <td>Total Student Loans</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input type='number' />
              </td>
            </tr>
          </tbody>
        </table>

        {/* RESULTS */}
        <table>
          <thead></thead>
          <tbody>
            <td colSpan={5}>Financial Value of College</td>
            <tr>
              <td>Extra Income with College</td>
              <td>{formatCurrency(extraIncomeWithCollege)}</td>
            </tr>

            <tr>
              <td>Total College Cost</td>
              <td>{formatCurrency(collegeTotalCost)}</td>
            </tr>

            <tr>
              <td>Total Student Loan Interest</td>
              <td>###</td>
            </tr>

            <tr>
              <td>Financial Value of College</td>
              <td>
                {financialValueOfCollege < 0 ? (
                  <span>{formatCurrency(financialValueOfCollege)}</span>
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
