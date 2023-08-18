import { Box} from "@mui/material";
import Copyright from "./../components/Copyright";

function Footer() {
  return (
    <Box component='footer' sx={{ p: 2, bgcolor: "#eaeff1" }}>
    <Copyright />
  </Box>
  )
}

export default Footer