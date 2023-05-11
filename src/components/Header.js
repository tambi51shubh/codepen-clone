import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Login from './Login';
import { DataContext } from '../context/DataProvider';
import { auth } from '../authentication/Auth';
import { signOut } from 'firebase/auth';
import SaveProject from './SaveProject';
import ViewProjects from './ViewProjects';

const Header = ({viewMode, onModeChanged, darkMode }) => {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(false);
  const [loginProps, setLoginProps] = useState({});
  const { username, login, setLogin, setUsername, saveSrc, projectTitle } = useContext(DataContext);
  const handleClose = () => {
    setOpen(false);
    setProjects(false);
  };
  const handleOpen = (loginType) => {
    setOpen(true);
    if (loginType === "login") {
      setLoginProps(
        {
          type: loginType,
          titleText: "Log In to Your Account",
          headingText: "Log In"
        }
      )
    } else if (loginType === "signup") {
      setLoginProps(
        {
          type: loginType,
          titleText: "Sign Up to Create Your Account",
          headingText: "Sign Up"
        }
      )
    }
  };
  const handleProjects = () => {
    setProjects(true);
  };
  const checkUserActivity = () => {
    login ? handleSignOut() : handleOpen("login");
  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setLogin(false);
      setUsername('');
    }).catch((error) => {
      console.log(error);
    });
  }
   
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" style={{ backgroundColor: viewMode.backgroundColor, color: viewMode.color, height: '52px' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              sx={{ mr: 2 }}
            >
              <DeveloperModeIcon />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            {username && `${username}'s Den!` || "Coder's Den"}
            </Typography>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            {login && projectTitle || ""}
            </Typography>
            <Button variant='contained' sx={{ marginRight: '20px', background: 'hsl(227.3684210526deg 12.2580645161% 30.3921568627%)' }} onClick={checkUserActivity}>
            {login ? 'Sign Out' : 'Log In'}
            </Button>
            <Button variant='contained'  sx={{ marginRight: '10px', background: 'hsl(227.3684210526deg 12.2580645161% 30.3921568627%)' }} onClick={() => handleOpen("signup")}>
            {login ? 'Save Project' : 'Sign Up'}
            </Button>
            {
              login && <Button variant='contained'  sx={{ marginRight: '10px', background: 'hsl(227.3684210526deg 12.2580645161% 30.3921568627%)' }} onClick={() => handleProjects()}>
                View Projects
              </Button>
            }
            <Button onClick={onModeChanged} color="inherit">
              {
                  darkMode ? <Brightness3Icon style={{ color: viewMode.color }}/> : <WbSunnyIcon style={{ color: viewMode.color }}/>
              }
            </Button>
          </Toolbar>
        </AppBar>
        {login && <SaveProject handleClose={handleClose} open={open} /> || <Login handleClose={handleClose} open={open} loginProps={loginProps} />}
        {login && <ViewProjects handleClose={handleClose} open={projects} />}
    </Box>
  );
}

export default Header;
