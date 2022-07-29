import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const TermsCondition = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Terms & Condition" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Terms & Condition" 
                bgImage="page-title-one" 
            /> 

            <div className="privacy-area ptb-100">
                <div className="container">
                    <h2>1. Introduction and Account Creation</h2>
                    <p>Telemedicine involves the use of electronic communications to enable health care providers at different locations to share individual patient medical information for the purpose of improving patient care. Providers may include primary care practitioners, specialists, and/or subspecialists.</p>
                    <p>You are required to create an account when you register on the site, which includes your email, password and phone number. To register, you must be of legal age to form a binding contract. If you are not of legal age to form a binding contract, you may not register to use our telemedicine system unless accompanied by an adult. You agree that the account information that you provide to us at all times, including during registration and in any information you upload to the site will be true, accurate, current, and complete. You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account.</p>
                    <ul>
                        <li>Age 16-18: presumed to be able to consent for medical treatment unless proven otherwise</li>
                        <li>Age 18 or above: may consent for necessary medical treatment</li>
                    </ul>

                    <h5>Suitable conditions to see a Telemedicine Doctor include:</h5>
                    <h6>
                        <span className='service-item-include'>Besides anxiety & depression</span>
                        <span className='service-item-include'>hypertension</span> 
                        <span className='service-item-include'>prescription refills</span>
                        <span className='service-item-include'>antidepressants</span> 
                        <span className='service-item-include'>sleeping pills</span> 
                        <span className='service-item-include'>insomnia</span> 
                        <span className='service-item-include'>PTSD</span> 
                        <span className='service-item-include'>erectile dysfunction</span> 
                        <span className='service-item-include'>relationship conflict</span>  
                        <span className='service-item-include'>marriage counseling</span> 
                        <span className='service-item-include'>diabetes</span> 
                        <span className='service-item-include'>allergy pills</span> 
                        <span className='service-item-include'>Covid testing</span> 
                        <span className='service-item-include'>Covid treatment</span> 
                        <span className='service-item-include'>doctor’s note for work</span>
                        <span className='service-item-include'> panic attacks</span>  
                        <span className='service-item-include'>agoraphobia</span> 
                        <span className='service-item-include'>thyroid disorder</span> 
                        <span className='service-item-include'>Grave’s disease</span> 
                        <span className='service-item-include'>hypothyroid</span> 
                        <span className='service-item-include'>cholesterol testing</span> 
                        <span className='service-item-include'>diabetes testing</span> 
                        <span className='service-item-include'>anxiety drugs</span> 
                        <span className='service-item-include'>sleeping pills</span> 
                        <span className='service-item-include'>ADHD drugs</span> 
                        <span className='service-item-include'>ADD drugs</span> 
                        <span className='service-item-include'>STD testing</span> 
                        <span className='service-item-include'>STD Screen </span> 
                        <span className='service-item-include'>Plan B prescription </span> 
                        <span className='service-item-include'>drug screen</span> 
                        <span className='service-item-include'>Emotional Support Animal (ESA) letters</span> 
                        <span className='service-item-include'>herpes testing</span>
                    </h6>

                    <h2>2. Information</h2>
                    <h5>The information may be used for diagnosis, therapy, follow-up and/or education, and may include any of the following:</h5>
                    <ul>
                        <li>Patient medical records</li>
                        <li>Medical images</li>
                        <li>Live two-way audio and video</li>
                        <li>Output data from medical devices and sound and video files</li>
                    </ul>

                    <p>Electronic systems used will incorporate network and software security protocols to protect the confidentiality of patient identification and imaging data and will include measures to safeguard the data and to ensure its integrity against intentional or unintentional corruption. Legal action will be taken against individuals who use the web application for any unintended purpose.</p>
                        
                    <p>By registering an account or accessing your account by corporate agreements, you agree to allow where necessary in the course of your diagnosis, treatment and billing, doctors to access to your National Electronic Health Record (NEHR) and other medical information.</p>
                
                    <h2>3. Possible Risks</h2>
                    <p>As with any medical procedure, there are potential risks associated with the use of telemedicine.</p>
                    
                    <h5>These risks include, but may not be limited to:</h5>
                    <ul>
                        <li>In rare cases, information transmitted may not be sufficient (e.g. poor resolution of images) to allow for appropriate medical decision making by the physician and consultant(s);</li>
                        <li>Delays in medical evaluation and treatment could occur due to deficiencies or failures of the equipment;</li>
                        <li>In very rare instances, security protocols could fail, causing a breach of privacy of personal medical information;</li>
                        <li>In rare cases, a lack of access to complete medical records may result in adverse drug interactions or allergic reactions or other judgment errors;</li>
                    </ul>

                    <p>The doctor reserves the right to discontinue Telemedicine at his own discretion if he feels that safe medical advice cannot be delivered in such instances.</p>

                    <h2>4. Consultation process</h2>
                    <p>Proper video consultation is required to ensure the right professional advice is given to a specific individual. However, voice-only consult (telephone or otherwise) may be allowed if an Allied Health Professional such as a pharmacist or nurse is available on the other end to ensure correct patient identity. These exceptions are made on a case-to-case basis.We will not send advertisements to your email or through other forms of contact without your consent. However, your contact details may be used for follow up of your medical condition.</p>
                    <p>Follow up methods include SMS, Skype, Telegram, Whatsapp, email or traditional mail.</p>
                    <p>Waiting time</p>
                    <p>Doctor waiting times are shown live on the website. This is only estimated and a long consult/procedures can affect waiting time.</p>
                    
                    <h5>Prescription Dispensing/Collection of Medications</h5>
                    <p>
                        Prescriptions will be sent via email after payment has been made. The doctor will send you a prescription without a signature that can only be validated at selected collection points.
                        Prescriptions will be validated on our own internal system as a measure against forgery. If your prescription fails validation, then you will not be dispensed prescription medications.
                    </p>
                    <p>
                        No benzodiazepines or codeine-containing substances will be prescribed. Benzodiazepine-like sleeping medications that may be potentially addictive are also not prescribed over the telemedicine service.
                        Medical Certificates (MCs)
                    </p>
                    <p>
                        A maximum of 1 day of MC will be given to patients. Extension of MC is not allowed through the telemedicine system except for a very small number of selected cases. If you are unwell for more than a day, then a visit to a physical doctor is warranted.
                        Telemedicine MCs are electronically signed. Should a physical stamp be required then physical presentation to one of the iDOC clinics is required. If you are an EasyCare Member, you may request this through your Care Coordinator.
                        Employers/HRs are welcome to validate MCs with us. 
                    </p>

                    <h2>5. Receiving MC/prescription and billing</h2>
                    <p>There may be a 10-15 minute delay for receiving your MC/prescription/invoice to allow the doctor to complete documentation. The invoice is usually sent through your email. Your online payment would generate an invoice that can be used as a receipt. If your require an invoice that has sensitive data such as NRIC, please email admin@telehealthcare.services. A clinic staff will retrieve your details for billing and payment.  </p>
                    
                    <h2>6. Payments</h2>
                    <p> Payment to our clinic should be made through PayPal or ApplePay and instructions will be provided in the invoice. If you do not have medications, the system will prompt for automatic payment.</p>
                    <p>We would recommend PayPal as the preferred form of payment.</p>
                    <p>MCs and Prescription will not be issued before payment is made.</p>
                    <p>If you have missed the online prompt or have not made payment within 15 minutes, a payment link will be sent to your email.</p>
                    <p>Please do not pay twice. It may take up to 30 days before we are able to refund any over-payment.</p>
                    
                    <h2>7. Data Collection</h2>
                    <p>We will be studying anonymised data to improve its services. However, the data will be anonymized. This is for safety checks and balances. We do not keep a record of the video consultation. Only a record of the clinic notes is kept as deemed necessary by the doctor and only retrievable by the doctor or clinic staff/care coordinators.</p>
                
                    <h2>8. Security and Encryption</h2>
                    <p>All data passed through video communication is encrypted. We are not responsible for any data breaches that occur on your end, eg. existing virus on your own device or conducting telemedicine in a non-private location.</p>
                    <p>
                        All we will offer all documents to be sent with encryption unless you have given us permission to send unencrypted details through email. A password to decrypt these documents will be sent to you by SMS.
                        Our doctor will ask you if MC is to be sent with or without encryption at the end of the consultation. If your email already comes with TLS encryption, our doctor may send the file directly without the need to unlock using a password.
                    </p>
                    <p>We reserve the right not to email certain unencrypted documents where there is suspicion of potential data breaches.</p>
                </div>
            </div>
        
            <Footer />
        </>
    )
}

export default TermsCondition;