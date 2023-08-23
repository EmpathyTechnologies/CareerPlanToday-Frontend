import {   ListItem,ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
 
function formatSalary(salary:number) {
  // Round the salary to the nearest thousand
  const roundedSalary = Math.round(salary / 1000) * 1000;
  // Add 'k' to indicate thousands
  return `$${roundedSalary / 1000}k`;
}

 function CareerTabItem(props:any) {
  const { salary,title,  itemCss } = props;
 

  return (
    <ListItem disablePadding>
    <ListItemButton sx={itemCss}>
      <ListItemIcon>{formatSalary(salary.national.average)}</ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItemButton>
    </ListItem>
  );
}


export default CareerTabItem