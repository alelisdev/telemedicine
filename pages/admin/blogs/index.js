import React, { useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import TopHeader from '../../../components/_App/TopHeader';
import Navbar from '../../../components/_App/Navbar';
import PageBanner from '../../../components/Common/PageBanner';
import Footer from '../../../components/_App/Footer';
import BlogContents from '../../../components/Admin/Blogs';
import { userService } from '../../../services';
import decodeToken from '../../../utils/decodeToken';
import { useRouter } from 'next/router';

const BlogList = (props) => {
    const router = useRouter();

    useEffect(() => {
        if (userService.userValue && userService.userValue.type == 'success') {
            const account = decodeToken(userService.userValue.token);
            if(account?.user?.email !== process.env.admin) {
                router.push('/');
            }
        } else {
            router.push('/');
        }
    }, []);

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
                    <BlogContents data={props.data} />
                </div>
            </div>  
            <Footer />
        </>
    )
}


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await axios.get(`${baseUrl}/api/blogs/all`);
    const data = res.data;
    // Pass data to the page via props
    return { props: { data } }
}


export default BlogList;