import React, { useContext, useState, useEffect } from "react";
import { Container, Box, Paper, Typography } from "@material-ui/core";
import { UserContext } from "../../../UserContext";
import CreatePostDialog from "../../shared/CreatePostDialog";
import DashTimeline from "../Dashboard/components/dashTimeline";
import { AccessContext } from "../../../AccessContext";

export default function DashboardComponent() {
  const { user } = useContext(UserContext);
  const { accessToken } = useContext(AccessContext);

  const [posts, setPosts] = useState();
  const [likes, setLikes] = useState([]);
  const [deletedPosts, setDeletedPosts] = useState([]);
  const [refreshInfo, setRefreshInfo] = useState(0);

  useEffect(() => {
    //define function
    async function getPosts(url) {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      response
        .json()
        .then((res) => {
          setPosts(res.posts);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    getPosts(`https://bookymcbookface.herokuapp.com/`);
    //useEffect dependencies
  }, [accessToken, deletedPosts, likes, refreshInfo]);

  if (posts && posts.length > 0) {
    return (
      <Container>
        <Box textAlign="center">
          <Typography variant="h6">{`Hello, ${user.first_name}!`}</Typography>
          <CreatePostDialog
            refreshInfo={refreshInfo}
            setRefreshInfo={setRefreshInfo}
          />
        </Box>
        <DashTimeline
          posts={posts}
          deletedPosts={deletedPosts}
          setDeletedPosts={setDeletedPosts}
          setLikes={setLikes}
          refreshInfo={refreshInfo}
          setRefreshInfo={setRefreshInfo}
        />
      </Container>
    );
  } else {
    return (
      <Container>
        <Box>{`Hello, ${user.first_name}!`}</Box>
        <CreatePostDialog />
        <Paper elevation={10}>
          <Typography>Nothing to see here...</Typography>
        </Paper>
      </Container>
    );
  }
}
