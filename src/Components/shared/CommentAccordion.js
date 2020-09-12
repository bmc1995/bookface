import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Box,
  IconButton,
} from "@material-ui/core";

import { UserContext } from "../../Context/UserContext";
import { makeStyles } from "@material-ui/core/styles";

//create css for this component
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  list: {
    display: "inline",
    width: "100%",
  },
  listItem: {
    margin: "2px 0",
  },
  avatarHover: {
    cursor: "pointer",
  },
}));

//comment accordion
function SimpleExpansionPanel(props) {
  const classes = useStyles();
  const [commentsArr, setCommentsArr] = useState([]);
  const history = useHistory();
  const { user } = useContext(UserContext);

  const handleDelete = async (commentId) => {
    //define the fetch request (returns a Promise/Response) as 'response'
    const response = await fetch(
      `https://bookymcbookface.herokuapp.com/comments/${props.postId}/${commentId}`,
      {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.token}`,
        },
      }
    );
    //call response, then, handle promise resolve/rejection
      //setState to reload components after deletion
    response.json().then((res) => {
        props.setRefreshInfo(props.refreshInfo + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //look for the Comment Id inside of the authenticated user's list of comments
  const isAuthUserComment = (commentId, authUserComments) => {
    if (authUserComments.includes(commentId)) {
      return (
        <IconButton onClick={() => handleDelete(commentId)}>
          <DeleteForeverIcon />
        </IconButton>
      );
    }
  };
  //runs on component load or when there are changes to dependencies
  useEffect(() => {
    const getComments = async (postId, token) => {
    //define the fetch request (returns a Promise/Response) as 'response'
      const response = await fetch(
        `https://bookymcbookface.herokuapp.com/comments/${postId}`,
        {
          method: "GET",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //call response, then, handle promise resolve/rejection
      response.json().then((res) => {
        setCommentsArr(res.comments);
      });
    };
    getComments(props.postId, props.token);
  }, [props.postId, props.token, props.refreshInfo]);

  return (
    <div className={classes.root}>
      <ExpansionPanel elevation={2}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Comments</Typography>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails className={classes.list}>
          {/* create a list containing every comment in the array */}
          {commentsArr.map((comment, i) => (
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Box
                  className={classes.avatarHover}
                  onClick={() =>
                  // go to author's profile page
                    history.push(`/profile/${comment.author.userurl}`)
                  }
                >
                  <ListItemAvatar>
                    <Avatar src={comment.author.profileImgUrl} />
                  </ListItemAvatar>
                </Box>
                <ListItemText
                  primary={
                    <Typography variant="caption">{`${comment.author.first_name} ${comment.author.last_name}`}</Typography>
                  }
                  secondary={
                    <Typography variant="body1">{comment.message}</Typography>
                  }
                />
                {isAuthUserComment(comment._id, user.comments)}
              </ListItem>
              {/* render divider unless this is the last comment. */}
              {i !== commentsArr.length - 1 ? (
                <Divider variant="middle" />
              ) : null}
            </List>
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default SimpleExpansionPanel;
