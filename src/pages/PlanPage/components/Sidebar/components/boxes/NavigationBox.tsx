<<<<<<< HEAD
import { brandWhite_Dark, brandBlack, brandWhite } from "../../../../../../assets/brandColors";
=======
import { brandWhite, brandBlack } from "../../../../../../assets/brandColors";
>>>>>>> 7abd0fdab468fcbe2d857fb498f1e1fa81b786af

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SchoolIcon from "@mui/icons-material/School";
import NavigationTabItem from "../tabs/NavigationTabItem";
import WorkIcon from "@mui/icons-material/Work";

const sections = [
  {
    title: "Explore",
    tabs: [
      {
        icon: <WorkIcon />,
        title: "Explore Careers",
        href: "/careers",
      },
      {
        icon: <SchoolIcon />,
        title: "Compare Colleges",
        href: "/colleges",
      },
    ],
  },
  {
    title: "Plan",
    tabs: [
      {
        icon: <AccountBalanceIcon />,
        title: "How to Fund College",
        href: "/calculator",
      },
      {
        icon: <HomeWorkIcon />,
        title: "Choose Your Lifestyle",
        href: "/budget",
      },
      {
        icon: <AutoGraphIcon />,
        title: "See How You Can Invest",
        href: "/invest",
      },
    ],
  },
];

<<<<<<< HEAD
const NavigationBox = ({ selectedSubpage, setHeaderTitle }: any) => {
  return (
    <div>
      {sections.map(({ title, tabs }) => (
=======
const NavigationBox = ({ selectedSubpage, setHeaderTitle, itemCss }: any) => {
  return (
    <div>
      {sections.map(({ title, children: tabs }) => (
>>>>>>> 7abd0fdab468fcbe2d857fb498f1e1fa81b786af
        <Box
          sx={{
            bgcolor: brandWhite,
          }}>
          <ListItem sx={{ py: 2, px: 3 }}>
            <ListItemText sx={{ color: brandBlack }}>{title}</ListItemText>
          </ListItem>
<<<<<<< HEAD
          {tabs.map(({ title: itemLabel, icon }: any) => (
            <NavigationTabItem
              key={itemLabel}
              selected={selectedSubpage === itemLabel}
              onClick={() => setHeaderTitle(itemLabel)}
              icon={icon}
              itemLabel={itemLabel}
=======
          {tabs.map(({ title: childId, icon }: any) => (
            <NavigationTabItem
              key={childId}
              selected={selectedSubpage === childId}
              item={itemCss}
              onClick={() => setHeaderTitle(childId)}
              icon={icon}
              childId={childId}
>>>>>>> 7abd0fdab468fcbe2d857fb498f1e1fa81b786af
            />
          ))}
          <Divider sx={{ mt: 2 }} />
        </Box>
      ))}
    </div>
  );
};

export default NavigationBox;
