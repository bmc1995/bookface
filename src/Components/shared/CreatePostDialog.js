import React, { useState, useContext } from "react";
import {
  TextField,
  Dialog,
  Button,
  Box,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { Form, useField, Formik } from "formik";
import * as yup from "yup";
import { UserContext } from "../../Context/UserContext";
import { AccessContext } from "../../Context/AccessContext";
//define MyTextField as a modified material-ui component to work with Formik *DRY
const MyTextField = ({ placeholder, type, label, multiline, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      {...field}
      type={type}
      helperText={errorText}
      error={!!errorText}
      variant="outlined"
      placeholder={placeholder}
      label={label}
      multiline={multiline}
    />
  );
};
//give yup some guidelines to validate form inputs
const validationSchema = yup.object({
  message: yup
    .string()
    .required("Post cannot be empty.")
    .min(5, "Post must be atleast 5 characters.")
    .trim(),
});

const CreatePostDialog = (props) => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);
  const { accessToken } = useContext(AccessContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (url, values) => {
    //define the fetch request (returns a Promise/Response) as 'response'
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(values),
    });
    //call response, then, handle promise resolve/rejection
    response.json().then((data) => {
      console.log(data);
      handleClose();
      //setState to reload components
      props.setRefreshInfo(props.refreshInfo + 1);
    });
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create new post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Formik
          initialValues={{
            message: "",
            userId: user._id,
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            handleSubmit(
              "https://bookymcbookface.herokuapp.com/posts/create",
              data
            );
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <>
              <Form>
                <DialogContent>
                  <MyTextField
                    placeholder="What's goin' on?"
                    name="message"
                    multiline={true}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button color="primary" disabled={isSubmitting} type="submit">
                    Post
                  </Button>
                </DialogActions>
              </Form>
            </>
          )}
        </Formik>
      </Dialog>
    </Box>
  );
};

export default CreatePostDialog;
