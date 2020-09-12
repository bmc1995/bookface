import React from "react";
import {
  Container,
  makeStyles,
  Box,
  Paper,
  Typography,
  Divider,
} from "@material-ui/core";
import PostCard from "./postCard";
//create css for this component
const useStyles = makeStyles({
  timelineContainer: {
    overflow: "auto",
    paddingBottom: "3rem",
    paddingTop: "1rem",
  },

  timelinePaper: {
    backgroundColor: "#ffffffbf",
  },
  title: {
    paddingLeft: "1rem",
  },
});

const Timeline = (props) => {
  const classes = useStyles();
  const postsArr = props.posts;
  return (
    <Container className={classes.timelineContainer} maxWidth="md">
      <Paper className={classes.timelinePaper} elevation={15}>
        <Typography className={classes.title} variant="overline">
          {props.firstName}'s Posts
        </Typography>
        <Divider />
        <Box
          paddingY={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {postsArr.map((post, i) => (
            <PostCard
              key={`${props.firstName}_${props.lastName}_${props.userId}_${i}`}
              firstName={props.firstName}
              lastName={props.lastName}
              profilePic={props.profilePic}
              postAuthorId={props.userId}
              post={post.message}
              postId={post._id}
              deletedPosts={props.deletedPosts}
              setDeletedPosts={props.setDeletedPosts}
              postLikes={post.likes}
              postComments={post.comments}
              postProfileUrl={props.userurl}
              likes={props.likes}
              setLikes={props.setLikes}
              refreshInfo={props.refreshInfo}
              setRefreshInfo={props.setRefreshInfo}
            />
            //reverse the array so the posts are ordered most recent from top to bottom
          )).reverse()}
        </Box>
      </Paper>
    </Container>
  );
};

export default Timeline;
