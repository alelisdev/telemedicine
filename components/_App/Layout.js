import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Telemedicine - Medical Health & Doctors</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Telecarelife - React Next Medical Health & Doctors" />
                <meta name="og:title" property="og:title" content="Telecarelife - React Next Medical Health & Doctors"></meta>
                <meta name="twitter:card" content="Telecarelife - React Next Medical Health & Doctors"></meta>
                <link rel="canonical" href="http://localhost:3000/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;