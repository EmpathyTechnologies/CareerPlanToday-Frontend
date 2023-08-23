import { Divider, List, Box, ListItem, ListItemText } from "@mui/material";

import CollegeTabItem from "../tabs/CollegeTabItem";
import { RootState } from "../../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import BlankTab from "../tabs/BlankTab";

function CollegeFavoritesBox({ itemCss }: any) {
  const savedColleges = useSelector((state: RootState) => state.colleges);

  return (
    <Box sx={{ bgcolor: "#101F33" }}>
      <ListItem sx={{ py: 2, px: 3 }}>
        <ListItemText sx={{ color: "#fff" }}>Favorite Careers</ListItemText>
      </ListItem>
      {savedColleges.length > 0 ? (
        savedColleges.map((college:any) => (
          <CollegeTabItem
            itemCss={itemCss}
            title={college.name}
            key={college.name}
          />
        ))
      ) : (
        <BlankTab text={"colleges"} itemCss={itemCss} />
      )}
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}

export default CollegeFavoritesBox;
