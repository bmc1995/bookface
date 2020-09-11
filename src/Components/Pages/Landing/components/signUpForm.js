import React from "react";

import {
  TextField,
  Button,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Formik, useField, Form } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

const useStyles = makeStyles({
  signInContainer: {
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
  first_name: yup.string().required().max(35),
  last_name: yup.string().required().max(35),
  email: yup.string().required().email("Please enter a valid email"),
  password: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Z0-9_\-]{4,}$/m,
      "Must be atleast 4 characters, alphanumeric."
    ),
  userurl: yup
    .string()
    .required()
    .lowercase()
    .matches(/^[a-zA-Z_\-]{5,}$/m, "Must be atleast 5 characters, letters"),
});

async function handleSubmit(url, data) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  response
    .json()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

const SignUpForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.signInContainer}>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          passwordConfirm: "",
          userurl: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          handleSubmit(
            "https://bookface-auth.herokuapp.com/userauth/signup",
            data
          );
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Box>
            <Typography variant="h6">Sign Up</Typography>
            <Form>
            <div>
              <MyTextField
                placeholder="First Name.."
                name="first_name"
                type="text"
              />
              </div>
              <div>
                <MyTextField
                  placeholder="Last Name.."
                  name="last_name"
                  type="text"
                />
              </div>
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
              <div>
                <MyTextField
                  placeholder="Confirm Password.."
                  name="passwordConfirm"
                  type="password"
                />
              </div>
              <div>
                <MyTextField
                  placeholder="Profile Url"
                  name="userurl"
                  type="text"
                />
              </div>
              <div>
                <Button disabled={isSubmitting} type="submit">
                  submit
                </Button>
              </div>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default SignUpForm;
