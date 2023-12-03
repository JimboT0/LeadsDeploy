'use client';
import React, { useEffect, useState } from 'react';

import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";


function Share() {

    const [currentPageURL, setCurrentPageURL] = useState('');

    useEffect(() => {
        setCurrentPageURL(window.location.href);
    }, []);

    const quote = 'Discover Hidden Riches in Your Home: Unveiling the Lucrative Journey of Rediscovering the Forgotten Treasures that You May Have Lying Around Your House';

    return (

        <div className='flex justify-center items-center'>
            <EmailShareButton url={currentPageURL} quote={quote}><EmailIcon className='w-10 md:w-20' round /></EmailShareButton>
            <FacebookShareButton url={currentPageURL} quote={quote}><FacebookIcon className='w-10 md:w-20' round /></FacebookShareButton>
            <PinterestShareButton url={currentPageURL} quote={quote}><PinterestIcon className='w-10 md:w-20' round/></PinterestShareButton>
            <TwitterShareButton url={currentPageURL} quote={quote}> <TwitterIcon className='w-10 md:w-20' round/></TwitterShareButton>
            <WhatsappShareButton url={currentPageURL} quote={quote}><WhatsappIcon className='w-10 md:w-20' round/></WhatsappShareButton>
        </div>



    )
}

export default Share


