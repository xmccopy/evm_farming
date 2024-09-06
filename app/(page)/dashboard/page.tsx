"use client";
import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import { FiExternalLink } from "react-icons/fi";

export default function Dashboard() {

    const [isOpen, setIsOpen] = useState(false);
    const [privateKey, setPrivateKey] = useState('');

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleImport = () => {
        // Handle wallet import logic here
        alert('ウォレットがインポートされました。');
    };

    return (
        <div className=" flex flex-col items-center justify-start text-white dark:text-[#000000]">
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="m-auto w-36 h-36">
                {/* Placeholder for the graphic */}
                <img
                    src="/images/main.png"
                    alt="Sign Up Graphic"
                    className="w-full h-full"
                />
            </div>


            <h1 className="text-3xl font-bold mb-8">EVM ファーミング</h1>

            <Link href="/payment" className=" text-center w-64 py-3 mb-4 text-[14px] font-semibold bg-[linear-gradient(160deg,_#665DCD_0%,_#5FA4E6_44.76%,_#D2AB67_100%)] hover:bg-[linear-gradient(200deg,_#665DCD_0%,_#5FA4E6_44.76%,_#D2AB67_100%)] rounded-[30px] shadow-md transition-all duration-1000 ease-in-out">
                ライセンス購入
            </Link>

            <p className="mb-4 font-bold">フリーミアムウォレット</p>
            <p className="mb-8 text-center">フリーミアムウォレットはまだありません。<br />まずは作成しましょう。</p>

            <button onClick={toggleModal} className="w-64 py-3 text-[14px] mb-12 font-semibold bg-[linear-gradient(107.21deg,_#9348A2_24.43%,_#2954A3_68.95%)] hover:bg-[linear-gradient(200.21deg,_#9348A2_24.43%,_#2954A3_68.95%)] rounded-[30px] shadow-md transition-all duration-1000 ease-in-out hover:ease-out">
                + ウォレットをインポート
            </button>


            {isOpen && (
                <div className="fixed inset-0 flex justify-center items-center  bg-black bg-opacity-50 z-50">
                    <div className="bg-[#2F2F8A] border-2 border-[#2F2F8A] dark:bg-[#ffffff] backdrop-filter backdrop-blur-md bg-opacity-70  p-6 rounded-[32px] shadow-md max-w-[430px] w-full">
                        <h2 className="text-white dark:text-[#000000] text-[20px] mb-4">EVMウォレットをインポートする</h2>
                        <p className="mb-12 text-[14px] leading-relaxed">
                            既存のウォレットでファームするには、<br />
                            その
                            <a href="#" className="text-[#009FFF] underline">
                                秘密鍵をインポートすることができます<FiExternalLink className="w-[10px] h-[10px] inline -top-1 relative" />
                            </a>
                        </p>
                        <label className="text-white dark:text-[#000000] block mb-5 text-[16px] font-bold">プライベートキー</label>
                        <textarea
                            placeholder="ここにプライベートキーを入力してください"
                            value={privateKey}
                            onChange={(e) => setPrivateKey(e.target.value)}
                            className="w-full p-3 h-20 rounded-lg mb-5 text-[12px] bg-gray-300 dark:bg-white dark:border-2 dark:border-[#2F2F8A] text-white dark:text-[#000000] placeholder-gray-400 focus:outline-none"
                        />
                        <p className="text-gray-400 dark:text-gray-700 text-sm mb-20 text-[12px]">
                            ウォレットのインポートはプレミアムプランの機能であり、
                            ウォレット1つあたり月額25ドルの料金がかかります。
                        </p>
                        <button
                            onClick={() => { handleImport(); toggleModal(); }}
                            className="w-full py-2 rounded-full mb-5 text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                        >
                            ウォレットをインポート
                        </button>
                        <button onClick={toggleModal}
                            className="w-full py-2 rounded-full text-white bg-[linear-gradient(107.21deg,_#9348A2_24.43%,_#2954A3_68.95%)] hover:bg-[linear-gradient(200.21deg,_#9348A2_24.43%,_#2954A3_68.95%)] shadow-md transition-all duration-1000 ease-in-out hover:ease-out"
                            >
                            キャンセル
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
