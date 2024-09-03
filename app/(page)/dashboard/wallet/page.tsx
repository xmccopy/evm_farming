"use client";
import { useState } from "react";
import Head from 'next/head';
import { IoKeyOutline } from "react-icons/io5";
import { PiCopy } from "react-icons/pi";
import { FaEthereum } from "react-icons/fa";
import { GiTrashCan } from "react-icons/gi";
import Link from "next/link";

export default function Wallet() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className=" flex flex-col items-center justify-start text-white">

            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="m-auto w-64 h-64">
                {/* Placeholder for the graphic */}
                <img src="/images/main.png" alt="Sign Up Graphic" className="w-full h-full" />
            </div>


            <h1 className="text-3xl font-bold mb-8">EVM ファーミング</h1>

            <Link href="/paypment"
                className="w-64 py-3 text-center mb-4 text-lg font-semibold bg-[linear-gradient(160deg,_#665DCD_0%,_#5FA4E6_44.76%,_#D2AB67_100%)] hover:bg-[linear-gradient(200deg,_#665DCD_0%,_#5FA4E6_44.76%,_#D2AB67_100%)] rounded-[30px] shadow-md transition-all duration-1000 ease-in-out">
                ライセンス購入
            </Link>

            <div className="mx-auto w-full bg-[#2F2F8A] bg-opacity-40 text-white rounded-t-md rounded-tr-md pt-8 px-6 pb-5 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <FaEthereum />
                    <div className="text-lg font-bold">ウォレット</div>
                    <IoKeyOutline />
                    <span>0x9023...529d</span>
                    <PiCopy />
                    <GiTrashCan onClick={toggleModal} />
                </div>

                <div className="flex  items-center mb-4">
                    <div className="text-yellow-400  text-[16px] w-1/2 text-sm">エアドロポイント</div>
                    <div className="text-yellow-400 text-[24px] w-1/2 font-bold">1,000<span className="text-[16px] ">POINT</span></div>
                </div>

                <div className="flex justify-between items-center mb-6">
                    <div className="text-sm w-1/2  text-[14px]">残高</div>
                    <div className="text-xl font-bold w-1/2  text-[20px]">1,000<span className="text-base  text-[14px]">USD</span></div>
                </div>

            </div>
            <button className="w-full text-lg font-semibold bg-[#2F2F8A] shadow-md py-3">
                詳しく見る
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#2F2F8A] text-white rounded-[30px] p-8 shadow-md max-w-[430px] bg-opacity-70  w-full space-y-6 backdrop-filter backdrop-blur-[9.23077px]">
                        <h2 className="text-lg font-semibold text-center">
                            ウォレットを本当に削除しますか？
                        </h2>

                        <div className="space-y-4">
                            <button
                                onClick={() => {
                                    // Handle wallet deletion logic here
                                    toggleModal();
                                }}
                                className="w-full px-4 py-2 bg-[#D50101] hover:bg-red-700 text-white rounded-full border-black"
                            >
                                ウォレットを削除
                            </button>

                            <button
                                onClick={toggleModal}
                                className="w-full px-4 py-2 bg-transparent border border-gray-300 text-white rounded-full hover:bg-gray-700"
                            >
                                キャンセル
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}