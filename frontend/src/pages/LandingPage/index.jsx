import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Search from "../../components/Search";

export default function LandingPage() {
  return (
    <Box
      height="100vh"
      bgcolor="primary"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Box width="42%">
        <Typography sx={{ padding: "5%", fontSize: { xl: 55, lg: 35, md: 30, sm: 20, xs: 10 } }}>
          Enter any <span style={{ color: "#9146FF" }}>Twitch</span> clip URL to find when it was created.
        </Typography>
      </Box>
      <Search />
    </Box>
  );
}