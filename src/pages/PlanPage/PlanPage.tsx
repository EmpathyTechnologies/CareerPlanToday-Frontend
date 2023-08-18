import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useMediaQuery, CssBaseline, Box } from "@mui/material";
import Navigator from "../../components/Navigation";
import Header from "../../components/Header";
import Theme from "../../assets/styles/themes/ThemeProvider";
import Career from "../CareerPage/CareerPage";
import Careers from "../CareersPage/CareersPage";
import College from "../CollegePage/CollegePage";
import Colleges from "../CollegesPage/CollegesPage";
import Copyright from "./Copyright";

import Calculator from "../CalculatorPage/CalculatorPage";
import Budget from "../BudgetPage/BudgetPage";
import Retire from "../InvestPage/InvestPage";

export default function Plan({selectedSubpage, setSelectedSubpage}:any) {
 
  const [selectedCareer, setSelectedCareer] = useState(-1);
  const [selectedCollege, setSelectedCollege] = useState(-1);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmUp = useMediaQuery(Theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 256;

  const getSelectedSubpage = () => {
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

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />

        <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant='temporary'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              selectedSubpage={selectedSubpage}
              setSelectedSubpage={setSelectedSubpage}
            />
          )}
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: "block", xs: "none" } }}
            selectedSubpage={selectedSubpage}
            setSelectedSubpage={setSelectedSubpage}
          />
        </Box>

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header onDrawerToggle={handleDrawerToggle} title={selectedSubpage} />
          <Box component='main' sx={{ flex: 1, py: 6, px: 4, bgcolor: "#eaeff1" }}>
            {getSelectedSubpage()}
          </Box>

          <Box component='footer' sx={{ p: 2, bgcolor: "#eaeff1" }}>
            <Copyright />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
