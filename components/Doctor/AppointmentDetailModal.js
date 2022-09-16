import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import parseISOStringToDate from '../../utils/parseISOStringToDate';
import Rating from '../Common/Rating';

export default function AppointmentDetailModal(props) {
    const { open, details, handleClose } = props;
    return (
        <div>
            <Dialog maxWidth='md' fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Appointment Detail</DialogTitle>
                <DialogContent>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 appointment-detail">
                            <h6>Name</h6>
                            <p>{details.name}</p>
                            <p></p>
                        </div>
                        <div className="col-lg-6 col-sm-12 appointment-detail">
                            <h6>Email</h6>
                            <p>{details.email}</p>
                            <p></p>
                        </div>
                        <div className="col-lg-6 col-sm-12 appointment-detail">
                            <h6>Phone Number</h6>
                            <p>{details.phone}</p>
                            <p></p>
                        </div>
                        <div className="col-lg-6 col-sm-12 appointment-detail">
                            <h6>Age</h6>
                            <p>{details.age}</p>
                            <p></p>
                        </div>
                        <div className="col-lg-6 col-sm-12 appointment-detail">
                            <h6>Book Date</h6>
                            <p>{parseISOStringToDate(details.book_date)}</p>
                            <p></p>
                        </div>
                        <div className="col-lg-6 col-sm-12 appointment-detail">
                            <h6>Book Time</h6>
                            <p>{details.book_time}</p>
                            <p></p>
                        </div>
                        {
                            details.feedback !== 100 ? (
                                <div className="col-lg-12 col-sm-12 appointment-detail">
                                    <h6>Feedback</h6>
                                    <p><Rating edit={false} rating={details.feedback}/></p>
                                    <p></p>
                                </div>
                            ) : ''
                        }
                        <div className="col-lg-12 col-sm-12 appointment-detail">
                            <h6>Meeting Link</h6>
                            <p>{details.meetingUrl}</p>
                        </div>
                        {
                            details.reviews !== '' ? (
                                <div className="col-lg-12 col-sm-12 appointment-detail">
                                    <h6>Reviews</h6>
                                    <DialogContentText>
                                        {details.reviews}
                                    </DialogContentText>
                                </div>
                            ) : ''
                        }
                    </div>
                </DialogContent>

                <DialogActions>

                <Button onClick={handleClose}>Ok</Button>

                </DialogActions>

            </Dialog>
        </div>
    );
}
