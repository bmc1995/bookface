import React, { useContext, useState } from "react";
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

import { AccessContext } from "../../../../Context/AccessContext";
//create css for this component
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "min-width",
  },
});

async function handleSubmit(url, img, token, refresh) {
  //define imageData as FormData Object, append File (img) to imageData
  const imageData = new FormData();
  imageData.append("img", img);
  //define the fetch request (returns a Promise/Response) as 'response'
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: imageData,
  });
  //call response, then, handle promise resolve/rejection
  response
    .json()
    .then((res) => {
      //TODO add image uploaded msg
      console.log(res);
      console.log("end handleSubmit");
      //setState to reload components after deletion
      refresh.setRefresh(refresh.refreshInfo + 1);
    })
    .catch((err) => console.log("Error", err));
}

const EditProfileDialog = (props) => {
  let [selection, setSelection] = useState();
  const { accessToken } = useContext(AccessContext);
  const classes = useStyles();

  const selectionChangeHandler = (image) => {
    setSelection(image);
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
          onClick={() => {
            handleSubmit(
              "https://bookymcbookface.herokuapp.com/upload/s3ImgUpload",
              selection,
              accessToken,
              //send both props inside an object to the 'refresh' parameter
              {
                setRefresh: props.setRefreshInfo,
                refreshInfo: props.refreshInfo,
              }
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