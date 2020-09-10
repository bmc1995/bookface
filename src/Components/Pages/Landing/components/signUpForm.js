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
  email: yup.string().required().email("Must be a valid E-mail"),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      "Must be atleast 6 characters, as well as One uppercase, One lowercase, One number and One special case character"
    ),
  passwordConfirm: yup
    .string()
    .required()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});

const SignUpForm = () => {
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
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
          resetForm({});
        }}
      >
        {({ isSubmitting }) => (
          <Box>
          <Typography variant="h6">Sign Up</Typography>
          <Form>
            <MyTextField
              placeholder="First Name.."
              name="firstName"
              type="input"
            />
            <div>
              <MyTextField
                placeholder="Last Name.."
                name="lastName"
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
