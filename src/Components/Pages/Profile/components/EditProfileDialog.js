import React, { useContext, useState } from "react";

// import { UserContext } from "../../../../UserContext";
import { AccessContext } from "../../../../AccessContext";
import {
  FormLabel,
  Button,
  Input,
  Box,
  Container,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";

async function handleSubmit(url, img, token, refresh) {
  const imageData = new FormData();
  imageData.append("img", img);

  console.log(img);

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "Content-Type": "multipart/form-data"
      Authorization: `Bearer ${token}`,
    },
    body: imageData,
  });
  response
    .json()
    .then((res) => {
      console.log(res);
      console.log("end handleSubmit");
      refresh.setRefresh(refresh.refreshInfo + 1)
    })
    .catch((err) => console.log("Error", err));
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "min-width",
  },
});

const EditProfileDialog = (props) => {
  let [selection, setSelection] = useState();
  const { accessToken } = useContext(AccessContext);

  const classes = useStyles();

  const selectionChangeHandler = (image) => {
    setSelection(image);
    console.log(image);
    console.log("end selectionChangeHandler");
    console.log(selection);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h6" align="center">
        Upload Image
      </Typography>
      <Divider />
      <Box margin="2rem auto">
        <FormLabel form="file" htmlFor="file">
          Profile Picture
        </FormLabel>
        <div>
          <Input
            onChange={(e) => {
              selectionChangeHandler(e.target.files[0]);
            }}
            type="file"
            name="file"
          />
        </div>
        <Button
          onClick={(e) => {
            handleSubmit(
              "https://bookymcbookface.herokuapp.com/upload/s3ImgUpload",
              selection,
              accessToken,
              {setRefresh: props.setRefreshInfo, refreshInfo: props.refreshInfo}
            );
            props.handleClose();
          }}
        >
          Upload Photo
        </Button>
      </Box>
    </Container>
  );
};

export default EditProfileDialog;

// http://localhost:5000/upload/s3ImgUpload
