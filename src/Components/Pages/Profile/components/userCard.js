import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  makeStyles,
  Container,
  Avatar,
  Dialog,
  Button,
} from "@material-ui/core";

import RoomIcon from "@material-ui/icons/Room";
import CakeIcon from "@material-ui/icons/Cake";
import FriendButton from "../../../shared/friendButton";
import EditProfileDialog from "./EditProfileDialog";

const useStyles = makeStyles({
  userCard: {
    marginTop: "1rem",
    display: "flex",
  },
  infoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100pc",
  },
  fullName: {
    alignSelf: "center",
    textAlign: "center",
  },
  ageLocation: {
    display: "flex",
    justifyContent: "space-around",
  },
  avatarPic: {
    height: "160px",
    width: "160px",
  },
  friendButton: {
    alignSelf: "center",
  },
});

const UserCard = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleEditProfileOpen = () => {
    setOpen(true);
  };

  const handleEditProfileClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Card elevation={10} className={classes.userCard}>
        <Avatar
          className={classes.avatarPic}
          variant="rounded"
          src={props.profilePic}
          alt={`${props.firstName} ${props.lastName}`}
        />
        <Box className={classes.infoBox}>
          <Box className={classes.fullName}>
            <Typography variant="h6">
              {props.firstName} {props.lastName}
            </Typography>
          </Box>
          <Box
            margin="auto"
            onClick={() => props.setRefreshInfo(props.refreshInfo + 1)}
            className={classes.friendButton}
          >
            <FriendButton
              authUser={props.authUser}
              profileUser={props.profileUser}
              current={props.friendsCurrent}
              pendIn={props.friendsPendIn}
              pendOut={props.friendsPendOut}
            />
          </Box>
          {props.age && props.city && props.state ? (
            <Box className={classes.ageLocation}>
              <Typography variant="subtitle">
                {props.age}
                <CakeIcon />
              </Typography>
              <Typography>
                {props.city}, {props.state}
                <RoomIcon />
              </Typography>
            </Box>
          ) : null}
          {props.authUser === props.profileUser ? (
            <Box margin="auto">
              <Button
                onClick={() => handleEditProfileOpen()}
                variant="contained"
              >
                Edit Profile
              </Button>
              <Dialog open={open} onClose={handleEditProfileClose}>
                <EditProfileDialog
                  currAge={props.age}
                  currCity={props.city}
                  currState={props.state}
                  handleClose={handleEditProfileClose}
                  setRefreshInfo={props.setRefreshInfo}
                  refreshInfo={props.refreshInfo}
                />
              </Dialog>
            </Box>
          ) : null}
        </Box>
      </Card>
    </Container>
  );
};

export default UserCard;
