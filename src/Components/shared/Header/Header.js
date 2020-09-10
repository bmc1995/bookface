import React, { useContext } from "react";

import {
  AppBar,
  Toolbar,
  Menu,
  IconButton,
  Typography,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import { AccessContext } from "../../../AccessContext";

const HeaderComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { user, setUser } = useContext(UserContext);
  const { setAccessToken } = useContext(AccessContext)

  const clickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    //remove loggedIn cookie then set accessToken and user to null
    document.cookie = "loggedIn=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setAccessToken(null)
    setUser(null)
    handleClose()
  }

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Render menu if user logged in */}
        {user ? (
          <>
            <IconButton
              edge="start"
              className="navMenuButton"
              color="inherit"
              aria-label="menu"
              onClick={(e) => clickHandler(e)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >

              <MenuItem
                color="textPrimary"
                component={Link}
                to="/dashboard"
                onClick={handleClose}
              >
                Timeline
              </MenuItem>
              <MenuItem
                color="textPrimary"
                component={Link}
                to={"/userIndex"}
                onClick={handleClose}
              >
                User List
              </MenuItem>
              <MenuItem
                color="textPrimary"
                component={Link}
                children={Link}
                to={`/profile/${user.userurl}`}
                onClick={handleClose}
              >
                My Profile
              </MenuItem>
              <MenuItem
                color="textPrimary"
                component={Link}
                to={`/profile/${user.first_name}${user.last_name}/edit`}
                onClick={handleClose}
              >
                Edit Profile
              </MenuItem>
              <MenuItem
                color="textPrimary"
                component={Link}
                onClick={handleLogout}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : null}
        <Typography variant="h6" color="inherit">
          {document.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;