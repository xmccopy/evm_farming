"use client"
import Head from "next/head";
import { useState } from 'react';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import ApiService from "@/utils/ApiService";

export default function Home() {

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const apiService = new ApiService(process.env.NEXT_PIBLIC_BAKEND_URL || "http://192.168.136.127:8000");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await apiService.login(email, password);
      localStorage.setItem("token", response.data?.token);
      router.push('/dashboard');
    } catch(error) {
      console.log('singin error', error)
    }
  };

  return (
    <div className=" flex flex-col items-center justify-start">
      <Head>
        <title>Sign Up</title>
      </Head>

      <div className=" text-white dark:text-[#000000] rounded-lg max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">SIGN IN</h1>

        <div className="m-auto w-36 h-36">
          {/* Placeholder for the graphic */}
          <img
            src="/images/main.png"
            alt="Sign Up Graphic"
            className="w-full h-full"
          />
        </div>

        <form className="space-y-6" onSubmit={handleSignIn}>
          <div>
            <div className="px-2">メールアドレス</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="メールアドレス"
              className="w-full px-2 h-8 pl-2 pr-1.5 py-4 bg-white/30 dark:border-[#2F2F8A] dark:bg-white rounded-[5px] shadow border border-white backdrop-blur-[20px]"
            />
          </div>

          <div className="relative">
            <div className="px-2">パスワード</div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワード"
              className="w-full px-2 h-8 pl-2 pr-1.5 py-4 bg-white/30 dark:border-[#2F2F8A] dark:bg-white rounded-[5px] shadow border border-white backdrop-blur-[20px]"
            />
            <br />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
            </button>
          </div>

          <button type="submit" className="w-full bg-green-500 dark:bg-[#2E1367] text-white py-2 rounded-md hover:bg-green-600 transition">
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
