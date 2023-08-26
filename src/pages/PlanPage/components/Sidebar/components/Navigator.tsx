import { List } from "@mui/material";

import CareerFavoritesBox from "./boxes/CareerFavoritesBox";
import CollegeFavoritesBox from "./boxes/CollegeFavoritesBox";
import Drawer from "@mui/material/Drawer";
import NavigationBox from "./boxes/NavigationBox";
import TitleBox from "./TitleBox";

export default function Navigator(props: any) {
  const { selectedSubpage: navActiveCategory, setSelectedSubpage: setNavActiveCategory, ...other } = props;

  const setHeaderTitle = (categoryId: string) => {
    props.setSelectedSubpage(categoryId);
  };

  return (
    <Drawer variant='permanent' {...other}>
      <List disablePadding>
        <TitleBox />
        <NavigationBox selectedSubpage={props.selectedSubpage} setHeaderTitle={setHeaderTitle} />
        <CareerFavoritesBox />
        <CollegeFavoritesBox />
      </List>
    </Drawer>
  );
}
