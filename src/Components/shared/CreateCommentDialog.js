import React, { useState, useContext } from "react";
import {
  TextField,
  Dialog,
  Button,
  DialogContent,
  DialogActions,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { Form, useField, Formik } from "formik";
import * as yup from "yup";
import { UserContext } from "../../Context/UserContext";
import { AccessContext } from "../../Context/AccessContext";

//create css for this component
const useStyles = makeStyles({
  interactionButton: {
    padding: "0",
    margin: "0",
  },
});
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
  message: yup.string().required("Comment cannot be empty.").trim(),
});

const CreateCommentDialog = (props) => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);
  const { accessToken } = useContext(AccessContext);
  const classes = useStyles();

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
    response
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <IconButton
        className={classes.interactionButton}
        onClick={handleClickOpen}
      >
        <ChatBubbleIcon fontSize="small" />
        {/* display number of comments next to icon */}
        {props.postComments.length}
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <Formik
          initialValues={{
            author: `${user._id}`,
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            handleSubmit(
              `https://bookymcbookface.herokuapp.com/comments/${props.postId}`,
              data
            );
            resetForm();
            setSubmitting(false);
            handleClose();
            //setState to reload components after deletion
            props.setRefreshInfo(props.refreshInfo + 1);
          }}
        >
          {({ isSubmitting }) => (
            <>
              <Form>
                <DialogContent>
                  <MyTextField
                    placeholder="Type your comment.."
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
    </>
  );
};

export default CreateCommentDialog;
