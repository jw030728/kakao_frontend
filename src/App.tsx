import "./App.css";
import { useState, ChangeEvent } from "react";
import { Container, Grid, Box, Tab, Tabs, Paper } from "@mui/material";
import ToDo_List from "./ToDo_List";
import Test from "./pages/Test";
import Friends from "./pages/Friends";

import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";

const App = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<string>("friends");

  const changeTab = (changeValue: string) => {
    setCurrentTab(changeValue);
  };

  return (
    <section>
      {/* currentTab이 friends면 보여줘라 */}
      <Box sx={{ pb: 7 }}>{currentTab === "friends" && <Friends />}</Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Tabs centered variant="fullWidth" value={currentTab}>
          <Tab
            icon={<PeopleIcon />}
            label="친구"
            value="friends"
            onClick={() => changeTab("friends")}
          />
          <Tab
            icon={<ChatIcon />}
            label="채팅"
            value="chat"
            onClick={() => changeTab("chat")}
          />
        </Tabs>
      </Paper>
    </section>
  );
};

export default App;
