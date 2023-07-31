import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Link,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles.js";
import Login from "../Auth/Login.jsx";
import toast from "react-hot-toast";
// import Register from "../Auth/Register.jsx";
import { useAuth } from "../context/auth.jsx";

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    navigate('/')
  };

  const handleLoginClick = () => {
    setLoginOpen(true);
  };



  const handleCloseDialogs = () => {
    setLoginOpen(false);

  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography onClick={()=>navigate('/')}variant="h5" className={classes.title}>
            Travel Advisor
          </Typography>
          <Box display="flex">
           
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Autocomplete>
          </Box>
          
          <div style={{ display: "flex", alignItems: "center" }}>
          {!auth?.user ? (
                    <Button  style={{ marginLeft: "auto" }} color="inherit" onClick={()=>navigate('/login')}>
                      Favorites
                    </Button>
              ) : (

                <Button style={{ marginLeft: "auto" }} color="inherit" onClick={()=>navigate('/favorites')}>
                Favorites
              </Button>

              )}

          {!auth?.user ? (
                    <Button style={{ marginLeft: "8px" }} color="inherit" onClick={()=>navigate('/login')}>
                      Login
                    </Button>
              ) : (

                        <Button
                          style={{ marginLeft: "8px" }}
                          color="inherit"
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>

              )}
              </div>
        </Toolbar>
        
      </AppBar>
    </>
  );
};

export default Header;