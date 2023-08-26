import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { brandWhite_Dark, brandBlack, brandWhite } from "../../../../../../assets/brandColors";
import { RootState } from "../../../../../../redux/store";
import { useSelector } from "react-redux";
import BlankTab from "../tabs/BlankTab";
import CareerTabItem from "../tabs/CareerTabItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function CareerFavoritesBox() {
  const savedCareers = useSelector((state: RootState) => state.careers);

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
        <Typography>{savedCareers.length} Favorite Careers</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            bgcolor: brandWhite,
          }}>
          {savedCareers.length > 0 ? (
            savedCareers.map((career) => (
              <CareerTabItem careerData={career} itemCss={itemCss} salary={career.salary} title={career.title} key={career.title} />
            ))
          ) : (
            <BlankTab text={"careers"} itemCss={itemCss} />
          )}
          <Divider sx={{ mt: 2 }} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default CareerFavoritesBox;
