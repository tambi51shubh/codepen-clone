import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemText from '@mui/material/ListItemText';
import { DataContext } from '../context/DataProvider';
import { Typography } from '@mui/material';

const ViewProjects = ({ open, handleClose }) => {
  const { saveSrc, setSrc, setHtml, setCss, setJs, setLoading, setProjectTitle } = useContext(DataContext);

  const handleFindProject = (id) => {
    setLoading(true);
    handleClose();
    const findSrc = saveSrc.find((src) => id === src.id);
    setProjectTitle(findSrc.projectName);
    setHtml(findSrc.savedHtml);
    setJs(findSrc.savedJs);
    setCss(findSrc.savedCss);
    setTimeout(() => {
      setLoading(false);
      setSrc(findSrc.savedSrcCode);
    }, 1500)
  }

  const list = () => (
    <Box
      open={open}
      sx={{ width: 250 }}
      role="presentation"
    >
    <Typography
          sx={{ flex: '1 1 100%', padding: '10px', fontWeight: 'bold' }}
          variant="h6"
          component="div"
        >
          My Projects
        </Typography>
      <List>
        {saveSrc.map((src) => (
          <ListItem key={src.id} disablePadding onClick={() => handleFindProject(src.id)}>
            <ListItemButton>
              <FolderIcon />
              <ListItemText primary={src.projectName} sx={{ padding: '3px 10px' }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
          <Drawer
            open={open}
            onClose={handleClose}
          >
            {list()}
          </Drawer>
  );
}
export default ViewProjects;
