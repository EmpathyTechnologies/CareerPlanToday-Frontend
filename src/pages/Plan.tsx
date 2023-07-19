// import Button from "../components/Button";
// import Card from "react-bootstrap/Card";
// import { useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navigator from '../components/Navigation';
import Content from '../components/Content';
import Header from '../components/Header';
import Theme from '../assets/styles/themes/ThemeProvider';
import { useState } from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Career Plan Today
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function Plan() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('Explore Careers');
  const isSmUp = useMediaQuery(Theme.breakpoints.up('sm'));

  const handleCategoryClick = (selectedCategory: string) => {
    setHeaderTitle(selectedCategory);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 256;

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
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
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header onDrawerToggle={handleDrawerToggle} title={headerTitle} />
          <Box
            component="main"
            sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}
          >
            <Content />
          </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
            <Copyright />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

// interface CardItem {
//   step: number;
//   title: string;
//   btnText: string;
//   href: string;
// }

// function Plan() {
//   let myCards: CardItem[] = [
//     { step: 1, title: "Incomplete", btnText: "Explore Careers", href: "/careers" },
//     { step: 2, title: "Incomplete", btnText: "Compare Colleges", href: "/colleges" },
//     { step: 3, title: "Incomplete", btnText: "How to Fund College", href: "/calculator" },
//     { step: 4, title: "Incomplete", btnText: "Choose your lifestyle", href: "/budget" },
//     { step: 5, title: "Incomplete", btnText: "See How You Can Invest", href: "/invest" },
//   ];

//   const navigate = useNavigate();

//   const handleButtonClick = (href: string) => {
//     if (href) {
//       navigate(href);
//     }
//   };

//   return (
//     <div className='plan-flex-column-center'>
//       {myCards.map((card) => (
//         <div className='plan-flex-center' key={card.step}>
//           <h2>Step {card.step}</h2>
//           <Card>
//             <Card.Body>
//               <Card.Title>{card.title}</Card.Title>
//               <Button text={card.btnText} color='btn-blue' onClick={() => handleButtonClick(card.href)} />
//             </Card.Body>
//           </Card>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Plan;
