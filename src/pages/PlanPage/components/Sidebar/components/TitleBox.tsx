import { ListItem } from "@mui/material";

function TitleBox({ itemCss, itemCategory }: any) {
  return (
    <ListItem sx={{ ...itemCss, ...itemCategory, fontSize: 22, color: "#fff" }}>
      Career Plan Today
    </ListItem>
  );
}

export default TitleBox;
