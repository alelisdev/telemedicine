import React, { useState } from 'react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { useForm } from 'react-hook-form';

const NewsletterForm = () => {

    const [email, setEmail] = useState('');

    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        setEmail(e.target.value);
    }

    const onSubmit = async () => {
        try {
            const url = `${baseUrl}/api/newsletter/add`;
            axios.post(url, { email })
            .then((res) => {
                NotificationManager.success('Success message', 'Successfully Submitted.');
            })
            .catch((err) => {
                NotificationManager.error('Error message', 'Email already registered.');
            });
        } catch (error) {
            NotificationManager.error('Error message', 'Something went wrong');
        }
    }

    return (
        <div className="newsletter-area ptb-100">
            <div className="container">
                <div className="row newsletter-wrap align-items-center">
                    <div className="col-lg-6">
                        <div className="newsletter-item">
                            <h2>Join Our Newsletter</h2>
                            <p>Whether you're interested in news, policy, or technology, these top telemedicine newsletters will keep you connected to what's new.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="newsletter-item">
                            <div className="newsletter-form">
                                <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)}>
                                    <input ref={register({ required: true, pattern: /^\S+@\S+$/i })} type="email" value={email} onChange={handleChange} className="form-control" placeholder="Enter Your Email" name="email" required />
    
                                    <button className="btn newsletter-btn" type='submit'>
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterForm;