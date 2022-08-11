import React, { useEffect } from 'react';
import TopHeader from '../../../components/_App/TopHeader';
import Navbar from '../../../components/_App/Navbar';
import PageBanner from '../../../components/Common/PageBanner';
import Footer from '../../../components/_App/Footer';
import BlogContents from '../../../components/Admin/Blogs';
import { userService } from '../../../services';
import decodeToken from '../../../utils/decodeToken';
import { useRouter } from 'next/router';

const BlogList = () => {
    const router = useRouter();   

    useEffect(() => {
        if (userService.userValue && userService.userValue.type == 'success') {
            const account = decodeToken(userService.userValue.token);
            if(account?.user?.email !== process.env.admin) {
                router.push('/');
            }
        } else {
            router.push('/sign-in');
        }
    }, []);

    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Blogs" 
                homePageUrl="/admin/blogs" 
                homePageText="Admin" 
                activePageText="Blogs" 
                bgImage="page-title-one" 
            /> 

            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <BlogContents />
                </div>
            </div>  
            <Footer />
        </>
    )
}
export default BlogList;