// Login.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/mainpage");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
    <div style={{  marginTop:"10%",justifyContent:"center"}}>  
    <Container component="main" maxWidth="xs">
      <div >
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleSubmit}>
        <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
        <Link to="/register">Don't have an account? Register here.</Link>
      </div>
    </Container>
    </div>
    </>
  );
};

export default Login;
