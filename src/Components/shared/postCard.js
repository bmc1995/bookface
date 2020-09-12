import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Card,
  Divider,
  Typography,
  makeStyles,
  Avatar,
  IconButton,
} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { UserContext } from "../../Context/UserContext";
import { AccessContext } from "../../Context/AccessContext";

import CreateCommentDialog from "../shared/CreateCommentDialog";
import CommentAccordion from "./CommentAccordion";
//create css for this component
const useStyles = makeStyles({
  postComponentStyles: {
    width: "95%",
    marginBottom: "3rem",
    border: "1px solid black",
  },
  avatarSmall: {
    height: "40px",
    width: "40px",
    marginRight: "1rem",
  },
  posterInfo: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid black",
  },
  postInteractions: {
    display: "flex",
    justifyContent: "end",
  },
  interactionButton: {
    padding: 0,
    margin: "0 1rem",
  },
  avatarContainer: {
    cursor: "pointer",
  },
});

const PostCard = (props) => {
  const { user } = useContext(UserContext);
  const { accessToken } = useContext(AccessContext);
  const history = useHistory();
  const classes = useStyles();

  const handleDelete = async (postId) => {
    //define the fetch request (returns a Promise/Response) as 'response'
    const response = await fetch(
      `https://bookymcbookface.herokuapp.com/posts/${postId}/${user._id}`,
      {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    //call response, then, handle promise resolve/rejection
    response.json().then((res) => {
      props.setDeletedPosts((deletedPosts) => [...deletedPosts, res]);
      return console.log(res);
    });
  };

  const handleLike = async (postId, userId) => {
    //define the fetch request (returns a Promise/Response) as 'response'
    const response = await fetch(
      "https://bookymcbookface.herokuapp.com/likes",
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          postId,
          userId,
        }),
      }
    );
    //call response, then, handle promise resolve/rejection
    response.json().then((res) => {
      props.setLikes(res);
      console.log(res);
    });
  };
  //if this is authenticated user's post, render delete button.
  const isAuthUsersPost = () => {
    if (user._id === props.postAuthorId) {
      return (
        <IconButton
          onClick={() => handleDelete(props.postId)}
          className={classes.interactionButton}
        >
          <DeleteForeverIcon fontSize="small" />
        </IconButton>
      );
    } else {
      return null;
    }
  };

  return (
    <Card className={classes.postComponentStyles} elevation={5}>
      <Box className={classes.posterInfo}>
        <Box
          onClick={() => history.push(`/profile/${props.postProfileUrl}`)}
          className={classes.avatarContainer}
        >
          <Avatar
            className={classes.avatarSmall}
            src={props.profilePic}
            alt={`${props.firstName} ${props.lastName}`}
          ></Avatar>
        </Box>
        <Typography variant="overline">
          {props.firstName} {props.lastName}
        </Typography>
      </Box>
      {/* <Divider /> */}
      <Box padding={1}>
        <Typography variant="body1" paragraph>
          {props.post}
        </Typography>
        <Divider />
        <Box className={classes.postInteractions}>
          <CreateCommentDialog
            postComments={props.postComments}
            postId={props.postId}
            refreshInfo={props.refreshInfo}
            setRefreshInfo={props.setRefreshInfo}
          />
          <IconButton
            onClick={() => handleLike(props.postId, user._id)}
            className={classes.interactionButton}
          >
            <ThumbUpIcon fontSize="small" />
            {props.postLikes.length}
          </IconButton>
          {isAuthUsersPost()}
        </Box>
        <CommentAccordion
          postId={props.postId}
          token={accessToken}
          refreshInfo={props.refreshInfo}
          setRefreshInfo={props.setRefreshInfo}
        />
      </Box>
    </Card>
  );
};

export default PostCard;
