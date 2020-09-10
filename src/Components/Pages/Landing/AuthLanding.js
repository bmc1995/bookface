import React from "react";
import SignInForm from "./components/signInForm";
import { Paper, Box } from "@material-ui/core";


const AuthLanding = () => {

    return (
      <Box paddingTop="2rem" display="flex" justifyContent="center">
        <Paper elevation={5}>
        <SignInForm />
        </Paper>
      </Box>
    );
  }

export default AuthLanding;
