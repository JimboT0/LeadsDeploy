
'use client'
import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';

import Select from 'react-select'
import Share from './share';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mjvqperr");


    // const [phoneNumber, setPhoneNumber] = useState('');

    // const handlePhoneNumberChange = (event) => {
    //     const inputPhoneNumber = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    //     setPhoneNumber(inputPhoneNumber);
    // };


    if (state.succeeded) {
        return (
            <div className='mb-20'>
                <div className=' bg-purple-200 border-black p-10 rounded-lg w-[80%] mx-auto'>
                    <p className="block w-[80%] mx-auto rounded-md mb-10 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Thanks for your message!</p>
                </div>

                <div className=' bg-purple-200 border-black p-10 rounded-lg w-[80%] mx-auto'>
                    <p className="block w-[80%] mx-auto rounded-md mb-5 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm">Please consider sharing this website with friends if you found it interesting or helpful</p>
                    <Share />
                </div>
            </div>

        )
    }



    return (
        <div className=" lg:px-8 bg-clear">
            <div className='md:max-w-3xl bg-indigo-800 rounded-lg md:px-10 p-5 w-[100%]'>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-bodoni-moda">Get in touch</h2>
                    <br />
                    <p className='block text-sm font-semibold leading-6 text-white font-lato'>Contact us on <a href='https://wa.me/0662001272' className='text-yellow-400'>0662001272</a> or fill out the form below:</p>
                </div>
                <form onSubmit={handleSubmit} className=" mt-10 max-w-2xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                                What would you like to sell/have valued?
                            </label>
                            <select id='selling:' name='option' required className="mt-2.5 w-[100%] rounded-md h-10 pl-3 pr-3">
                                <option value="null"></option>
                                <option value="Watches">Watches</option>
                                <option value="Trading Cards">Trading Cards</option>
                                <option value="Pens">Pens</option>
                                <option value="Motorbikes">Motorbikes</option>
                                <option value="Luxury Goods">Luxury Goods</option>
                                <option value="Jewellery">Jewellery</option>
                                <option value="Guitars">Guitars</option>
                                <option value="Cars">Cars</option>
                                <option value="Cameras">Cameras</option>
                                <option value="Books & Comics">Books & Comics</option>
                                <option value="Bicycles">Bicycles</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>


                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                        </div>


                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                                Phone number
                            </label>
                            <div className="relative mt-2.5">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <a
                                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone-input"
                                    // value={phoneNumber}
                                    // onChange={handlePhoneNumberChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                />
                                <ValidationError
                                    prefix="tel"
                                    field="phone-input"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                    required
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="Photo" className="block text-sm font-semibold leading-6 text-white">
                                Send an Image <span className='text-xs font-thin'>(Optional)</span>

                            </label>
                            <div className="mt-2.5 bg-white rounded-xl font-lato pl-1">
                                <input
                                    type="file"
                                    name="attachment"
                                    accept="image/png, image/jpeg"
                                    className="p-2 border-xl"
                                    />


                                <ValidationError
                                    prefix="file"
                                    field="file"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="my-10">
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-800 shadow-sm bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Let&apos;s talk
                        </button>
                    </div>
                    <Share className="text-center mx-auto" />
                </form>
            </div>

        </div>
    )
}