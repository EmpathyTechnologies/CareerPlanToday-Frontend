import { List, ListItem } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import HomeTab from "./tabs/HomeTab";

import CareerFavoritesBox from "./boxes/CareerFavoritesBox";
import CollegeFavoritesBox from "./boxes/CollegeFavoritesBox";
import NavigationBox from "./boxes/NavigationBox";
import TitleBox from "./TitleBox";
const itemCss = {
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

        <TitleBox itemCss={itemCss} itemCategory={itemCategory} />

        <HomeTab item={{ ...itemCss }} itemCategory={{ ...itemCategory }} />

        <NavigationBox
          selectedSubpage={props.selectedSubpage}
          setHeaderTitle={setHeaderTitle}
          itemCss={itemCss}
        />

        <CareerFavoritesBox itemCss={itemCss} />

        <CollegeFavoritesBox itemCss={itemCss} />
      </List>
    </Drawer>
  );
}
