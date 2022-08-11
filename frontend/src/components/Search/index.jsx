import { useState } from 'react';

import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";

import searchRequest from '../../components/Search/searchrequest';

export default function Search() {

  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  const search = (event) => {
    event.preventDefault();
    searchRequest(query).then(
      response => {
        if (response.data.status_code === 400) {
          setData(response.data.error);
        } else {  // Success
          setData("Clip was created on " + response.data.date + " at " + response.data.time);
        }
      }
    );
  }

  const handleInput = (event) => {
    setQuery(event.target.value);
  }

  return (
    <>
      <Box width="42%">
        <Paper
          component="form"
          onSubmit={search}
          sx={{ padding: "0.4rem", marginBottom: "30vh", display: "flex", color: "#D2D2E6" }}
        >
          <InputBase
            sx={{ marginLeft: "0.4rem", marginRight: "0.4rem", width: "100%" }}
            placeholder="Example: https://www.twitch.tv/clintstevens/clip/TrustworthyRudeAyeayeTheRinger-tS_LDcvKFsx9Jt3x"
            inputProps={{ 'aria-label': 'example' }}
            onChange={handleInput}
          />
          <IconButton onClick={search} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Box width="64%">
        <Typography sx={{ marginTop: "-20vh", color: "#9146FF", fontSize: { xl: 50, lg: 35, md: 32, sm: 22, xs: 10 } }}>
          {data}
        </Typography>
      </Box>
    </>
  );
}