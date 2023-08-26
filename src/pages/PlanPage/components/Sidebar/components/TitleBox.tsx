import { brandBlue_Dark, brandWhite } from "../../../../../assets/brandColors";
import { ListItem } from "@mui/material";
import { brandBlue_Dark, brandWhite } from "../../../../../assets/brandColors";

function TitleBox() {
  return (
    <ListItem sx={{ fontSize: 22, bgcolor: brandWhite, color: brandBlue_Dark, fontWeight: "bold", display: "flex", justifyContent: "center" }}>
      Career Plan Today
    </ListItem>
  );
}

export default TitleBox;
