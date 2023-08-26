import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { brandAqua_Dark, brandAqua, brandWhite_Dark, brandWhite } from "../../../../../../assets/brandColors";

function NavigationTabItem(props: any) {
  const { selected, item, onClick, icon, itemLabel } = props;

  const itemCss = {
    py: "2px",
    px: 3,
    bgcolor: selected ? brandAqua : brandWhite,
    "&:hover": {
      bgcolor: selected ? brandAqua : brandWhite_Dark,
    },
    border: selected ? `2px solid ${brandAqua_Dark}` : "2px solid transparent",
    borderRadius: "12px",
  };

  return (
    <ListItem disablePadding key={itemLabel}>
      <ListItemButton sx={itemCss} onClick={() => onClick(itemLabel)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{itemLabel}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default NavigationTabItem;
