import React, { useEffect, useContext, useState } from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

import { UserContext } from "../../../Context/UserContext";
import { AccessContext } from "../../../Context/AccessContext";
import UserIndexCard from "./components/UserIndexCard";
//create css for this component
const useStyles = makeStyles({
  UserIndexContainer: {},
});

const UserIndex = () => {
  const { user } = useContext(UserContext);
  const { accessToken } = useContext(AccessContext);
  const [users, setUsers] = useState([]);
  const [pageUpdates, setPageUpdates] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const getAllUsers = async () => {
      //define the fetch request (returns a Promise/Response) as 'response'
      const response = await fetch(
        "https://bookymcbookface.herokuapp.com/users",
        {
          method: "GET",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      //call response, then, handle promise resolve/rejection
      response
        .json()
        .then((res) => {
          setUsers(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    //Call getAllUsers() everytime useEffect is triggered
    getAllUsers();
  }, [accessToken, pageUpdates]);

  if (users.length !== 0) {
    return (
      <Grid
        sm="12"
        spacing="5"
        justify="center"
        container
        className={classes.UserIndexContainer}
      >
        {/* Create a card for every user that isn't the authenticated user */}
        {users.map((selected) => {
          if (selected._id !== user._id) {
            return (
              <Grid item>
                <UserIndexCard
                  first_name={selected.first_name}
                  last_name={selected.last_name}
                  pageUpdates={pageUpdates}
                  setPageUpdates={setPageUpdates}
                  authUser={user._id}
                  profileUser={selected._id}
                  profilePic={selected.profileImgUrl}
                  friendsCurrent={selected.friends.current}
                  friendsPendOut={selected.friends.pendOut}
                  friendsPendIn={selected.friends.pendIn}
                  profileUrl={selected.userurl}
                />
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    );
  }
  return (
    <Grid
      sm="12"
      spacing="5"
      justify="center"
      container
      className={classes.UserIndexContainer}
    >
      <Grid item>
        <Typography variant="h4">{"Loading.."}</Typography>
      </Grid>
    </Grid>
  );
};

export default UserIndex;
