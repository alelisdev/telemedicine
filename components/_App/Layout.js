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
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossOrigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossOrigin="anonymous"></script>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;