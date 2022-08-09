import React, {useEffect, useState} from "react";
import TopHeader from '../../components/_App/TopHeader';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import { useRouter } from "next/router";
import { userService } from "../../services";
import decodeToken from "../../utils/decodeToken";
import TodayAppointmentTable from '../../components/Doctor/TodayAppointmentsTable';

export default function TodayAppointments () {
    const router = useRouter();
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (userService.userValue && userService.userValue.type == 'success') {
            const account = decodeToken(userService.userValue.token);
            setEmail(account.user.email);
            if(account?.user?.role !== 'staff') {
                router.push('/');
            }
        } else {
            router.push('/sign-in');
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
                    <TodayAppointmentTable email={email} />
                </div>
            </div>
            
            <Footer />
        </>
    )
}