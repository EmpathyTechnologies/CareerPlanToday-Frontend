import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/store";
import BlankTab from "../tabs/BlankTab";
import CollegeTabItem from "../tabs/CollegeTabItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CollegeFavoritesBox({ itemCss }: any) {
  const savedColleges = useSelector((state: RootState) => state.colleges);

  return (
    <Accordion sx={{ bgcolor: "#101F33", color: "#fff" }}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ bgcolor: "#101F33", color: "#fff" }} />
        }
        aria-controls="career-favorites-content"
        id="career-favorites-header"
      >
        <Typography>{savedColleges.length} Favorite Colleges</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ bgcolor: "#101F33" }}>
          {savedColleges.length > 0 ? (
            savedColleges.map((college: any) => (
              <CollegeTabItem
                collegeData={college}
                itemCss={itemCss}
                title={college.name}
                key={college.name}
              />
            ))
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
