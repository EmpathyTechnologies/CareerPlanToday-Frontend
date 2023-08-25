import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function TabItem(props: any) {
  const { selected, item, onClick, icon, childId } = props;

  return (
    <ListItem disablePadding key={childId}>
      <ListItemButton
        selected={selected}
        sx={item}
        onClick={() => onClick(childId)}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{childId}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default TabItem;
