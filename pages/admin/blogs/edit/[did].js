import React, { useState, useEffect } from 'react';
import TopHeader from '../../../../components/_App/TopHeader';
import Navbar from '../../../../components/_App/Navbar';
import PageBanner from '../../../../components/Common/PageBanner';
import Footer from '../../../../components/_App/Footer';
import { useForm } from 'react-hook-form';
import baseUrl from '../../../../utils/baseUrl';
import { useRouter } from 'next/router';
import Profile from "../../../../components/ImageUpload/Profile";
import ImgUpload from "../../../../components/ImageUpload/ImgUpload";
import axios from 'axios';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import Multiselect from 'multiselect-react-dropdown';

const INITIAL_STATE = {
    _id: '',
    title: '',
    content: '',
    category: '',
    tags: []
}

const options = [
    {name: 'Option 1️', id: 1},{name: 'Option 2️', id: 2}
]

const EditBlog = () => {
    const router = useRouter();
    const { did } = router.query
    const { register, handleSubmit, errors } = useForm();

    const [blog, setBlog] = useState(INITIAL_STATE);
    const [file, setFile] = useState('');
    const [imagePreviewUrl, setImagePreviewUrl] = useState('/images/default-image.png');
    const [active, setActive] = useState('edit');

    const handleChange = e => {
        const { name, value } = e.target;
        setBlog(prevState => ({ ...prevState, [name]: value }));
    }

    const onSelect = (selectedList) => {
        setBlog(prevState => ({ ...prevState, tags: selectedList }));
    }
    
    const onRemove = (selectedList) => {
        setBlog(prevState => ({ ...prevState, tags: selectedList }));
    }

    const handleImageSubmit = e => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        const activeP = active === 'edit' ? 'profile' : 'edit';
        setActive(activeP);
    }

    const photoUpload = e => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        const reader = new FileReader();
        const tempFile = e.target.files[0];

        reader.onloadend = () => {
            setFile(tempFile);
            setImagePreviewUrl(reader.result);
        }
        reader.readAsDataURL(tempFile);
    }

    const onSubmit = () => {
        const url = `${baseUrl}/api/blogs/update`;
        const formData = new FormData(); 
        formData.append('image', file);
        formData.append('blog', JSON.stringify(blog));
        axios.post(url, formData)
        .then((res) => {
            console.log(res)
            NotificationManager.success('Success message', 'Profile Successfully Submitted!');
            router.push('/admin/blogs');
        }).catch((err) => {
            console.log(err)
            NotificationManager.error('Error message', 'Something went wrong');
        });
    }

    useEffect(() => {
        if(did) {
            const url = `${baseUrl}/api/blogs/${did}`;
            axios.get(url)
            .then( (res) => {
                setBlog(res.data);
                res.data.imagePath ? setImagePreviewUrl(`${baseUrl}/${res.data.imagePath}`) : setImagePreviewUrl('/images/default-image.png')
            })
            .catch ( () => {
                NotificationManager.error('Error message', 'Something went wrong.');
            });
        }   
    }, [did])

    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Blogs" 
                homePageUrl="/" 
                homePageText="Admin" 
                activePageText="Blogs" 
                bgImage="page-title-one" 
            /> 

            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <form className="blog-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-lg-3 text-center mt-3">
                                {(active === 'edit')?(
                                    <ImgUpload onChange={photoUpload} src={imagePreviewUrl}/>
                                ):(
                                    <Profile 
                                    onSubmit={handleImageSubmit} 
                                    src={imagePreviewUrl} />)}
                            </div>
                            <div  className="col-lg-8">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input 
                                            name="title"
                                            value={blog.title}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                            type="text" 
                                            className="form-control mt-1" 
                                            placeholder="Enter new blog Title." 
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.title && 'Email is required.'}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-5">
                                    <div className="form-group">
                                        <label>Content</label>
                                        <textarea className="form-control mt-1" value={blog.content} onChange={handleChange} ref={register({ required: true })} name='content' id="content" rows="3" placeholder="Enter new blog Content"></textarea>
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.content && 'Content is required.'}
                                        </div>  
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-5">
                                    <div className="form-group">
                                        <label htmlFor='category'>Category</label>
                                        <select className="form-control" value={blog.category} onChange={handleChange} ref={register({ required: true })} name="category">
                                            <option value="">--- Select a category ---</option>
                                            <option value="Health Care">Health Care</option>
                                            <option value="Medical Science">Medical Science</option>
                                            <option value="Covid-19">Covid-19</option>
                                        </select>
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.category && 'Category is required.'}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-5">
                                    <label>Tags</label>
                                    <Multiselect
                                        options={options} // Options to display in the dropdown
                                        selectedValues={blog.tags} // Preselected value to persist in dropdown
                                        onSelect={onSelect} // Function will trigger on select event
                                        onRemove={onRemove} // Function will trigger on remove event
                                        displayValue="name" // Property name to display in the dropdown options
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 mt-5">
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary signup-btn">Update</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>  
            <Footer />
        </>
    )
}

export default EditBlog;