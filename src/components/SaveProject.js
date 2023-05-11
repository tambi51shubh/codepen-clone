import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataContext } from '../context/DataProvider';

const SaveProject = ({ open, handleClose }) => {
    const { src, setSaveSrc, saveSrc, html, js, css, setProjectTitle } = useContext(DataContext);
    const [projectName, setProjectName] = useState('');

    const handleSave = () => {
        setSaveSrc([
            ...saveSrc,
            {
                projectName: projectName,
                id: saveSrc.length + 1,
                savedHtml: html,
                savedJs: js,
                savedCss: css,
                savedSrcCode: src
            }
        ])
        setProjectTitle(projectName);
        handleClose();
    }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nailed It !</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Save your glory in here with the most perfect name. We
            are proud of you. Happy Coding!!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="text"
            fullWidth
            onChange={(e) => setProjectName(e.target.value)}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save Project</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default SaveProject;
