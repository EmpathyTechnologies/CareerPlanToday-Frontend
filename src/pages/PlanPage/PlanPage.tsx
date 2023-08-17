import React, { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import {
  useMediaQuery,
  CssBaseline,
  Box,
  Typography,
  Link,
} from '@mui/material';
import Navigator from '../../components/Navigation';
import Content from '../../components/Content';
import Header from '../../components/Header';
import Theme from '../../assets/styles/themes/ThemeProvider';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='/'>
        Career Plan Today
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function Plan() {
  const [activeCategory, setActiveCategory] = useState("Explore Careers");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Explore Careers");
  const isSmUp = useMediaQuery(Theme.breakpoints.up("sm"));

  const handleCategoryClick = (selectedCategory: string) => {
    setHeaderTitle(selectedCategory);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 256;

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

            />
          )}
          <Navigator PaperProps={{ style: { width: drawerWidth } }} sx={{ display: { sm: "block", xs: "none" } }} />
        </Box>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header onDrawerToggle={handleDrawerToggle} title={headerTitle} />
          <Box component='main' sx={{ flex: 1, py: 6, px: 4, bgcolor: "#eaeff1" }}>
            {/* INSERT LINKS TO INDIVIDUAL PLANS HERE */}
            Explore Careers
            Compare Colleges
          </Box>

          <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
            <Copyright />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}