import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ImgUpload from "../../ImageUpload/ImgUpload";
import Profile from "../../ImageUpload/Profile";

const INITIAL_STATE = {
    title: '',
    content: '',
    imagePath: '',
}

export default function EditModal(props) {

    const { open, handleClose, isnew } = props; 
    const [active, setActive] = useState('edit');
    const [imagePreviewUrl , setImagePreviewUrl] = useState('');
    const [file, setFile] = useState(null);
    const [data, setData] = useState(INITIAL_STATE);


    const handleSubmit= e =>{
        e.preventDefault();
        let activeP = active === 'edit' ? 'profile' : 'edit';
        setActive(activeP);
    }

    const photoUpload = e => {
        e.preventDefault();

        const reader = new FileReader();

        const tempFile = e.target.files[0];

        reader.onloadend = () => {
            setFile(tempFile);
            setImagePreviewUrl(reader.result);
        }

        reader.readAsDataURL(tempFile);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                { isnew ? 'New' : 'Edit'}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To add the new blog, please enter new Title, Contents and Image here.
                </DialogContentText>
                <div className='row'>
                    <div className="col-lg-5 mt-2 text-center">
                        {(active === 'edit')?(
                            <ImgUpload onChange={photoUpload} src={imagePreviewUrl}/>
                        ):(
                            <Profile 
                            onSubmit={handleSubmit} 
                            src={imagePreviewUrl} />)}
                    </div>
                    <div className='col-lg-7 mt-2'>
                        <TextField
                            required
                            id="outlined-required"
                            label="Title"
                            fullWidth
                            defaultValue={data.title}
                        />
                        <TextField
                            required
                            className='mt-4'
                            id="outlined-multiline-static"
                            label="Contents"
                            multiline
                            fullWidth
                            rows={4}
                            defaultValue={data.content}
                        />
                    </div>
                </div>
                
                
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
        </Dialog>
    );
}
