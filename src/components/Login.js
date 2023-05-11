import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth } from '../authentication/Auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/tambi51shubh">
          Shubh Tambi
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();
  
  const Login = ({ handleClose, open, loginProps }) => {
    const [typedUsername, setTypedUsername] = useState('');
    const { setUsername, email, password, setEmail, setPassword, setLogin } = useContext(DataContext);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        marginTop: '20px'
    };

      const handleLoginSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCred) => {
            setLogin(true);
            setUsername(userCred.user.displayName);
            handleClose();
        }).catch((error) => console.log(error));
      };
      const handleSignupSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCred) => {
            updateProfile(userCred.user, {
                displayName: typedUsername
            })
            setLogin(true);
            setUsername(typedUsername);
            handleClose();
        }).catch((error) => console.log(error));
      };
  return (
    <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center'}}>
              {loginProps.titleText}
            </Typography>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                    sx={{
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {loginProps.headingText}
                    </Typography>
                    <Box component="form" onSubmit={loginProps.type === "login" ? handleLoginSubmit : handleSignupSubmit } noValidate sx={{ mt: 1 }}>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        />
                        {
                            loginProps.type === "signup" && 
                                <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="username"
                                label="Username"
                                type="text"
                                id="username"
                                onChange={(e) => {
                                    e.preventDefault();
                                    setTypedUsername(e.target.value);
                                }}
                                autoComplete="username"
                                />
                        }
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        {loginProps.headingText}
                        </Button>
                         {
                            loginProps.type === "login" &&
                                <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                    Forgot password?
                                    </Link>
                                </Grid>
                                </Grid>
                         }
                    </Box>
                    </Box>
                    <Copyright sx={{ mt: 4, mb: 4 }} />
                </Container>
            </ThemeProvider>
          </Box>
        </Modal>
  )
}

export default Login;