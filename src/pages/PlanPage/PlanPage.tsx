import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { useState } from "react";

import Header from "../../components/Header";
import Theme from "../../assets/styles/themes/ThemeProvider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Main from "./components/Main";

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

        <Sidebar
          handleDrawerToggle={handleDrawerToggle}
          selectedSubpage={selectedSubpage}
          setSelectedSubpage={setSelectedSubpage}
        />

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
