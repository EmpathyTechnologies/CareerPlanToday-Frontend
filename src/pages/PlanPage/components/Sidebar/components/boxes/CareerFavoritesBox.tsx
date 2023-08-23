import { Divider, List, Box, ListItem, ListItemText } from "@mui/material";

import CareerTabItem from "../tabs/CareerTabItem";
import { RootState } from "../../../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import BlankTab from "../tabs/BlankTab";

function CareerFavoritesBox({ itemCss }: any) {
  const savedCareers = useSelector((state: RootState) => state.careers);

  return (
    <Box sx={{ bgcolor: "#101F33" }}>
      <ListItem sx={{ py: 2, px: 3 }}>
        <ListItemText sx={{ color: "#fff" }}>Favorite Careers</ListItemText>
      </ListItem>
      {savedCareers.length > 0 ? (
        savedCareers.map((career) => (
          <CareerTabItem
            itemCss={itemCss}
            title={career.title}
            key={career.title}
          />
        ))
      ) : (
        <BlankTab   text={"careers"}          itemCss={itemCss}
        />
      )}
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}

export default CareerFavoritesBox;
