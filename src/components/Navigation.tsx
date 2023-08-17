import React, { useState } from "react";
import {
  Divider,
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const categories = [
  {
    id: "Find",
    children: [
      {
        id: "Explore Careers",
        icon: <WorkIcon />,
        href: "/careers",
      },
      {
        icon: <SchoolIcon />,
        id: "Compare Colleges",
        href: "/colleges",
      },
    ],
  },
  {
    id: "Plan",
    children: [
      {
        icon: <AccountBalanceIcon />,
        id: "How to Fund College",
        href: "/calculator",
      },
      { id: "Choose Your Lifestyle", icon: <HomeWorkIcon />, href: "/budget" },
      {
        icon: <AutoGraphIcon />,
        id: "See How You Can Invest",
        href: "/invest",
      },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;

  const [activeCategory, setActiveCategory] = useState("Compare Colleges");

  const setHeaderTitle = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}>
          Career Plan Today
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton
                  selected={activeCategory === childId}
                  sx={item}
                  onClick={() => setHeaderTitle(childId)}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
