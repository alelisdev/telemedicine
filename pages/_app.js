import '../public/css/bootstrap.min.css'
import '../public/css/animate.css'
import '../public/css/icofont.min.css'
import '../public/css/meanmenu.css'
import 'react-tabs/style/react-tabs.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../public/css/style.css'
import '../public/css/style.scss'
import '../public/css/responsive.css'
import '../public/css/rtl.css'
import '../node_modules/react-notifications/lib/notifications.css';
import 'react-calendar/dist/Calendar.css'
import { NotificationContainer } from 'react-notifications';
import Layout from '../components/_App/Layout';
import React from 'react';


const MyApp =  ({ Component, pageProps }) => {

    return (
            <Layout>
                <Component {...pageProps} />
                <NotificationContainer />
            </Layout>
    )
}

export default MyApp