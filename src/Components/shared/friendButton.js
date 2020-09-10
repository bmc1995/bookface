import React, { useContext } from "react";
import { Button, Typography } from "@material-ui/core";

import { AccessContext } from "../../AccessContext";

const FriendButton = (props) => {
  const { accessToken } = useContext(AccessContext);

  const handleAddClick = async () => {
    const response = await fetch("http://localhost:5000/users/sendFriendReq", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        profileUser: props.profileUser,
        authUser: props.authUser,
      })
    })
    response.json()
    .then((res)=> {
      console.log(res);
    })
    .catch((err)=> {
      console.error(err);
    })
    //Change 'Add Friend' to a disafibled 'Requested' button
  };

  const handleAcceptClick = async () => {
    const response = await fetch("http://localhost:5000/users/acceptFriendReq", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        profileUser: props.profileUser,
        authUser: props.authUser,
      })
    })
    response.json()
    .then((res)=> {
      console.log(res);
    })
    .catch((err)=> {
      console.error(err);
    })
  };

  const handleUnfriendClick = async () => {
    const response = await fetch("http://localhost:5000/users/unfriend", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        profileUser: props.profileUser,
        authUser: props.authUser,
      })
    })
    response.json()
    .then((res)=> {
      console.log(res);
    })
    .catch((err)=> {
      console.error(err);
    })
  };

  //they are friends
  if (props.current.includes(props.authUser)) {
    return (
      <Button onClick={handleUnfriendClick} variant="outlined">
        <Typography variant="caption">Unfriend</Typography>
      </Button>
    );
    //authUser has requested
  } else if (props.pendIn.includes(props.authUser)) {
    return (
      <Button disabled variant="outlined">
        <Typography variant="caption">Requested</Typography>
      </Button>
    );
    //they have requested authUser
  } else if (props.pendOut.includes(props.authUser)) {
    return (
      <Button onClick={handleAcceptClick} variant="outlined">
        <Typography variant="caption">Accept Friend Request</Typography>
      </Button>
    );
    //if profile page is not authUser's
  } else if (props.profileUser !== props.authUser) {
    return (
      <Button onClick={handleAddClick} variant="outlined">
        <Typography variant="caption">Add Friend</Typography>
      </Button>
    );
  }
  return null;
};

export default FriendButton;
