import { Box } from "@mui/material";
import { GetSelectedSubPage } from "./GetSelectedSubPage";

function Main({ selectedSubpage, selectedCareer, selectedCollege, setSelectedCareer, setSelectedCollege }: any) {
  return (
    <Box component='main' sx={{ flex: 1, py: 6, px: 4, bgcolor: "#eaeff1" }}>
      {GetSelectedSubPage(selectedSubpage, selectedCareer, selectedCollege, setSelectedCareer, setSelectedCollege)}
    </Box>
  );
}

export default Main;
