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
import { UserContext } from "../../UserContext";
import { AccessContext } from "../../AccessContext";

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
  //AUTH WORKS!!!!!!!!!!!!!!!!!!!!!!!!! 7/23/20 22:11
  const handleSubmit = async (url, values) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify(values),
    });
    response.json().then((data) => {
      console.log(data)
      handleClose()
      props.setRefreshInfo(props.refreshInfo + 1)
    })
  };

  // async function handlePostSubmit(url, value) {
  //   const response = "hi";
  // }

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create new post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Formik
          initialValues={{
            message: "",
            userId: user._id
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            handleSubmit("https://bookymcbookface.herokuapp.com/posts/create", data);
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
