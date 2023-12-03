'use client'
import React, { useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';


function Hero() {

    const guidesRef = useRef(null);

    const scrollToGuides = () => {
        if (guidesRef.current) {
            guidesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <div className='bg-white'>
            <div className="w-[100%] h-100vh  flex flex-col md:flex-row justify-center items-center text-center">
                <div style={{
                    backgroundImage: "url(/olditems3.jpg)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100vw',
                    height: '90vh',

                }} className=' flex flex-col justify-center items-center text-center order-2 md:order-1'>
                    <div className="w-[100%] text-white text-3xl md:text-3xl font-bold tracking-wide font-bodoni-moda ">Discover Hidden Riches in Your Home:</div>
                    <div className="w-[100%] text-slate-200 leading-7 font-lato px-5 pt-6 text-xl md:text-xl tracking-wide pb-5 mx-auto">Unveiling the Lucrative Journey of Rediscovering the Forgotten Treasures
                        <br />that You May Have Lying Around Your House
                        <br />
                        <br />Contact Us Or Take A Look At Our Guides To See What We Buy!
                        </div>
                    <div className='flex flex-col lg:flex-row justify-center items-center text-center p-4'>
                        <a href='/contact' className="w-[290px] h-[50px] bg-indigo-800 rounded-[20px] flex justify-center items-center text-center m-2"><div className="w-[242.97px] text-center text-indigo-200 text-[17px] font-black tracking-tight font-lato">Contact</div></a>
                        <button onClick={scrollToGuides} className="w-[290px] h-[50px] bg-purple-50 rounded-[20px] border border-indigo-200 flex justify-center items-center text-center m-2"><div className="w-[242.97px] text-center text-indigo-800 text-[17px] font-black tracking-tight font-lato">Our Guide</div></button>
                    </div>
                </div>

            </div>


            <div ref={guidesRef}></div>


            
        </div>
    )
}

export default Hero

