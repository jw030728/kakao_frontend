import {
  Avatar,
  Container,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
  Box,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import exp from "constants";
import { ChangeEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const FriendAdd = (): JSX.Element => {
  return (
    <Container sx={{ p: 5 }}>
      <Box sx={{ background: "#f3f3f3", p: 3, borderRadius: "10px" }}>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField fullWidth label="전화번호" />
          </Grid>
          <Grid item xs={1.5}>
            <IconButton sx={{ p: 2 }}>
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FriendAdd;
