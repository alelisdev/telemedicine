import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { NotificationManager } from 'react-notifications';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';

const INITIAL_STATE = {
    blog_id: '',
    content: '',
    name: '',
    email: '',
    phone: '',
    subject: ''
}

const CommentForm = (props) => {

    const {blog_id} = props;

    const [comment, setComment] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setComment(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            comment.blog_id = blog_id;
            const url = `${baseUrl}/api/comments/add`;
            axios.post(url, {comment}).then((res) => {
                if(res.data.type == 'success') {
                    NotificationManager.success('Success Message', res.data.msg);
                }
                setComment(INITIAL_STATE);
            }).catch((err) => {
                console.log(err);
            })
        } catch (error) {
            NotificationManager.error('Error message', 'Something went wrong.');
        }
    };

    return (
        <div className="blog-details-form pb-100">
            <div className="blog-details-form-wrap">
                <h2>Drop your comment</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <textarea 
                            name='content' 
                            ref={register({required: true})} 
                            onChange={handleChange}
                            value={comment.content}
                            className="form-control" 
                            id="your_comments" 
                            rows="8" 
                            placeholder="Your Comments">
                        </textarea>
                        <div className='invalid-feedback' style={{display: 'block'}}>
                            {errors.content && 'Comment is required.'}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name='name'
                                    value={comment.name}
                                    onChange={handleChange}
                                    ref={register({required: true})}
                                    className="form-control"
                                    placeholder="Name" 
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.name && 'Name is required.'}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    value={comment.email}
                                    onChange={handleChange}
                                    ref={register({ required: true, pattern: /^\S+@\S+$/i })} 
                                    className="form-control" 
                                    placeholder="Email" 
                                    name='email'
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.email && 'Email is required.'}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input
                                    name='phone'
                                    value={comment.phone}
                                    onChange={handleChange}
                                    ref={register({ required: true})} 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Phone" 
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.phone && 'Phone Number is required.'}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name='subject'
                                    value={comment.subject}
                                    onChange={handleChange}
                                    ref={register({required: true})} 
                                    className="form-control" 
                                    placeholder="Subject" 
                                />
                                <div className='invalid-feedback' style={{display: 'block'}}>
                                    {errors.subject && 'Subject is required.'}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-left">
                        <button type="submit" className="btn blog-details-form-btn">Post A Comment</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CommentForm;