'use client'

import { useState } from "react";
import { SiHiveBlockchain } from "react-icons/si";
import { MdBubbleChart } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <>
            <div className="min-h-[100vh] max-w-[430px] mx-auto bg-gradient-to-b from-[#0C0D42] to-[#2E1367]">
                <nav className="">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="flex h-16 items-center justify-between">
                            {/* <div className="-mr-2 flex md:hidden"> */}
                            <div className="-mr-2 flex">
                                <button
                                    type="button"
                                    className="relative inline-flex items-center justify-center  py-2"
                                    aria-controls="mobile-menu"
                                    aria-expanded={isMobileMenuOpen}
                                    onClick={toggleMobileMenu}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg
                                        className={`${isMobileMenuOpen ? 'hidden' : 'text-white'} h-6 w-[30px]`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                    <svg
                                        className={`${isMobileMenuOpen ? 'text-white' : 'hidden'} h-6 w-[30px]`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex items-center">
                                <div className="flex items-center justify-center border-white rounded-full w-[175px] h-[32px] border-[1px]">
                                    <div className="flex items-center justify-center gap-[16px]">
                                        <img src="/images/signin.png" alt="signin_icon" />
                                        <p className="text-white text-[14px]">SIGN IN</p>
                                    </div>
                                </div>
                                {/* <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Reports</a>
                                </div>
                            </div> */}
                            </div>

                        </div>
                    </div>

                    {isMobileMenuOpen && (
                        // <div className="md:hidden" id="mobile-menu">
                        <div className="" id="mobile-menu">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                <a href="#" className="block rounded-md bg-gray-400 px-4 py-2 text-base font-medium text-white" aria-current="page">LOGO</a>
                                <a href="#" className="block rounded-md px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                    <div className="flex items-center justify-start gap-4 text-white">
                                        <SiHiveBlockchain />
                                        <p className="text-[16px]">EVM ファーミング</p>
                                    </div>
                                </a>
                                <a href="#" className="block rounded-md px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                    <div className="flex items-center justify-start gap-4 text-white">
                                        <MdBubbleChart />
                                        <p className="text-[16px]">エアドロップ</p>
                                    </div>
                                </a>
                                <a href="#" className="block rounded-md px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                    <div className="flex items-center justify-start gap-4 text-white">
                                        <FaUserPlus />
                                        <p className="text-[16px]">紹介</p>
                                    </div>
                                </a>
                                <a href="#" className="block rounded-md px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                    <div className="flex items-center justify-start gap-4 text-white">
                                        <FaHome />
                                        <p className="text-[16px]">マイページ</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )}
                </nav>

                <main>
                    <div className="mx-auto max-w-7xl px-6 py-2">
                        {children}
                    </div>
                </main>

                <footer className="fixed bottom-0 left-0 right-0 mb-[24px] mx-auto flex items-center justify-center">
                    <p className="text-white text-[12px]">© 2024 XXXXXXX. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}