import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { brandWhite_Dark, brandBlack, brandWhite } from "../../../../../../assets/brandColors";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/store";
import BlankTab from "../tabs/BlankTab";
import CollegeTabItem from "../tabs/CollegeTabItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CollegeFavoritesBox() {
  const savedColleges = useSelector((state: RootState) => state.colleges);

  const itemCss = {
    py: "2px",
    px: 3,
    color: brandBlack,
    "&:hover, &:focus": {
      bgcolor: brandWhite_Dark,
    },
  };

  return (
    <Accordion
      sx={{
        bgcolor: brandWhite,
        color: brandBlack,
      }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ bgcolor: brandWhite, color: brandBlack }} />}>
        <Typography>{savedColleges.length} Favorite Colleges</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {savedColleges.length > 0 ? (
            savedColleges.map((college: any) => <CollegeTabItem collegeData={college} itemCss={itemCss} title={college.name} key={college.name} />)
          ) : (
            <BlankTab text={"colleges"} itemCss={itemCss} />
          )}
          <Divider sx={{ mt: 2 }} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default CollegeFavoritesBox;
