
import Colleges from './Colleges/Colleges';
import Calculator from './Calculator/HowToFundCollege';
import Budget from './Budget/Budget';
import College from './College/College';
import Career from './Career/Career';
import Careers from './Careers/Careers';
import Retire from './Invest/Invest'

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





