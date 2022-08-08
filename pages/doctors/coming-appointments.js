import React, {useState, useEffect} from "react";
import TopHeader from '../../components/_App/TopHeader';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import { useRouter } from "next/router";
import { userService } from "../../services";
import decodeToken from "../../utils/decodeToken";
import ComingAppointmentTable from '../../components/Doctor/ComingAppointmentTable';

export default function ComingAppointments () {
    const router = useRouter();
    useEffect(() => {
        if (userService.userValue && userService.userValue.type == 'success') {
            const account = decodeToken(userService.userValue.token);
            if(account?.user?.role !== 'staff') {
                router.push('/');
            }
        } else {
            router.push('/');
        }
    }, [])


    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner 
                pageTitle="Last Appointments" 
                homePageUrl="/doctors/profile" 
                homePageText="Doctors" 
                activePageText="Last Appointments"
                bgImage="page-title-four" 
            /> 
            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <ComingAppointmentTable />
                </div>
            </div>
            
            <Footer />
        </>
    )
}