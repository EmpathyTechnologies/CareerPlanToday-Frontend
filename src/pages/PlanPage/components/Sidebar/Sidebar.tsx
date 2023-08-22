import { useMediaQuery, Box } from "@mui/material";
import { useState } from "react";

import Navigator from "./components/Navigation";
import Theme from "../../../../assets/styles/themes/ThemeProvider";

function Sidebar({
  handleDrawerToggle,
  selectedSubpage,
  setSelectedSubpage,
}: any) {
  const drawerWidth = 256;
  const isSmUp = useMediaQuery(Theme.breakpoints.up("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
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
  );
}

export default Sidebar;
