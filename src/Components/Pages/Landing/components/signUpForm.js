import React from "react";

import { TextField, Button, Box, makeStyles, Typography } from "@material-ui/core";
import { Formik, useField, Form } from "formik";
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
      placeholder={placeholder}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  firstName: yup.string().required().max(35),
  lastName: yup.string().required().max(35),
  email: yup.string().required().email("Please enter a valid email"),
  password: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Z0-9_\-]{4,}$/m,
      "Must be atleast 4 characters, alphanumeric."
    ),
  passwordConfirm: yup
    .string()
    .required()
    .test("passwords-match", "Passwords don't match", function (value) {
      return this.parent.password === value;
    }),
  userurl: yup
  .string()
  .required()
  .trim()
  .lowercase()
  .test("no whitespace", "no whitespace", function (value) {
    value.includes(" ") ? false : true;
  })
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
  response.json()
  .then((data) => {
    console.log(data)
  })
}

const SignUpForm = (props) => {
  const classes = useStyles()
  return (
    <Box className={classes.signInContainer}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirm: "",
          userurl: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          handleSubmit("https://bookface-auth.herokuapp.com/userauth/signup",data)
          resetForm({});
          setSubmitting(false);
          props.handleClose()
        }}
      >
        {({ isSubmitting }) => (
          <Box>
          <Typography variant="h6">Sign Up</Typography>
          <Form>
            <MyTextField
              placeholder="First Name.."
              name="first_name"
              type="input"
            />
            <div>
              <MyTextField
                placeholder="Last Name.."
                name="last_name"
                type="input"
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
                type="input"
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
