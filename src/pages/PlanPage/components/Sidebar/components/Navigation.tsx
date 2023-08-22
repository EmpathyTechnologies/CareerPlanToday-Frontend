import { Divider, List, Box, ListItem, ListItemText } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HomeTab from "./HomeTab";
import TabItem from "./TabItem";
import { AiFillHeart } from "react-icons/ai";

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

// const favorites = [
//   {
//     title: "Favorite Careers",
//     children: [
//       {
//         icon: <AiFillHeart />,
//         title: "Washington State",
//         href: "/calculator",
//       },
//       {
//         icon: <AiFillHeart />,
//         title: "Choose Your Lifestyle",
//         href: "/budget",
//       },
//       {
//         icon: <AiFillHeart />,
//         title: "See How You Can Invest",
//         href: "/invest",
//       },
//     ],
//   },
// ];

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

export default function Navigator(props: any) {
  const {
    selectedSubpage: navActiveCategory,
    setSelectedSubpage: setNavActiveCategory,
    ...other
  } = props;

  const setHeaderTitle = (categoryId: string) => {
    props.setSelectedSubpage(categoryId);
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Career Plan Today
        </ListItem>
        <HomeTab item={{ ...item }} itemCategory={{ ...itemCategory }} />

        {sections.map(({ title, children: tabs }) => (
          <Box key={title} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{title}</ListItemText>
            </ListItem>

            {tabs.map(({ title: childId, icon }) => (
              <TabItem
                selected={props.selectedSubpage === childId}
                item={item}
                onClick={setHeaderTitle}
                icon={icon}
                childId={childId}
              />
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
        {/* {favorites.map(({ title, children: tabs }) => (
          <Box key={title} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{title}</ListItemText>
            </ListItem>

            {tabs.map(({ title: childId, icon }) => (
              <TabItem
                selected={props.selectedSubpage === childId}
                item={item}
                onClick={setHeaderTitle}
                icon={icon}
                childId={childId}
              />
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))} */}
      </List>
    </Drawer>
  );
}
