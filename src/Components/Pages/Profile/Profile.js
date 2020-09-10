import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Typography } from "@material-ui/core";
import Timeline from "../../shared/timeline";
import UserCard from "./components/userCard";
import { AccessContext } from "../../../AccessContext";
import { UserContext } from "../../../UserContext";

export default function ProfileComponent() {
  let { userurl } = useParams();

  const { accessToken } = useContext(AccessContext);
  const { user } = useContext(UserContext);
  const [profileInfo, setProfileInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshInfo, setRefreshInfo] = useState(0)
  const [deletedPosts, setDeletedPosts] = useState([])
  const [likes, setLikes] = useState([])
  const authId = user._id
  
  // Fetch the user information for the profile page
  useEffect(() => {
    async function getProfileInfo(url) {
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
        setProfileInfo(res.result[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
    }
    
    getProfileInfo(`https://bookymcbookface.herokuapp.com/users/find/${userurl}`);
    //useEffect dependencies
  }, [userurl, accessToken, refreshInfo, deletedPosts, likes]);

  if (profileInfo === undefined) {
    return <Typography>Not found...</Typography>;
  }
  
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container disableGutters maxWidth="xl">
      <UserCard
        age={profileInfo.age}
        firstName={profileInfo.first_name}
        lastName={profileInfo.last_name}
        city={profileInfo.city}
        state={profileInfo.state}
        profilePic={profileInfo.profileImgUrl}
        // friendButton props
        friendsCurrent={profileInfo.friends.current}
        friendsPendIn={profileInfo.friends.pendIn}
        friendsPendOut={profileInfo.friends.pendOut}
        profileUser={profileInfo._id}
        setRefreshInfo={setRefreshInfo}
        refreshInfo={refreshInfo}
        authUser={authId}
      />
      <Box>
      {/* if not friends, hide timeline.-----> { profileInfo.friends.current.includes(user._id) || profileInfo._id === user._id ? : null*/}
        <Timeline
          profilePic={profileInfo.profileImgUrl}
          posts={profileInfo.posts.map((post) => post)}
          firstName={profileInfo.first_name}
          lastName={profileInfo.last_name}
          userId={profileInfo._id}
          deletedPosts={deletedPosts}
          setDeletedPosts={setDeletedPosts}
          userurl={profileInfo.userurl}
          likes={likes}
          setLikes={setLikes}
          refreshInfo={refreshInfo}
          setRefreshInfo={setRefreshInfo}
        />
      </Box>
    </Container>
  );
}
