'use client'
import React from 'react'
import Head from 'next/head';
import { useEffect } from 'react';



import Contact from '../../../components/contact';


import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,

} from "react-share";

const ContactPage = () => {

  return (
    <>

      <div className='flex py-20 justify-center bg-purple-100'>
        <div className=' flex flex-col w-[80%] h-[20%] text-black rounded-xl justify-center'>
          <h1 className='text-center text-4xl font-bodoni-moda'>Contact Us</h1>
          <br />
          <p className='text-center text-base font-lato pt-5'>Have your got some old items around your house? <br />You may not realise that <br />Watches, Pens, Vintage Jewelry, Guitars, Motorbikes, Luxury goods, Cameras, Books, Bicycles and even Trading cards can be quite valuable, even in bad condition</p>

          <p className='text-center text-base font-lato pt-5'>Get in touch with us for a quote on your old items. </p>

          <EmailShareButton />
          <FacebookShareButton />
          <InstapaperShareButton />
          <LinkedinShareButton />
          <PinterestShareButton />
          <TwitterShareButton />
          <WhatsappShareButton />

        </div>
      </div>
      <div className='p-5 pb-20 justify-center flex bg-purple-100'>
        <Contact />
      </div>

    </>
  )
}

export default ContactPage
