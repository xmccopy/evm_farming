'use client'

import React, { useEffect, useRef, useState } from "react";
import { MdBubbleChart } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa6";
import DarkModeToggle from '../components/DarkModeToggle'

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({
    children,
}: RootLayoutProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [bgExchange, setBgExchange] = useState(true);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);  // Close the menu if clicked outside
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <div className="min-h-[100vh] max-w-[430px] mx-auto bg-[#0C0D42] dark:bg-white">
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
                                        className={`${isMobileMenuOpen ? 'hidden' : "text-white dark:text-[#000000]"} h-6 w-[30px]`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                    <svg
                                        className={`${isMobileMenuOpen ? "text-white dark:text-[#000000]" : 'hidden'} h-6 w-[30px]`}
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

                            <div className="flex items-center gap-2 cursor-pointer">
                                <div className="flex items-center justify-center border-white dark:border-[#2E1367] rounded-full w-[175px] h-[32px] border-[1px]">
                                    <div className="flex items-center justify-center gap-[16px]">
                                        <img src="/images/signin.png" alt="signin_icon" />
                                        <a href="/signin"><p className="text-white dark:text-[#000000] text-[14px] ">SIGN IN</p></a>
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

                                <DarkModeToggle />
                            </div>


                        </div>
                    </div>

                    {isMobileMenuOpen && (
                        // <div className="md:hidden" id="mobile-menu">
                        <div ref={mobileMenuRef} id="mobile-menu">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 fixed w-[430px] bg-gradient-to-b from-[#0C0D42] to-[#2E1367] dark:bg-gradient-to-b dark:from-[#ffffff] dark:to-[#e7dcff] z-50">
                                <a href="#" className="block rounded-md bg-gray-400 text-white dark:bg-gray-400 px-4 py-2 text-base font-medium" aria-current="page">LOGO</a>
                                <a href="/dashboard" className="block rounded-md px-4 py-2 text-base font-medium  text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-300 dark:over:text-[#ffffff]">
                                    <div className="flex items-center justify-start gap-4  text-white dark:text-[#000000]">
                                        <FaEthereum />
                                        <p className="text-[16px]">EVM ファーミング</p>
                                    </div>
                                </a>
                                <a href="/airdrop" className="block rounded-md px-4 py-2 text-base font-medium  text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-300 dark:over:text-[#ffffff]">
                                    <div className="flex items-center justify-start gap-4  text-white dark:text-[#000000]">
                                        <MdBubbleChart />
                                        <p className="text-[16px]">エアドロップ</p>
                                    </div>
                                </a>
                                <a href="/introduce" className="block rounded-md px-4 py-2 text-base font-medium  text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-300 dark:over:text-[#ffffff]">
                                    <div className="flex items-center justify-start gap-4  text-white dark:text-[#000000]">
                                        <FaUserPlus />
                                        <p className="text-[16px]">紹介</p>
                                    </div>
                                </a>
                                <a href="mypage" className="block rounded-md px-4 py-2 text-base font-medium  text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-300 dark:over:text-[#ffffff]">
                                    <div className="flex items-center justify-start gap-4  text-white dark:text-[#000000]">
                                        <FaHome />
                                        <p className="text-[16px]">マイページ</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )}
                </nav>

                <main>
                    <div className="min-h-custom mx-auto max-w-7xl px-6 py-2">
                        {children}
                    </div>
                </main>

                <footer className="pb-[12px] mx-auto flex items-center justify-center">
                    <p className="text-white dark:text-[#000000] text-[12px]">© 2024 XXXXXXX. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}