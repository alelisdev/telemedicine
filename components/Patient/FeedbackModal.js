import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Rating from '../Common/Rating';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';
import NotificationManager from 'react-notifications/lib/NotificationManager';

export default function FeedbackDialog(props) {
    const { open, handleClose, details } = props;

    const [reviews, setReviews] = useState('');
    const [rating, setRating] = useState(details.feedback);

    const submitFeedback = async () => {
        if(reviews == '') {
            NotificationManager.warning('Waring Message', 'Review can not be empty.');
            return;
        }
        const url = `${baseUrl}/api/appointment/feedback`
        axios.post(url, { reviews, rating, id:details._id })
        .then((res) => {
            setReviews('')
            setRating(0)
            NotificationManager.success('Success Message', res.data.msg);
        })
        .catch((err) => {
            console.log(err);
            NotificationManager.error('Error Message', 'Something went wrong.');
        });
        handleClose();
    }

    const handleChange = (e) => {
        setReviews(e.target.value);
    }


    return (
        <div>
            <Dialog maxWidth='md' fullWidth open={open} onClose={handleClose}>
                <DialogContent>
                    <h3 className='text-center'>It will be helpful If you share your experiences.</h3>
                    <div className='text-center mt-5'>
                        <Rating edit={true} setRating={setRating} rating={rating} />
                    </div>
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="review"
                        multiline
                        label="Review"
                        type="text"
                        name='review'
                        onChange={handleChange}
                        value={reviews}
                        rows={5}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={submitFeedback}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
