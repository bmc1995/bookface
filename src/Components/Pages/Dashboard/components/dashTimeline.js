import React from "react";

import { Container, Paper, makeStyles, Divider, Box } from "@material-ui/core";
import PostCard from "../../../shared/postCard";

//create css for this component
const useStyles = makeStyles({
  timelineContainer: {
    overflow: "auto",
    paddingBottom: "1rem",
    paddingTop: "1rem",
  },

  timelinePaper: {
    backgroundColor: "#ffffffbf",
  },
  title: {
    paddingLeft: "1rem",
  },
});

const DashTimeline = (props) => {
  //postsArr is brought in with props from api call within dashboard component
  const postsArr = props.posts;
  const classes = useStyles();

  return (
    <Container className={classes.timelineContainer} maxWidth="md">
      <Paper className={classes.timelinePaper} elevation={15}>
        <Divider />
        <Box
          paddingY={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {postsArr
            .map((post, i) => (
              <PostCard
                key={`${post.author.first_name}_${post.author.last_name}_${post.author._id}_${i}`}
                firstName={post.author.first_name}
                lastName={post.author.last_name}
                profilePic={post.author.profileImgUrl}
                postAuthorId={post.author._id}
                postProfileUrl={post.author.userurl}
                postId={post._id}
                post={post.message}
                postLikes={post.likes}
                postComments={post.comments}
                setDeletedPosts={props.setDeletedPosts}
                setLikes={props.setLikes}
                refreshInfo={props.refreshInfo}
                setRefreshInfo={props.setRefreshInfo}
              />
            ))
            .reverse()}
        </Box>
      </Paper>
    </Container>
  );
};

export default DashTimeline;
