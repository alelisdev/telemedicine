import React from 'react';
import Link from 'next/link';

const ConfirmMailContent = () => (
  <>
    <div className='mt-5'>
        <img
            className="d-block mx-auto mb-4"
            src='images/newlogo.png'
            alt="sent"
            width={300}
        />
    </div>
    <div className="profile-area ptb-100 plr-15">
        <div className="container-fluid p-0">
            <div className="appointment-item">
                <h2 className='text-center'>Please check your email!</h2>
                <img
                    className="d-block mx-auto mb-4"
                    src='images/16.png'
                    alt="sent"
                    width={100}
                />
                <p>
                An email has been sent to <strong></strong>. Please click on the
                included link to reset your password.
                </p> 
                <div className='text-center mt-5'>
                    <Link href="/sign-in">
                        <a className='btn btn-primary'><i className='icofont-rounded-left'></i>Return to Sini In</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>


    {/* <img
      className="d-block mx-auto mb-4"
      src='images/16.png'
      alt="sent"
      width={100}
    />
    <h2>Please check your email!</h2>
    <p>
      An email has been sent to <strong>topcoder728@gmail.com</strong>. Please click on the
      included link to reset your password.
    </p> */}
    {/* <Button
      as={Link}
      color="primary"
      size="sm"
      className="mt-3"
    >
      <FontAwesomeIcon
        icon="chevron-left"
        transform="shrink-4 down-1"
        className="me-1"
      />
      Return to login
    </Button> */}
  </>
);

export default ConfirmMailContent;
