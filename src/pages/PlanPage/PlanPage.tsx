import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useMediaQuery, CssBaseline, Box } from "@mui/material";
import Navigator from "../../components/Navigation";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Theme from "../../assets/styles/themes/ThemeProvider";
import Careers from "../CareersPage/CareersPage";
import Colleges from "../CollegesPage/CollegesPage";
import Copyright from "./Copyright";

export default function Plan() {
  const [selectedSubpage, setSelectedSubpage] = useState("Explore Careers");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmUp = useMediaQuery(Theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 256;

  const getSelectedSubpage = () => {
    switch (selectedSubpage) {
      case "Explore Careers":
        return <Careers />;
      case "Compare Colleges":
        return <Colleges />;
      case "How to Fund College":
        return "How to Fund College";
      case "Choose Your Lifestyle":
        return "Choose Your Lifestyle";
      case "See How You Can Invest":
        return "See How You Can Invest";
      default:
        return "Unknown Category";
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
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
          <Box
            component="main"
            sx={{ flex: 1, py: 6, px: 4, bgcolor: "#eaeff1" }}
          >
            {getSelectedSubpage()}
          </Box>

          <Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}>
            <Copyright />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
