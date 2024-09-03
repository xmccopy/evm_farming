"use client"
import Head from "next/head";
import { useState } from 'react';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';

export default function Home() {

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };


  return (
    <div className=" flex flex-col items-center justify-start">
      <Head>
        <title>Sign Up</title>
      </Head>

      <div className=" text-white rounded-lg max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">SIGN IN</h1>

        <div className="m-auto w-48 h-48">
          {/* Placeholder for the graphic */}
          <img
            src="/images/main.png"
            alt="Sign Up Graphic"
            className="w-full h-full"
          />
        </div>

        <form className="space-y-6">
          <div>
            <div className="px-2">メールアドレス</div>
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full px-2 py-2 bg-white border border-white rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-400"
            />
          </div>

          <div className="relative">
            <div className="px-2">パスワード</div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="パスワード"
              className="w-full px-2 py-2 bg-white border border-white rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-400"
            />
            <br />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1 transform -translate-y-1/2 text-gray-400" style={{ marginTop: '40px' }}
            >
              {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
            </button>
          </div>

          {/* <div>
            アクティベーションコード

            <input
              type="text"
              placeholder="アクティベーションコード"
              className="w-full px-4 py-2 bg-white border border-white rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-400"
            />
          </div> */}
          <button onClick={handleClick} className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
            サインイン
          </button>
        </form>

        <div className="text-center">
          <a href="/signup" className="text-[#D2AB67] underline text-[16px]">
            新規登録はこちら
          </a>
        </div>
      </div>
    </div >
  );
}
