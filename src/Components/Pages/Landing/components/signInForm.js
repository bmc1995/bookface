import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { TextField, Button, Box, makeStyles, Dialog } from "@material-ui/core";
import { Formik, useField, Form } from "formik";
import * as yup from "yup";
import { UserContext } from "../../../../UserContext";
import { AccessContext } from "../../../../AccessContext";
import SignUpForm from "./signUpForm";

const useStyles = makeStyles({
  signInContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "20rem",
    textAlign: "center",
    "& Form": {
      padding: "1rem",
      "& div": {
        margin: "0.5rem auto",
      },
    },
  },
});

const MyTextField = ({ placeholder, type, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      {...field}
      type={type}
      helperText={errorText}
      error={!!errorText}
      variant="outlined"
      label={placeholder}
    />
  );
};

const validationSchema = yup.object({
  email: yup.string().required().email("Must be a valid e-mail"),
  password: yup.string().required(),
});

const SignInForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const { setAccessToken } = useContext(AccessContext);
  const [signUpOpen, setSignUpOpen] = useState(false)

  const handleDialogOpen = () => {
    setSignUpOpen(true);
  };

  const handleDialogClose = () => {
    setSignUpOpen(false);
  };

  async function handleSubmit(url, values) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    response
      .json()
      .then((data) => {
        //extract access token from response
        //extract user object from response
        let currUser = Object.entries(data.user)[0][1];
        console.log(currUser);
        setUser(currUser);
        setAccessToken(data.token);
        history.push("/dashboard");
      })
      .catch((error) => {
        return console.error(error);
      });
  }

  return (
    <Box className={classes.signInContainer}>
      <h1>Sign in</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          handleSubmit("http://localhost:4000/userauth/login", data);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Box>
            <Form>
              <div>
                <MyTextField placeholder="E-mail.." name="email" type="email" />
              </div>
              <div>
                <MyTextField
                  placeholder="Password.."
                  name="password"
                  type="password"
                />
              </div>
              <Button
                color="primary"
                variant="contained"
                disabled={isSubmitting}
                type="submit"
              >
                submit
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
      <p>
        Not a member?{" "}
        <Button onClick={handleDialogOpen} color="primary" variant="text">
          Sign Up!
        </Button>
      </p>
      <Dialog fullWidth open={signUpOpen} onClose={handleDialogClose}>
          <SignUpForm />
      </Dialog>
    </Box>
  );
};

export default SignInForm;
