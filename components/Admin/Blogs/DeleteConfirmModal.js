import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import baseUrl from '../../../utils/baseUrl';
import axios from 'axios';
import NotificationManager from 'react-notifications/lib/NotificationManager';

export default function AlertDialog(props) {
  
    const { open, handleClose, selected, setBlogs, setSelected } = props;

    const handleClickDelete = () => {
        const url = `${baseUrl}/api/blogs/delete`;
        axios.post(url, {selected})
        .then((res) => {
            NotificationManager.success('Success message', 'Profile Successfully Submitted!');
            setBlogs(res.data);
            setSelected([]);
            handleClose();
        }).catch((err) => {
            NotificationManager.error('Error message', 'Something went wrong');
        });
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Are you sure to delete?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                We can't rollback this operation.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClickDelete} autoFocus>
                Ok
            </Button>
            </DialogActions>
        </Dialog>
    );
}