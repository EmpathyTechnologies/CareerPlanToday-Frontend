import { useState, useEffect } from "react";
import CalculatorNavbar from "../features/calculator/CalculatorNavbar";
import CalculatorSelectCollege from "../features/calculator/CalculatorSelectCollege";
import colleges from "../data/colleges.json";

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
      <div className='calculator-position'>
        <CalculatorNavbar />
      </div>
      <div className='calculator-container'>
        <h1>College Value Calculator</h1>
        {/* EXPLORE CAREERS */}
        <table>
          <thead>
            <tr className='calculator-explore-careers-table-row'>
              <td colSpan={5} className='calculator-table-row-header'>
                Explore Careers
              </td>
            </tr>
            <tr className='background-swan'>
              <th className='calculator-width'></th>
              <th className='calculator-width'></th>

              <th className='calculator-width-20-percent-textalign-center'>Salary</th>
              <th className='calculator-width-20-percent-textalign-center'>Years to Work</th>
              <th className='calculator-width-20-percent-textalign-center'>Lifetime Income</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='calculator-width'>Career with College</td>
              <td className='calculator-width'></td>
              <td className='calculator-width'>
                <input
                  className='calculator-width-center'
                  type='number'
                  value={careerWithCollege.salary}
                  onChange={(e) => setCareerWithCollege({ ...careerWithCollege, salary: Number(e.target.value) })}
                />
              </td>
              <td className='calculator-width'>
                <input
                  className='calculator-width-center'
                  type='number'
                  value={careerWithCollege.years}
                  onChange={(e) => setCareerWithCollege({ ...careerWithCollege, years: Number(e.target.value) })}
                />
              </td>
              <td className='calculator-width-20-percent-textalign-center'>{formatCurrency(careerWithCollege.lifetimeIncome)}</td>
            </tr>

            <tr>
              <td className='calculator-width'>Career without College</td>

              <td className='calculator-width'></td>

              <td className='calculator-width'>
                <input
                  className='calculator-width-center'
                  type='number'
                  value={careerWithOutCollege.salary}
                  onChange={(e) => setCareerWithOutCollege({ ...careerWithOutCollege, salary: Number(e.target.value) })}
                />
              </td>

              <td className='calculator-width'>
                <input
                  className='calculator-width-center'
                  type='number'
                  value={careerWithOutCollege.years}
                  onChange={(e) => setCareerWithOutCollege({ ...careerWithOutCollege, years: Number(e.target.value) })}
                />
              </td>

              <td className='calculator-width-20-percent-textalign-center'>{formatCurrency(careerWithOutCollege.lifetimeIncome)}</td>
            </tr>

            <tr>
              <td className='calculator-width'>Extra Income with College</td>
              <td className='calculator-width'></td>
              <td className='calculator-width'></td>
              <td className='calculator-width'></td>
              <td className='calculator-width-20-percent-textalign-center'>{formatCurrency(extraIncomeWithCollege)}</td>
            </tr>
          </tbody>
        </table>

        {/* COMPARE COLLEGES */}
        <table className='calculator-margin-top'>
          <thead>
            <tr className='calculator-explore-careers-table-row'>
              <td colSpan={5} className='calculator-table-row-header'>
                Compare Colleges
              </td>
            </tr>
            <tr className='background-swan'>
              <th className='calculator-width'></th>
              <th className='calculator-width-20-percent-textalign-center'>Freshman</th>
              <th className='calculator-width-20-percent-textalign-center'>Sophomore</th>
              <th className='calculator-width-20-percent-textalign-center'>Junior</th>
              <th className='calculator-width-20-percent-textalign-center'>Senior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='calculator-width'>College</td>
              <td className='calculator-width'>
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
              <td className='calculator-width'>
                <CalculatorSelectCollege colleges={colleges} setCollegeName={setSophomoreCollege} setCollegeCost={setSophomoreTuition} />
              </td>
              <td className='calculator-width'>
                <CalculatorSelectCollege colleges={colleges} setCollegeName={setJuniorCollege} setCollegeCost={setJuniorTuition} />
              </td>
              <td className='calculator-width'>
                <CalculatorSelectCollege colleges={colleges} setCollegeName={setSeniorCollege} setCollegeCost={setSeniorTuition} />
              </td>
            </tr>

            <tr>
              <td className='calculator-width'>Tuition</td>
              <td className='calculator-width'>{freshmanTuition}</td>
              <td className='calculator-width'>{sophomoreTuition}</td>
              <td className='calculator-width'>{juniorTuition}</td>
              <td className='calculator-width'>{seniorTuition}</td>
            </tr>
            <tr>
              <td className='calculator-width'>Housing</td>
              <td className='calculator-width'>Freshman Housing</td>
              <td className='calculator-width'>Sophomore Housing</td>
              <td className='calculator-width'>Junior Housing</td>
              <td className='calculator-width'>Senior Housing</td>
            </tr>

            <tr>
              <td className='calculator-width'>Books and supplies</td>
              <td className='calculator-width'>Freshman Books and Supplies</td>
              <td className='calculator-width'>Sophomore Books and Supplies</td>
              <td className='calculator-width'>Junior Books and Supplies</td>
              <td className='calculator-width'>Senior Books and Supplies</td>
            </tr>

            <tr>
              <td className='calculator-width'>Other</td>
              <td className='calculator-width'>Freshman Other</td>
              <td className='calculator-width'>Sophomore Other</td>
              <td className='calculator-width'>Junior Other</td>
              <td className='calculator-width'>Senior Other</td>
            </tr>
            <tr>
              <td className='calculator-width'>Scholarship</td>
              <td className='calculator-width'>
                <input
                  className='calculator-width-center'
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
              <td className='calculator-width'>
                <input
                  className='calculator-width-center'
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
              <td className='calculator-width'>
                <input
                  className='calculator-width-center'
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
              <td className='calculator-width'>
                <input
                  className='calculator-width-center'
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
              <td className='calculator-width'>Subtotal Cost Per Year</td>
              <td className='calculator-width'>{freshmanTotalCost}</td>
              <td className='calculator-width'>{sophomoreTotalCost}</td>
              <td className='calculator-width'>{juniorTotalCost}</td>
              <td className='calculator-width'>{seniorTotalCost}</td>
            </tr>

            <tr>
              <td className='calculator-width'>Total College Cost</td>
              <td className='calculator-width'></td>
              <td className='calculator-width'></td>
              <td className='calculator-width'></td>
              <td className='calculator-width'>{collegeTotalCost}</td>
            </tr>

            {collegeTotalCost}
          </tbody>
        </table>

        {/* FUNDING PLAN */}
        <table className='calculator-margin-top'>
          <thead>
            <tr className='calculator-explore-careers-table-row'>
              <td colSpan={5} className='calculator-table-row-header'>
                Funding Plan
              </td>
            </tr>
            <tr className='background-swan'>
              <th className='calculator-width'></th>
              <th className='calculator-width-20-percent-textalign-center'>Freshman</th>
              <th className='calculator-width-20-percent-textalign-center'>Sophomore</th>
              <th className='calculator-width-20-percent-textalign-center'>Junior</th>
              <th className='calculator-width-20-percent-textalign-center'>Senior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='calculator-width'>Savings</td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
            </tr>

            <tr>
              <td className='calculator-width'>Job Hourly Pay</td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
            </tr>

            <tr>
              <td className='calculator-width'>Hours Per Week</td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
            </tr>

            <tr>
              <td className='calculator-width'>Weeks Per School Year</td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
            </tr>

            <tr>
              <td className='calculator-width'>Income</td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
            </tr>
            <tr>
              <td className='calculator-width'>Summer Job / Other</td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
            </tr>
            <tr>
              <td className='calculator-width'>Subtotal</td>
              <td className='calculator-width'></td>
              <td className='calculator-width'></td>
              <td className='calculator-width'></td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
            </tr>
            <tr>
              <td className='calculator-width'>Federal Student Loans</td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
            </tr>
            <tr>
              <td className='calculator-width'>Private Student Loans</td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
            </tr>
            <tr>
              <td className='calculator-width'>Total Student Loans</td>
              <td className='calculator-width'></td>
              <td className='calculator-width'></td>
              <td className='calculator-width'></td>
              <td className='calculator-width'>
                <input className='calculator-width-center' type='number' />
              </td>
            </tr>
          </tbody>
        </table>

        {/* RESULTS */}
        <table className='calculator-margin-top'>
          <thead></thead>
          <tbody>
            <td colSpan={5} className='calculator-table-body'>
              Financial Value of College
            </td>
            <tr>
              <td className='calculator-width-50-percent'>Extra Income with College</td>
              <td className='calculator-width-50-percent'>{formatCurrency(extraIncomeWithCollege)}</td>
            </tr>

            <tr>
              <td className='calculator-width-50-percent'>Total College Cost</td>
              <td className='calculator-width-50-percent'>{formatCurrency(collegeTotalCost)}</td>
            </tr>

            <tr>
              <td className='calculator-width-50-percent'>Total Student Loan Interest</td>
              <td className='calculator-width-50-percent'>###</td>
            </tr>

            <tr>
              <td className='calculator-financial-value-of-college'>Financial Value of College</td>
              <td className='calculator-width-50-percent-fontsize-32px'>
                {financialValueOfCollege < 0 ? (
                  <span className='calculator-color-red'>{formatCurrency(financialValueOfCollege)}</span>
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
