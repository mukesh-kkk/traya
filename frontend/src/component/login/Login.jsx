import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import "./Login.css";
import { useDispatch } from "react-redux";
import { loginEndPoints, signupEndPoints } from "../../api";
import { saveUserData } from "../../redux/userReducer/actions";
// TODO remove, this demo shouldn't need to reset the theme.

export default function SignInSide() {
  const [registerMode, setRegister] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");
    const name = data.get("name");

    if (!registerMode) {
      axios
        .post(loginEndPoints, {
          email,
          password,
        })
        .then((res) => {
          dispatch(saveUserData(res.data.data));
          navigate("/shop/items");
        });
    } else {
      axios
        .post(signupEndPoints, {
          email,
          password,
          name,
        })
        .then((res) => {
          dispatch(saveUserData(res.data.data));
          navigate("/shop/items");
        });
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/108359509/photo/couple-riding-bicycles-underneath-tree.jpg?s=1024x1024&w=is&k=20&c=4Uemrte4iBsxM9trRxowLk6k1Wy7E7DakDY6A-l6nUc=)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            {registerMode ? "Sign Up" : "Login"}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            {registerMode ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="User Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
            ) : (
              <></>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />

            <Button
              className="button"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {registerMode ? "Sign up " : "Log in"}
            </Button>
            <Grid container>
              <Grid
                onClick={() => setRegister(!registerMode)}
                item
                style={{ cursor: "pointer" }}
              >
                {!registerMode
                  ? "Don't have an account? Sign Up"
                  : "Have an account? Log In"}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
