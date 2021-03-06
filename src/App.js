import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import AuthLanding from "./Components/Pages/Landing/AuthLanding";
import Layout from "./Components/shared/Layout";
import DashboardComponent from "./Components/Pages/Dashboard/dashboard";
import ProfileComponent from "./Components/Pages/Profile/Profile";

import { UserContext } from "./Context/UserContext";
import { AccessContext } from "./Context/AccessContext";
import { Typography } from "@material-ui/core";
import UserIndex from "./Components/Pages/UserIndex/UserIndex";

const App = () => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
//runs on component load or when there are changes to dependencies
  useEffect(() => {
    //define the fetch request (returns a Promise/Response) as 'response'
    async function checkLoggedIn() {
      const response = await fetch("https://bookface-auth.herokuapp.com/userauth/curruser", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      //call response, then, handle promise resolve/rejection
      response.json().then((data) => {
        let currUser = data.user;
        console.log(currUser);
        setUser(currUser);
        setAccessToken(data.token);
        setIsLoading(false);
      });
    }
    if (!document.cookie.includes("loggedIn=true")) {
      setIsLoading(false);
    } else if (user == null) {
      checkLoggedIn();
    }
  }, [user]);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AccessContext.Provider value={{ accessToken, setAccessToken }}>
        <Layout />
        {/* both defined? */}
        {user && accessToken ? (
          <Switch>
            <Route
              path="/auth"
              render={() => <h1>You're already logged in</h1>}
            />
            <Route path="/logout" render={() => <h1>Logout route works</h1>} />
            <Route
              path="/profile/:userurl"
              exact
              children={<ProfileComponent />}
            />
            <Route path="/dashboard" children={<DashboardComponent />} />
            <Route path="/userIndex" children={<UserIndex />} />
            <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
            <Route path="*" render={() => <h1>404 Not Found</h1>} />
          </Switch>
        ) : (
          //if not defined
          <Switch>
            <Route path="/" children={<AuthLanding />} />
            <Redirect to="/" />
          </Switch>
        )}
      </AccessContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
