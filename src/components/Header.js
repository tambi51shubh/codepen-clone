import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const Header = ({viewMode, onModeChanged, darkMode}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: viewMode.backgroundColor, color: viewMode.color, minHeight: '7vh'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            sx={{ mr: 2 }}
          >
            <DeveloperModeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coder's Home
          </Typography>
          <Button onClick={onModeChanged} color="inherit">
            {
                darkMode ? <Brightness3Icon style={{ color: viewMode.color }}/> : <WbSunnyIcon style={{ color: viewMode.color }}/>
            }
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

//060606, f5f5f5 for black & white header