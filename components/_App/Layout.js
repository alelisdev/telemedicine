import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Disin - React Next Medical Health & Doctors Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Disin - React Next Medical Health & Doctors Template" />
                <meta name="og:title" property="og:title" content="Disin - React Next Medical Health & Doctors Template"></meta>
                <meta name="twitter:card" content="Disin - React Next Medical Health & Doctors Template"></meta>
                <link rel="canonical" href="https://disin-react.envytheme.com/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;