"use client";
import { useState } from "react";
import Head from 'next/head';
import { IoWarningOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export default function MailCheck() {
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
        <div className="flex flex-col items-center justify-start text-white">
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="w-52 h-52">
                {/* Placeholder for the graphic */}
                <img
                    src="/images/main.png"
                    alt="Sign Up Graphic"
                    className="w-full h-full"
                />
            </div>

            <h1 className="text-3xl font-bold mb-8">EVM ファーミング</h1>

            <Link href="/payment" className="w-64 py-3 mb-4 text-[14px] font-semibold bg-[linear-gradient(160deg,_#665DCD_0%,_#5FA4E6_44.76%,_#D2AB67_100%)] hover:bg-[linear-gradient(200deg,_#665DCD_0%,_#5FA4E6_44.76%,_#D2AB67_100%)] rounded-[30px] shadow-md transition-all duration-1000 ease-in-out">
                ライセンス購入
            </Link>

            <button onClick={toggleModal} className="w-64 py-3 text-[14px] mb-12 font-semibold bg-[linear-gradient(107.21deg,_#9348A2_24.43%,_#2954A3_68.95%)] hover:bg-[linear-gradient(200.21deg,_#9348A2_24.43%,_#2954A3_68.95%)] rounded-[30px] shadow-md transition-all duration-1000 ease-in-out hover:ease-out">
                + ウォレットをインポート
            </button>

            <div className='flex gap-3 rounded-lg mb-12 w-full py-5 px-4 bg-[#D50101] bg-opacity-35 backdrop-filter backdrop-blur-[9.23077px]'>
                <IoWarningOutline className='' />
                <div className=''>
                    <p className='mb-2 font-bold text-[12px] li'>メールアドレス認証</p>
                    <p className='mb-2 text-[12px]'>メールアドレスを認証して、</p>
                    <p className='text-[12px]'> アカウントの確認を完了してください。</p>
                </div>
            </div>
            <p className="mb-4 font-bold text-[20px]">フリーミアムウォレット</p>
            <p className="mb-8 text-center text-[14px]">フリーミアムウォレットはまだありません。<br />まずは作成しましょう。</p>

            {isOpen && (
                <div className="fixed inset-0 flex justify-center items-center  bg-black bg-opacity-50 z-50">
                    <div className="bg-[#2F2F8A] backdrop-filter backdrop-blur-md bg-opacity-70  p-6 rounded-[32px] shadow-md max-w-sm w-full">
                        <h2 className="text-white text-[20px] mb-4">EVMウォレットをインポートする</h2>
                        <p className="mb-12 text-[14px] leading-relaxed">
                            既存のウォレットでファームするには、<br />
                            その
                            <a href="#" className="text-[#009FFF] underline">
                                秘密鍵をインポートすることができます<FiExternalLink className="w-[10px] h-[10px] inline -top-1 relative" />
                            </a>
                        </p>
                        <label className="text-white block mb-5 text-[16px] font-bold">プライベートキー</label>
                        <textarea
                            placeholder="ここにプライベートキーを入力してください"
                            value={privateKey}
                            onChange={(e) => setPrivateKey(e.target.value)}
                            className="w-full p-3 h-20 rounded-lg mb-5 text-[12px] bg-gray-300 text-white placeholder-gray-400 focus:outline-none"
                        />
                        <p className="text-gray-400 text-sm mb-20 text-[12px]">
                            ウォレットのインポートはプレミアムプランの機能であり、
                            ウォレット1つあたり月額25ドルの料金がかかります。
                        </p>
                        <button
                            onClick={() => { handleImport(); toggleModal(); }}
                            className="w-full py-3 rounded-full mb-5 text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                        >
                            ウォレットをインポート
                        </button>
                        <button onClick={toggleModal}
                            className="w-full py-3 rounded-full text-white bg-transparent border border-white hover:bg-white hover:text-indigo-900"
                        >
                            キャンセル
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
