
import Colleges from './Main/Colleges/Colleges';
import Calculator from './Main/Calculator/Calculator';
import Budget from './Main/Budget/Budget';
import College from './Main/College/College';
import Career from './Main/Career/Career';
import Careers from './Main/Careers/Careers';
import Retire from './Main/Invest/Invest'

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





