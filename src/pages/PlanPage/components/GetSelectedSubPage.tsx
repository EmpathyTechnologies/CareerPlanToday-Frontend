
import Colleges from '../../CollegesPage/CollegesPage';
import Calculator from '../../CalculatorPage/CalculatorPage';
import Budget from '../../BudgetPage/BudgetPage';
import College from '../../CollegePage/CollegePage';
import Career from '../../CareerPage/CareerPage';
import Careers from '../../CareersPage/CareersPage';
import Retire from '../../InvestPage/InvestPage'

export const GetSelectedSubPage = (selectedSubpage:any,selectedCareer:any, selectedCollege:any, setSelectedCareer:any, setSelectedCollege :any) => {
    switch (selectedSubpage) {
      case "Explore Careers":
        switch (selectedCareer) {
          case -1:
            return <Careers setSelectedCareer={setSelectedCareer} />;
          default:
            return <Career id={selectedCareer} setSelectedCareer={setSelectedCareer} />;
        }
      case "Compare Colleges":
        switch (selectedCollege) {
          case -1:
            return <Colleges setSelectedCollege={setSelectedCollege} />;
          default:
            return <College id={selectedCollege} setSelectedCollege={setSelectedCollege} />;
        }

      case "How to Fund College":
        return <Calculator />;
      case "Choose Your Lifestyle":
        return <Budget />;
      case "See How You Can Invest":
        return <Retire />;
      default:
        return "Unknown Category";
    }
  };





