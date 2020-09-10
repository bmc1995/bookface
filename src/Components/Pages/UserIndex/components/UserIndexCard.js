import React from "react";
import {
  Card,
  Avatar,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import FriendButton from "../../../shared/friendButton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  cardStyles: {
    height: "15rem",
    width: "15rem",
  },

  avatarPic: {
    height: "125px",
    width: "125px",
    margin: "1rem auto",
    cursor: "pointer",
  },

  friendButton: {
    margin: "auto",
    textAlign: "center"
  }
});

const UserIndexCard = (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.cardStyles}>
      <Box onClick={() => history.push(`/profile/${props.profileUrl}`)}>
      <Avatar src={props.profilePic} className={classes.avatarPic} />
      </Box>
      <Typography align="center">{`${props.first_name} ${props.last_name}`}</Typography>
      <Box className={classes.friendButton} onClick={() => props.setPageUpdates(props.pageUpdates + 1)}>
        <FriendButton
          authUser={props.authUser}
          profileUser={props.profileUser}
          current={props.friendsCurrent}
          pendIn={props.friendsPendIn}
          pendOut={props.friendsPendOut}
        />
      </Box>
    </Card>
  );
};

export default UserIndexCard;
