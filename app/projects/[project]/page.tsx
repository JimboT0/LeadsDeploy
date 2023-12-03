import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import Head from 'next/head';
import { useEffect } from 'react';

import Contact from "../../../components/contact";
import '../../globals.css'
import Dropdown from "@/components/dropdown";
import Footer from "@/components/footer";

import Script from "next/script";


type Props = {
    params: { project: string };
};

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
        <>
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
          (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
              'gtm.start':
                new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl; 
                j.setAttribute('SameSite', 'None');//added this
                j.setAttribute('Secure', 'true');//sdded this
                f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer','GTM-MDGXM6DC' );
          `}
            </Script>
            <Dropdown />

            <div className="">
                <div className="p-5 border rounded-lg shadow-lg m-5 md:mx-10 bg-slate-100 drop-shadow-lg flex flex-col justify-center items-center text-center">

                    <header className="flex items-center justify-between mb-4 text-center mx-10">
                        <h1 className="md:text-3xl text-xl mt-10 md:m-10 font-semibold items-center text-center font-bodoni-moda "><PortableText value={project.heading} /></h1>

                    </header>



                    <div className="text-sm text-gray-700 items-center md:mx-20 text-left lg:px-40 px-2">
                        <PortableText value={project.content} />
                    </div>

                    <div className=" m-10 relative w-200 mx-auto justify-center items-center text-center">
                        <Image
                            src={project.image1}
                            alt={project.name}
                            width={400}
                            height={400}
                            className="object-cover rounded-lg w-auto"
                        />
                    </div>


                    <div className="text-sm text-gray-700 items-center md:mx-20 text-left lg:px-40 px-2">
                        <PortableText value={project.content3} />
                        <div className="p-5 text-center">
                            <p className="p-4">For an accurate and fair valuation of these items,</p>
                            <a href="/contact" className="text-center px-5 mt-5 p-3 bg-indigo-800 text-white rounded-xl"> Contact Us</a>
                        </div>
                    </div>

                    <div className=" m-10 relative w-200 mx-auto justify-center items-center text-center">
                        <Image
                            src={project.image2}
                            alt={project.name}
                            width={400}
                            height={400}
                            className="object-cover rounded-lg w-auto"
                        />
                    </div>

                    <div className="text-sm text-gray-700 items-center md:mx-20 text-left lg:px-40 px-2">
                        <PortableText value={project.content2} />
                    </div>

                    <div className=" m-10 relative w-200 mx-auto justify-center items-center text-centerr">
                        <Image
                            src={project.image3}
                            alt={project.name}
                            width={400}
                            height={400}
                            className="object-cover rounded-lg w-auto"
                        />
                    </div>

                    <div className="text-sm text-gray-700 items-center md:mx-20 text-left lg:px-40 px-2">
                        <PortableText value={project.content4} />
                    </div>

                    <div className=" mt-10 grid gird-cols-3 place-content-center">
                        <Contact />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}
