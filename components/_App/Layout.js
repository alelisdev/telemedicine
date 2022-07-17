import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Telecarelife - Medical Health & Doctors</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Telecarelife - Telemedicine with  anxiety & depression, hypertension, prescription refills, antidepressants, sleeping pills, insomnia, PTSD, erectile dysfunction, relationship conflict , marriage counseling, diabetes, allergy pills, Covid testing, Covid treatment, doctor’s note for work" />
                <meta name="og:title" property="og:title" content="Telecarelife - Medical Health & Doctors"></meta>
                <meta name="twitter:card" content="Telecarelife - Telemedicine & Doctors"></meta>
                <link rel="canonical" href="http://localhost:3000/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;