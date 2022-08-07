import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Stepper from '../components/Stepper/Stepper';
import ImgUpload from "../components/ImageUpload/ImgUpload";
import Profile from "../components/ImageUpload/Profile";
import baseUrl from '../utils/baseUrl';
import { NotificationManager } from 'react-notifications';
import decodeToken from '../utils/decodeToken';
import { userService } from '../services';
import { useRouter } from 'next/router';

const StaffProfile = () => {
    const router = useRouter();
    const [data, setData] = useState({});

    const [acceptFirstTerms, setAcceptFirstTerms] = useState({
        checked: false,
        touched: false,
    }),
    [acceptSecondTerms, setAcceptSecondTerms] = useState({
        checked: false,
        touched: false,
    }),
    [acceptThirdTerms, setAcceptThirdTerms] = useState({
        checked: false,
        touched: false,
    }),
    [isSecondStepLoading, setIsSecondStepLoading] = useState(false);

    const firstTermsHandler = () => {
        setAcceptFirstTerms((prev) => ({ checked: !prev.checked, touched: true }));
    };

    const secondTermsHandler = () => {
        setAcceptSecondTerms((prev) => ({ checked: !prev.checked, touched: true }));
    };

    const thirdTermsHandler = () => {
        setAcceptThirdTerms((prev) => ({ checked: !prev.checked, touched: true }));
    };

    //for demo purposes only
    const timeout = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const secondStepAsyncFunc = async () => {
        //it can be an API call
        setIsSecondStepLoading(true);
        await timeout(2000);
        setIsSecondStepLoading(false);
    };

    /**** First Step ****/
    const [expFields, setExpFields] = useState([
        {
            title: '',
            company: '',
            location: '',
            country: '',
            startDate: '',
            endDate: '',
            description: ''
        }
    ])

    const handleExpChange = (idx, event) => {
        const {name, value} = event.target;
        let data = [...expFields];
        data[idx][name] = value;
        setExpFields(data);
    }

    const addExpFields = () => {
        let newfield = {
            title: '',
            company: '',
            location: '',
            country: '',
            startDate: '',
            endDate: '',
            description: ''
        }
        setExpFields([...expFields, newfield])
    }

    const removeExpFields = (index) => {
        let data = [...expFields];
        data.splice(index, 1)
        setExpFields(data);
    }

    const setCurrent = (index) => {
        let data = [...expFields];
        data[index].endDate = data[index].endDate == 'present' ? '' : 'present';
        setExpFields(data);
    }

    const [year, setYear] = useState('2022');
    const [years, setYears] = useState([]);

    /**** Second Step ****/
    const [eduFields, setEduFields] = useState([
        {
            school: '',
            degree: '',
            fieldOfStudy: '',
            startDate: '',
            endDate: '',
            description: ''
        }
    ]);

    const handleEduChange = (idx, event) => {
        const {name, value} = event.target;
        let data = [...eduFields];
        data[idx][name] = value;
        setEduFields(data);
    }

    const addEduFields = () => {
        let newfield = {
            school: '',
            degree: '',
            fieldOfStudy: '',
            startDate: '',
            endDate: '',
            description: ''
        }
        setEduFields([...eduFields, newfield])
    }

    const removeEduFields = (index) => {
        let data = [...eduFields];
        data.splice(index, 1)
        setEduFields(data);
    }
    /**
     * Third Step
     */
    
    const [license, setLicense] = useState('');
    const [licenseImage, setLicenseImage] = useState('/images/doctor-license.jpg');
    const [licenseActive, setLicenseActive] = useState('edit');

    const LicenseUpload = e => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        const reader = new FileReader();

        const tempFile = e.target.files[0];

        reader.onloadend = () => {
            setLicense(tempFile);
            setLicenseImage(reader.result);
        }

        reader.readAsDataURL(tempFile);
    }
    
    const handleLicenseSubmit= e => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        let activeP = active === 'edit' ? 'profile' : 'edit';
        setLicenseActive(activeP);
    }
    
    
    /**** last Step ****/
    const [lastFields, setLastFields] = useState(
        {
            phone: '',
            bio: '',
            major: '',
            address: ''
        }
    );
    const [avatar, setAvatar] = useState('');
    const [avatarImage, setAvatarImage] = useState('/images/user-img.png');
    const [active, setActive] = useState('edit');
  
    const avatarUpload = e => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        const reader = new FileReader();

        const tempFile = e.target.files[0];

        reader.onloadend = () => {
            setAvatar(tempFile);
            setAvatarImage(reader.result);
        }

        reader.readAsDataURL(tempFile);
    }
    
    const handleAvatarSubmit= e => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        let activeP = active === 'edit' ? 'profile' : 'edit';
        setActive(activeP);
    }

    const handleLastChange = (event) => {
        const {name, value} = event.target;
        setLastFields(prevState => ({ ...prevState, [name]: value }));
    }

    useEffect(() => {
        if (userService.userValue && userService.userValue.type == 'success') {
            setYear((new Date()).getFullYear());
            setYears(Array.from(new Array(50),(val, index) => year - index ));
            const { user } = decodeToken(userService.userValue.token);
            setData(user);
            
            const url = `${baseUrl}/api/doctors/profile/${user.email}`;
            axios.get(url)
            .then((res) => {
                const { experiences, educations, biography, phone, address, major, avatarPath, licensePath } = res.data;
                setExpFields(experiences);
                setEduFields(educations);
                setLastFields({
                    phone: phone,
                    bio: biography,
                    major: major,
                    address: address
                });
                setAvatarImage((baseUrl + '/' + avatarPath));
                setLicenseImage((baseUrl + '/' + licensePath));
                
            })
        } else {
            router.push('/sign-in');
        }
    }, [router, year])

    const stepperContent = [
        {
            label: 'Experiences',
            content: (
                <div className="profile-area ptb-100 plr-15">
                    <div className="container-fluid p-0">
                        <div className="profile-item">
                            <h2>If you have relevant work experience, add it here.</h2>
                            <span>Staff who add their experience are twice as likely to win work. Just head on to the next page.</span>

                            <div className="profile-form">
                                <div>
                                    { expFields.map((item, index) => {
                                        return(
                                        <div key={index}>
                                            {
                                                expFields?.length > 1 ?
                                                <button className="btn btn-warning" style={{float: 'right'}} onClick={() => removeExpFields(index)}>
                                                    <i className="icofont-ui-delete"></i>
                                                </button> 
                                                : null
                                            }
                                            <div className="row" key={index}>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="icofont-edit-alt"></i>
                                                        <label>Title (required *)</label>
                                                        <input type="text" name="title" value={item.title} onChange={event => handleExpChange(index, event)} className="form-control" placeholder="Ex: CTO" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="icofont-company"></i>
                                                        <label>Company</label>
                                                        <input type="text" name="company" value={item.company} onChange={event => handleExpChange(index, event)} className="form-control" placeholder="Ex: Microsoft" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="icofont-location-pin"></i>
                                                        <label>Location</label>
                                                        <input type="text" name="location" value={item.location} onChange={event => handleExpChange(index, event)} className="form-control" placeholder="Ex: California" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="icofont-location-arrow"></i>
                                                        <label>Country</label>
                                                        <input type="text" name="country" value={item.country} onChange={event => handleExpChange(index, event)} className="form-control" placeholder="Ex: United States" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 mb-5">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            onChange={() => setCurrent(index)}
                                                        />
                                                        &nbsp; I am currently working in this role.
                                                    </label>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="icofont-calendar"></i>
                                                        <label>Start Date *</label>
                                                        <select className="form-control" name="startDate" value={item.startDate} onChange={event => handleExpChange(index, event)} id="startDate">
                                                            <option value="" hidden>Select Start Year</option>
                                                            {
                                                                years.map((year, index) => {
                                                                    return(
                                                                        <option key={`year${index}`} value={year}>{year}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    {
                                                        item.endDate === 'present' ? 
                                                        <label className='present'>Present</label> :
                                                        <div className="form-group">
                                                            <i className="icofont-calendar"></i>
                                                            <label>End Date *</label>
                                                            <select className="form-control" name="endDate" value={item.endDate} onChange={event => handleExpChange(index, event)} id="endDate">
                                                                <option value="" hidden>Select End Year</option>
                                                            {
                                                                
                                                                years.map((year, index) => {
                                                                    return(
                                                                        <option key={`year${index}`} value={year}>{year}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                        </div>
                                                    }
                                                    
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <i className="icofont-clip-board"></i>
                                                        <label>Description (required *)</label>
                                                        <textarea type="text" name="description" value={item.description} onChange={event => handleExpChange(index, event)} className="form-control" placeholder="Enter Some notes" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })}
                                </div>
                                
                            </div>
                            
                            <div className='mt-5 mb-5'>
                                {expFields.length == 1 ? (
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={acceptFirstTerms.checked}
                                        onChange={firstTermsHandler}
                                    />{' '}
                                    Nothing to Add? Check the box and keep going
                                </label>
                                ) : <label></label>
                                }                                
                                <button className='btn btn-primary btn-add' onClick={addExpFields}>Add More</button>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            isError: !acceptFirstTerms.checked && expFields[0].title == '' && acceptFirstTerms.touched,
            isComplete: acceptFirstTerms.checked || ( expFields[0].title !== '' && expFields[0].description !== ''),
        },
        {
            label: 'Educations',
            content: (
                <div className="profile-area ptb-100 plr-15">
                    <div className="container-fluid p-0">
                        <div className="profile-item">
                            <h2>Clients like to know what you know - add your education here.</h2>
                            <span>You don’t have to have a degree. Adding any relevant education helps make your profile more visible..</span>

                            <div className="profile-form">
                                <div>
                                    { eduFields.map((item, index) => {
                                        return(
                                        <div key={index}>
                                            {
                                                eduFields.length > 1 ?
                                                <button className="btn btn-warning" style={{float: 'right'}} onClick={() => removeEduFields(index)}>
                                                    <i className="icofont-ui-delete"></i>
                                                </button> 
                                                : null
                                            }
                                            <div className="row" key={index}>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="icofont-university"></i>
                                                        <label>School (required *)</label>
                                                        <input type="text" name="school" value={item.school} onChange={event => handleEduChange(index, event)} className="form-control" placeholder="Ex: Boston University" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="icofont-medal"></i>
                                                        <label>Degree</label>
                                                        <input type="text" name="degree" value={item.degree} onChange={event => handleEduChange(index, event)} className="form-control" placeholder="Ex: Bachelor's" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <i className="icofont-medical-sign"></i>
                                                        <label>Field Of Study</label>
                                                        <input type="text" name="fieldOfStudy" value={item.fieldOfStudy} onChange={event => handleEduChange(index, event)} className="form-control" placeholder="Ex: Neurosurgeon" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="icofont-calendar"></i>
                                                        <label>Start Date *</label>
                                                        <select className="form-control" name="startDate" value={item.startDate} onChange={event => handleEduChange(index, event)} id="startDate">
                                                            <option value="" hidden>Select Start Year</option>  
                                                            {
                                                                years.map((year, index) => {
                                                                    return(
                                                                        <option key={`year${index}`} value={year}>{year}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <i className="icofont-calendar"></i>
                                                        <label>End Date *</label>
                                                        <select className="form-control" name="endDate" value={item.endDate} onChange={event => handleEduChange(index, event)} id="endDate">
                                                            <option value="" hidden>Select End Year</option>
                                                        {
                                                            years.map((year, index) => {
                                                                return(
                                                                    <option key={`year${index}`} value={year}>{year}</option>
                                                                )
                                                            })
                                                        }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <i className="icofont-clip-board"></i>
                                                        <label>Description (required *)</label>
                                                        <textarea type="text" name="description" value={item.description} onChange={event => handleEduChange(index, event)} className="form-control" placeholder="Describes your studies, awards, etc." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })}
                                </div>
                                
                            </div>
                            
                            <div className='mt-5 mb-5'>
                                {eduFields.length == 1 ? (
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={acceptSecondTerms.checked}
                                        onChange={secondTermsHandler}
                                    />
                                    &nbsp; Nothing to Add? Check the box and keep going
                                </label>
                                ) : <label></label>
                                }                                
                                <button className='btn btn-primary btn-add' onClick={addEduFields}>Add More</button>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            clicked: () => secondStepAsyncFunc(),
            isLoading: isSecondStepLoading,
            isError: !acceptSecondTerms.checked && eduFields[0].school == '' && acceptSecondTerms.touched,
            isComplete: acceptSecondTerms.checked || ( eduFields[0].school !== '' && eduFields[0].description !== ''),
        },
        {
            label: "Doctor's License",
            content: (
                <div className="profile-area ptb-100 plr-15">
                    <div className="container-fluid p-0">
                        <div className="profile-item">
                            <h2>Doctor's License - You have to upload Doctor's License Image for the verification.</h2>
                            <span>A Doctor's License photo helps us we can verify you are a Doctor.</span>

                            <div className="profile-form">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        {(licenseActive === 'edit') ? (
                                            <ImgUpload onChange={LicenseUpload} src={licenseImage} isAvatar={false} />
                                        ):(
                                            <Profile 
                                            onSubmit={handleLicenseSubmit} 
                                            src={licenseImage} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            // isError: licenseImage == '/images/doctor-license.jpg',
            isComplete: licenseImage !== '/images/doctor-license.jpg',
        },
        {
            label: 'A few Details',
            content: (
                <div className="profile-area ptb-100 plr-15">
                    <div className="container-fluid p-0">
                        <div className="profile-item">
                            <h2>A few last details - then you can publish your profile.</h2>
                            <span>A professional photo helps you build trust with your clients. To keep things safe and simple, they’ll pay you through us - which is why we need your personal information.</span>

                            <div className="profile-form">
                                <div className="row">
                                    <div className="col-lg-6 text-center">
                                        {(active === 'edit')?(
                                            <ImgUpload onChange={avatarUpload} src={avatarImage} isAvatar={true} />
                                        ):(
                                            <Profile 
                                            onSubmit={handleAvatarSubmit} 
                                            src={avatarImage} />)}
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <i className="icofont-phone"></i>
                                                <label>Phone Number</label>
                                                <input type="text" name="phone" value={lastFields.phone} onChange={handleLastChange} className="form-control" placeholder="Ex: +1 234 567 8901" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <i className="icofont-hospital"></i>
                                                <label>Major</label>
                                                <input type="text" name="major" value={lastFields.major} onChange={handleLastChange} className="form-control" placeholder="Ex: Neurosurgeon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <i className="icofont-location-pin"></i>
                                            <label>Address</label>
                                            <input type="text" name="address" value={lastFields.address} onChange={handleLastChange} className="form-control" placeholder="Ex: 4th Floor, 408 No Los Angeles" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <i className="icofont-clip-board"></i>
                                            <label>Biography (required *)</label>
                                            <textarea type="text" value={lastFields.bio} name="bio" onChange={handleLastChange} className="form-control" placeholder="Enter Some notes" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='mt-5'>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={acceptThirdTerms.checked}
                                        onChange={thirdTermsHandler}
                                    />&nbsp; Nothing to Add? Check the box and submit
                                </label>                  
                            </div>
                        </div>
                    </div>
                </div>
            ),
            isError: !acceptThirdTerms.checked && avatarImage == '/images/user-img.png' && acceptThirdTerms.touched,
            isComplete: acceptThirdTerms.checked || ( lastFields.bio !== '' && avatarImage !== '/images/user-img.png'),
        },
    ];

    const submitStepper = async () => {
        const url = `${baseUrl}/api/doctors/profile`;
        const formData = new FormData(); 
        formData.append('license', license);
        formData.append('avatar', avatar);
        formData.append('expFields', JSON.stringify(expFields));
        formData.append('eduFields', JSON.stringify(eduFields));
        formData.append('lastFields', JSON.stringify(lastFields));
        formData.append('email', data.email);
        axios.post(url, formData)
        .then((res) => {
            NotificationManager.success('Success message', res.data.msg);
            router.push('/');
        }).catch(() => {
            NotificationManager.error('Error message', 'Something went wrong');
        });
    };

    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Staff Profile" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Staff Profile" 
                bgImage="page-title-one" 
            /> 

            <div className="profile-area ptb-100 plr-15">
                <div className="container-fluid p-0">
                    <Stepper stepperContent={stepperContent} submitStepper={submitStepper} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default StaffProfile;