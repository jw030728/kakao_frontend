import {
  Avatar,
  Container,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
  Box,
  IconButton,
  Grid,
  Modal,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { friends } from "./data";
import { ChangeEvent, useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FriendAdd from "./component/FriendAdd";

const Friends = (): JSX.Element => {
  const [friendList, setFriendList] = useState(friends);
  const [open, setOpen] = useState(false);

  const changeList = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget.value;
    if (target.length === 0) {
      setFriendList(friends);
    }
    //name이 있을때만 담아줌
    //friends에다가 filter를 돌려야댐 이유는 friends가 원본이라 손상이 안됨
    else {
      const newList = friends.filter((name) => name.name.includes(target));
      setFriendList(newList);
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Modal open={open} onClose={closeModal}>
        <FriendAdd />
      </Modal>
      <Box>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField
              label="친구 검색"
              variant="outlined"
              fullWidth
              margin="dense"
              onChange={changeList}
            />
          </Grid>
          <Grid item xs={1.5}>
            <Box sx={{ p: 2 }}>
              <IconButton color="primary" size="large" onClick={openModal}>
                {<PersonAddIcon />}
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <List>
        {friendList.map((nowFriend) => {
          return (
            //map으로 컴포넌트 돌릴때 개별요소를 구분하기 위해 key가 꼭 필요함
            <ListItemButton key={nowFriend.id}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={nowFriend.name}
                secondary={nowFriend.statusMessage}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Container>
  );
};

export default Friends;
