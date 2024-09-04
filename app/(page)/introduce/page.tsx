'use client'

import SubTitle from "@/app/components/SubTitle"
import Table_Intro from "@/app/components/Table_Intro";
import Title from "@/app/components/Title"
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdBubbleChart } from "react-icons/md";

import { PiEye } from "react-icons/pi";
import { PiEyeClosed } from "react-icons/pi";
import { IoIosBrowsers } from "react-icons/io";

export default function Home() {
    const sampleData = [
        {
            id: 1,
            email: "sample@email.com",
            allprice: 1000
        },
        {
            id: 2,
            email: "sample@email.com",
            allprice: 1000
        },
        {
            id: 3,
            email: "sample@email.com",
            allprice: 1000
        },
        {
            id: 4,
            email: "sample@email.com",
            allprice: 1000
        },
        {
            id: 5,
            email: "sample@email.com",
            allprice: 1000
        },
        {
            id: 6,
            email: "sample@email.com",
            allprice: 1000
        },
        {
            id: 7,
            email: "sample@email.com",
            allprice: 1000
        },
    ]

    const [isOpenWithdraw, setIsOpenWithdraw] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isOpenConfirm, setIsOpenConfirm] = useState(false);

    const handleWithdraw = () => {
        setIsOpenWithdraw(true)
    }

    const handleWithdrawConfirm = () => {
        setIsOpenWithdraw(false);
        setIsOpenConfirm(true);
    }
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    const closeModal = () => {
        setIsOpenWithdraw(false);
        setIsOpenConfirm(false);
    }

    return (
        <>
            <div>
                <Title label="紹介" />
                <div className="flex flex-col gap-[24px] items-center justify-center">
                    <div className="flex items-center justify-center relative z-20 p-[25px] bg-white dark:bg-gray-200">
                        <img src="/images/QR.png" alt="QR code" className="position z-30" />
                    </div>
                    <p className="text-white dark:text-[#000000] text-[20px]">紹介リンク</p>
                    <div className="w-[215px] h-[45px] border-white border-[2px] dark:border-[#2E1367] rounded-[8px] flex items-center justify-center">
                        <div className="flex items-center justify-center gap-[8px]">
                            <p className="text-[12px] text-white dark:text-[#000000]">https://SAMPLE.jp/</p>
                            <IoIosBrowsers size={20} className="text-white dark:text-[#000000]"/>
                        </div>
                    </div>
                </div>
                <div className="mt-[48px] mb-[12px]">
                    <SubTitle label="紹介統計" />
                    <div
                        className="
                            w-full
                            flex
                            items-center
                            justify-start
                            text-[12px]
                            px-6 
                            py-2
                          bg-[#4036C1] 
                            dark:bg-[#ffffff]
                            bg-opacity-30
                            text-white
                            dark:text-[#000000]
                            border-[2px]
                            border-[#a7a3e0]
                            border-opacity-10
                            dark:border-[#2E1367]
                            rounded-[5.5px]
                            mb-[20px]
                        "
                    >
                        <div className="flex items-center gap-[12px]">
                            <FaRegUser size={24} />
                            <div className="flex flex-col gap-[1px] items-center justify-start">
                                <p className="text-[20px] font-bold">0</p>
                                <p className="text-[12px]">紹介報酬</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="
                            w-full
                            flex
                            flex-col
                            items-start
                            justify-start
                            text-[12px]
                            px-6 
                            py-4
                          bg-[#4036C1] 
                            bg-opacity-30
                            dark:bg-[#ffffff]
                            text-white
                            dark:text-[#000000]
                            border-[2px]
                            border-[#a7a3e0]
                            dark:border-[#2E1367]
                            border-opacity-10
                            rounded-[5.5px]
                            mb-[48px]
                        "
                    >
                        <div className="flex items-center gap-[12px]">
                            <MdBubbleChart size={24} />
                            <div className="flex flex-col gap-[1px] items-center justify-start">
                                <p className="text-[20px] font-bold">$0</p>
                                <p className="text-[12px]">紹介報酬</p>
                            </div>
                        </div>
                        <button
                            onClick={handleWithdraw}
                            className="
                                h-[42px]  transition-all duration-1000 ease-in-out hover:ease-out w-full mt-[16px] px-8 py-4 bg-gradient-to-tl from-[#665dcd] via-[#5fa4e6] to-[#d2ab67] rounded-[30px] shadow border border-white justify-center items-center gap-4 inline-flex
                                "
                        >
                            <div className="text-center text-white text-sm font-bold font-['Noto Sans JP'] leading-tight">出金申請</div>
                        </button>
                    </div>
                    <div className="w-[381px] h-[285px] px-6 py-6 bg-[#2f2f8a]/40 dark:bg-[#ffffff] rounded-md border border-[#e5bb01] backdrop-blur-[18.46px] flex-col justify-start items-center gap-2 inline-flex mb-[48px]">
                        <div className="flex-col justify-start items-center gap-4 flex">
                            <div className="flex-col justify-start items-center gap-4 flex">
                                <div className="flex-col justify-start items-center gap-4 flex">
                                    <div className="text-[#e5bb01] text-base font-bold font-['Noto Sans JP'] leading-relaxed">エアドロポイント</div>
                                    <img src="/images/prise.png" alt="" />
                                    <div className="text-[#e5bb01] text-base font-medium font-['Noto Sans JP'] leading-relaxed">1,000 POINT</div>
                                </div>
                                <div className="self-stretch h-3 flex-col justify-end items-end gap-4 flex">
                                    <div className="w-[309px] h-3 relative">
                                        <div className="w-[236px] h-[9.17px] left-[2px] top-[1.42px] absolute z-50 bg-[#ffb73b]/60 rounded-[18.33px] border border-[#e5bb01]" />
                                        <div className="w-[309px] h-3 left-0 top-0 absolute bg-white/30 dark:bg-gray-200 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SubTitle label="紹介者一覧" />
                    <Table_Intro data={sampleData} />
                    {isOpenWithdraw && (
                        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40">
                            <div className="bg-[#2F2F8A] bg-opacity-90 p-6 rounded-md text-white w-[425px]">
                                <h2 className="text-[20px] font-bold text-center mb-[6px]">送金先アドレス</h2>
                                <div className="flex items-center justify-center gap-[16px] mb-[24px]">
                                    <p className="text-[16px] font-bold text-center">出金可能額</p>
                                    <p className="text-[32px] font-bold text-center">50<span className="text-[16px] font-bold ">USDT</span></p>
                                </div>

                                <div className="flex flex-col items-start justify-center gap-[20px] mb-[40px]">
                                    <p className="text-[16px] font-bold text-white">アドレス</p>
                                    <input type="text" className="w-[340px] h-8 pl-2 pr-1.5 py-2.5 bg-white/30 rounded-[5px] shadow border border-white backdrop-blur-[20px]" />
                                    <p className="text-[16px] font-bold text-white">チェーン (USDT)</p>
                                    <div className="flex items-center justify-start gap-[48px]">
                                        <div className="flex items-center justify-center gap-[12px]">
                                            <input type="radio" name="chain" className="w-[24px] h-[24px]" />
                                            <p className="text-[12px] text-white">ERC</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-[12px]">
                                            <input type="radio" name="chain" className="w-[24px] h-[24px]" />
                                            <p className="text-[12px] text-white">TRC</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-[12px]">
                                            <input type="radio" name="chain" className="w-[24px] h-[24px]" />
                                            <p className="text-[12px] text-white">BEP</p>
                                        </div>
                                    </div>
                                    <p className="text-[16px] font-bold text-white">出金額</p>
                                    <input type="text" className="w-[340px] h-8 pl-2 pr-1.5 py-2.5 bg-white/30 rounded-[5px] shadow border border-white backdrop-blur-[20px]" />
                                    <p className="text-[16px] font-bold text-white">パスワード</p>
                                    <div className="relative">
                                        <input
                                            type={passwordVisible ? "text" : "password"}
                                            className="w-[340px] h-8 pl-2 pr-1.5 py-2.5 bg-white/30 rounded-[5px] shadow border border-white backdrop-blur-[20px]"
                                        />
                                        {passwordVisible ? (
                                            <PiEye
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                                onClick={togglePasswordVisibility}
                                            />
                                        ) : (
                                            <PiEyeClosed
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                                onClick={togglePasswordVisibility}
                                            />
                                        )}
                                    </div>

                                </div>

                                <div className="flex flex-col justify-center items-center  gap-4">
                                    <button
                                        onClick={handleWithdrawConfirm}
                                        className=" transition-all duration-1000 ease-in-out hover:ease-out h-[42px] w-full px-8 py-4 bg-gradient-to-tl from-[#665dcd] via-[#5fa4e6] to-[#d2ab67] rounded-[30px] shadow border border-white justify-center items-center gap-4 inline-flex"
                                    >
                                        <div className="text-center text-white text-sm font-bold font-['Noto Sans JP'] leading-tight">出金申請する</div>
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className="bg-[#1C1C65] shadow-md transition-all duration-1000 ease-in-out hover:ease-out bg-opacity-50 text-white font-bold w-full h-[42px] border-[1px] border-white rounded-full text-[14px]"
                                    >
                                        キャンセル
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {isOpenConfirm && (
                        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40">
                            <div className="bg-[#2F2F8A] bg-opacity-90 p-6 rounded-md text-white w-[425px]">
                                <h2 className="text-[20px] font-bold mb-[48px]">出金が完了しました。</h2>
                                <div className="flex justify-end gap-4">
                                    <button
                                        onClick={closeModal}
                                        className="bg-[#1C1C65] shadow-md transition-all duration-1000 ease-in-out hover:ease-out bg-opacity-50 text-white font-bold w-full h-[42px] border-[1px] border-white rounded-full text-[14px]"
                                    >
                                        戻る
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
