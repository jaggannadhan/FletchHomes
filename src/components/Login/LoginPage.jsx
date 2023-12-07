import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import howItWorks2 from '../../../images/howItWorks2.jpeg';
import { login } from '../../Apis/apis.js';
import InfoBanner from '../InfoBanner/InfoBanner.jsx';
import { validateEmail, setCookie, getCookie } from '../../Helper/helper.js';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to={{pathname: '..'}}>
        Fletch Homes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LoginPage() {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ showInfoBanner, setShowInfoBanner] = useState({open: false, message: "", success: false});

  useEffect( () => {
    if(getCookie("user")) {
      window.location.href = '../home';
      return;
    }
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    if(!data.get('email') || !data.get('password') ) {
      setShowInfoBanner({
        open: true, message: "Please fill in all the fields!", success: false
      });
      return;
    }
    
    if(!validateEmail(data.get("email"))){
      setShowInfoBanner({
        open: true, message: "The Email Addres you have entered is Invalid!", success: false
      });
      return;
    }

    if(!isLoading) {
      setIsLoading(true);
      login(data).then((res) => {
          if(!res || !(res.success)) {
            setShowInfoBanner({
              open: true, message: "Opps! there occurs to be an issue, please try again after sometime!", success: false
            });
            setIsLoading(false);
            return;
          }
          setCookie("user", data.get("email"), 1);
          window.location.href = '../home';
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <InfoBanner {...showInfoBanner}/>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${howItWorks2})`,//'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={{pathname: '../signup/'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
