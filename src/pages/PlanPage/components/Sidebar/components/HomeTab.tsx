import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import { Link } from "react-router-dom";
function HomeTab({ item, itemCategory }: any) {
  return (
    <ListItem sx={{ ...item, ...itemCategory }}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>

      <Link to="/home" style={{ textDecoration: "none", color: "#d1e7dd" }}>
        <ListItemText>Home</ListItemText>
      </Link>
    </ListItem>
  );
}

export default HomeTab;
