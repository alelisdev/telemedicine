import React from 'react';
import Link from 'next/link';

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText, bgImage}) => {
    return (
        <div className={`page-title-area ${bgImage}`}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="page-title-item">
                        <h2>{pageTitle}</h2>
                        <ul>
                            <li>
                                <Link href={homePageUrl}>
                                    <a>{homePageText}</a>
                                </Link>
                            </li>
                            <li className="active">{activePageText}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;