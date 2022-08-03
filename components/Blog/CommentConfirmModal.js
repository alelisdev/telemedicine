import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';
import NotificationManager from 'react-notifications/lib/NotificationManager';

export default function CommentConfirmModal(props) {
  
    const { open, handleClose, active, isUp } = props;

    const handleUp = () => {
        const url = `${baseUrl}/api/comments/up`
        axios.post(url, {id: active}).then((res) => {
            NotificationManager.success('Success Message', res.msg);
        }).catch(() => {
            NotificationManager.error('Error Message', 'Something went wrong.');
        })

        handleClose();
    }

    const handleDown = () => {
        const url = `${baseUrl}/api/comments/down`
        axios.post(url, {id: active}).then((res) => {
            NotificationManager.success('Success Message', res.msg);
        }).catch(() => {
            NotificationManager.error('Error Message', 'Something went wrong.');
        })
        handleClose();
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {isUp ? 'Would you like to recommend this comment?' : 'Are you against this comment?'}
            </DialogTitle>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={isUp ? handleUp : handleDown} autoFocus>
                Ok
            </Button>
            </DialogActions>
        </Dialog>
    );
}