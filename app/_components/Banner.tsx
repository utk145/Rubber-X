import React, { useState } from 'react';
import 'flowbite';

function Banner() {
    const [isCopiedEmail, setIsCopiedEmail] = useState(false);
    const [isCopiedPassword, setIsCopiedPassword] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('filahij111@artgulin.com').then(() => {
            setIsCopiedEmail(true);
            setTimeout(() => setIsCopiedEmail(false), 1000); // Reset after 1 second
        });
    };

    const handleCopyPassword = () => {
        navigator.clipboard.writeText('Pa$$w0rd').then(() => {
            setIsCopiedPassword(true);
            setTimeout(() => setIsCopiedPassword(false), 1000); // Reset after 1 second
        });
    };


    return (
        <section className="bg-black">
            <div className='flex items-baseline justify-center pt-20'>
                <h2 className='text-white border px-3 p-2 rounded-full text-center border-white'>See What's New | <span className='text-sky-300 font-bold'>AI Diagrams</span></h2>
            </div>
            <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 mt-28 lg:flex">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-5xl text-sky-300 font-extrabold sm:text-5xl">
                        Documents & diagrams
                        <strong className="font-extrabold text-white sm:block">for engineering teams. </strong>
                    </h1>
                    <p className="mt-4 sm:text-xl/relaxed text-slate-200">
                        All-in-one markdown editor, collaborative canvas, and diagram-as-code builder
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a className="block w-full rounded bg-white text-black px-12 py-3 text-sm font-medium shadow hover:bg-slate-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto" href="#">
                            Learn More
                        </a>
                    </div>
                    <div className='text-slate-400 mt-10 p-2 bg-gray-900 rounded-lg flex-col items-center justify-center'>
                        You can use the following credentials. Please save them somewhere to access on Login Page:
                        <div className="w-full">
                            <div className="relative mt-2">
                                <input id="npm-install-copy-button" type="text" className="col-span-6 bg-gray-400 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="hevawic835@shaflyn.com" disabled readOnly />
                                <button onClick={handleCopyEmail} className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
                                    <span id="default-icon">
                                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                        </svg>
                                    </span>
                                    <span id="success-icon" className={isCopiedEmail ? "inline-flex p-1 items-center" : "hidden"}>
                                        <svg className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                        </svg>
                                    </span>
                                </button>

                            </div>
                            <div className="relative mt-2">
                                <input id="npm-install-copy-button" type="text" className="col-span-6 bg-gray-400 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Pa$$w0rd" disabled readOnly />
                                <button onClick={handleCopyPassword} className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
                                    <span id="default-icon">
                                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                        </svg>
                                    </span>
                                    <span id="success-icon" className={isCopiedPassword ? "inline-flex p-1 items-center" : "hidden"}>
                                        <svg className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                        </svg>
                                    </span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
