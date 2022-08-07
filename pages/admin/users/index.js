import React, { useEffect } from 'react';
import TopHeader from '../../../components/_App/TopHeader';
import Navbar from '../../../components/_App/Navbar';
import PageBanner from '../../../components/Common/PageBanner';
import Footer from '../../../components/_App/Footer';
import { userService } from '../../../services';
import decodeToken from '../../../utils/decodeToken';

export default function Users() {

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


    return(
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
            <Footer />
        </>
    )
}