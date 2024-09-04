"use client";
import Head from "next/head";
import { useState } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-b">
      <Head>
        <title>Sign Up</title>
      </Head>

      <div className="text-white dark:text-[#000000] rounded-lg max-w-md w-full space-y-6">
        <h1 className="text-[32px] font-bold text-center">SIGN UP</h1>

        <div className="m-auto w-36 h-36">
          {/* Placeholder for the graphic */}
          <img
            src="/images/main.png"
            alt="Sign Up Graphic"
            className="w-full h-full"
          />
        </div>

        <form className="space-y-6">
          <div>
            <label className="text-white dark:text-[#000000] block pl-2">メールアドレス</label>
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full px-2 py-2 bg-white  border-white dark:border-[3px] dark:border-[#2E1367] rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-400"
            />
          </div>

          <div className="relative">
            <label className="block  pl-2">パスワード</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="パスワード"
              className="w-full px-2 py-2 bg-white border border-white dark:border-[3px] dark:border-[#2E1367] rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3/4 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
            </button>
          </div>

          <div>
            <label className="block pl-2">アクティベーションコード</label>
            <input
              type="text"
              placeholder="アクティベーションコード"
              className="w-full px-2 py-2 bg-white border border-white dark:border-[3px] dark:border-[#2E1367] rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-400"
            />
          </div>

          <button
            type="button"
            onClick={toggleModal}
            className="w-full bg-green-500 dark:bg-[#2E1367] text-white py-2 mt-[40px] rounded-md hover:bg-green-600 transition" style={{ marginTop: '40px' }}>
            新規登録
          </button>
        </form>

        <div className="text-center">
          <Link href="/signin" className="text-[#D2AB67] underline text-[16px]">
            サインインはこちら
          </Link>
        </div>
      </div>

      {/* Modal Background */}
      {
        isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center w-full bg-black bg-opacity-50">
            <div className="bg-[#2F2F8A] text-white rounded-lg p-8 shadow-md max-w-[430px] w-full space-y-6 bg-opacity-70 backdrop-filter backdrop-blur-[9.23077px]">
              {/* Close Button */}
              <div className="flex justify-end">
                <button onClick={toggleModal}>
                  <AiOutlineClose className="text-white text-2xl" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4">
                  仮登録が完了しました。 <br /> メールをご確認ください。
                </h2>
                <p className="text-sm text-gray-300 mb-6">
                  ご登録のメールアドレスに本登録メールを送信しました。メールに記載されているURLから本登録を完了してください。
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-center">
                <button
                  onClick={toggleModal}
                  className="px-6 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition"
                >
                  戻る
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
}
