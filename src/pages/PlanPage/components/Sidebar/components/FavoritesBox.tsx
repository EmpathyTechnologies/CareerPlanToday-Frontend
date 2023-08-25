import { Divider, Box, ListItem, ListItemText } from "@mui/material";

import CareerTabItem from "./CareerTabItem";
import { RootState } from "../../../../../redux/store";
import { useSelector } from "react-redux";

function FavoritesBox({ itemCss }: any) {
  const savedCareers = useSelector((state: RootState) => state.careers);

  return (
    <Box key={"Favorites"} sx={{ bgcolor: "#101F33" }}>
      <ListItem sx={{ py: 2, px: 3 }}>
        <ListItemText sx={{ color: "#fff" }}>Favorites</ListItemText>
      </ListItem>
      {savedCareers.map((career) => (
        <CareerTabItem
          itemCss={itemCss}
          title={career.title}
          key={career.title}
        />
      ))}
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}

export default FavoritesBox;
