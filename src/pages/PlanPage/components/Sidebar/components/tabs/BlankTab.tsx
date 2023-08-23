import { ListItem, ListItemButton, ListItemText } from "@mui/material";
 function BlankTab(props: any) {
  const { text, itemCss } = props;

  return (
    <ListItem disablePadding>
      <ListItemButton sx={itemCss}>
        <ListItemText>No {text} saved yet</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default BlankTab;
