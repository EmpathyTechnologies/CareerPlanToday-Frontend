import { brandBlack, brandGrey_Light } from "../../../../../assets/brandColors";
import { List } from "@mui/material";

import CareerFavoritesBox from "./boxes/CareerFavoritesBox";
import CollegeFavoritesBox from "./boxes/CollegeFavoritesBox";
import Drawer from "@mui/material/Drawer";
import NavigationBox from "./boxes/NavigationBox";
import TitleBox from "./TitleBox";

const itemCss = {
  py: "2px",
  px: 3,
  color: brandBlack,
  "&:hover, &:focus": {
    bgcolor: brandGrey_Light,
  },
};

export default function Navigator(props: any) {
  const { selectedSubpage: navActiveCategory, setSelectedSubpage: setNavActiveCategory, ...other } = props;

  const setHeaderTitle = (categoryId: string) => {
    props.setSelectedSubpage(categoryId);
  };

  return (
    <Drawer variant='permanent' {...other}>
      <List disablePadding>
        <TitleBox />
        <NavigationBox selectedSubpage={props.selectedSubpage} setHeaderTitle={setHeaderTitle} itemCss={itemCss} />
        <CareerFavoritesBox itemCss={itemCss} />
        <CollegeFavoritesBox itemCss={itemCss} />
      </List>
    </Drawer>
  );
}
