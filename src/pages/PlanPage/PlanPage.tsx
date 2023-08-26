import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import Footer from "./components/Footer/Footer";
import Header from "../../components/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Theme from "../../assets/styles/themes/ThemeProvider";

export default function Plan({ selectedSubpage, setSelectedSubpage }: any) {
  const [selectedCareer, setSelectedCareer] = useState(-1);
  const [selectedCollege, setSelectedCollege] = useState(-1);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />

        <Sidebar handleDrawerToggle={handleDrawerToggle} selectedSubpage={selectedSubpage} setSelectedSubpage={setSelectedSubpage} />

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header onDrawerToggle={handleDrawerToggle} title={selectedSubpage} />
          <Main
            selectedSubpage={selectedSubpage}
            selectedCareer={selectedCareer}
            selectedCollege={selectedCollege}
            setSelectedCareer={setSelectedCareer}
            setSelectedCollege={setSelectedCollege}
          />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
