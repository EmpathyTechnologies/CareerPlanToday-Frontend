import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
<<<<<<< HEAD
import { brandWhite_Dark, brandBlack, brandWhite } from "../../../../../../assets/brandColors";
=======
import { brandBlack, brandWhite } from "../../../../../../assets/brandColors";
>>>>>>> 7abd0fdab468fcbe2d857fb498f1e1fa81b786af
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/store";
import BlankTab from "../tabs/BlankTab";
import CollegeTabItem from "../tabs/CollegeTabItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
<<<<<<< HEAD

function CollegeFavoritesBox() {
=======
function CollegeFavoritesBox({ itemCss }: any) {
>>>>>>> 7abd0fdab468fcbe2d857fb498f1e1fa81b786af
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
<<<<<<< HEAD
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ bgcolor: brandWhite, color: brandBlack }} />}>
=======
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ bgcolor: brandWhite, color: brandBlack }} />}
        aria-controls='career-favorites-content'
        id='career-favorites-header'>
>>>>>>> 7abd0fdab468fcbe2d857fb498f1e1fa81b786af
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
