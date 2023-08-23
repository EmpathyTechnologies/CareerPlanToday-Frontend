
import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import TabItem from "./NavigationTabItem";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const sections = [
  {
    title: "Find",
    children: [
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
    children: [
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

const NavigationBox = ({ title, tabs, selectedSubpage, setHeaderTitle, itemCss }:any) => {
  return (
<div>
{sections.map(({ title, children: tabs }) => (
    <Box sx={{ bgcolor: "#101F33" }}>
      <ListItem sx={{ py: 2, px: 3 }}>
        <ListItemText sx={{ color: "#fff" }}>{title}</ListItemText>
      </ListItem>
      {tabs.map(({ title: childId, icon }:any) => (
        <TabItem
          key={childId}
          selected={selectedSubpage === childId}
          item={itemCss}
          onClick={() => setHeaderTitle(childId)}
          icon={icon}
          childId={childId}
        />
      ))}
      <Divider sx={{ mt: 2 }} />
    </Box>        ))}

    </div>
  );
};

export default NavigationBox;
