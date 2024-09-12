"use client";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function VerifyEmail() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [okResponse, setOkResponse] = useState(false);
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const email = searchParams.get('email');


    // Custom hook to run an effect only once For dev mode only
    function useEffectOnce(callback: () => void) {
        const hasRun = useRef(false);

        useEffect(() => {
            if (!hasRun.current) {
                callback();
                hasRun.current = true;
            }
        }, []);
    }

    useEffectOnce(() => {
        const verifyEmail = async () => {
            if (token && email) {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-email?token=${token}&email=${email}`, {
                    method: "GET",
                });

                if (response.ok) {
                    setMessage("会員登録が完了しました。");
                    setIsOpen(true);
                    setOkResponse(true);
                } else {
                    setMessage("メールの確認に失敗しました。");
                    setIsOpen(true);
                    setOkResponse(false);
                }
            }
        };

        verifyEmail();
    });

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b">
            <h1 className="text-white dark:text-[#2F2F8A] text-2xl mt-10 font-bold">会員登録確認</h1>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full bg-black bg-opacity-50">
                    <div className="bg-[#2F2F8A] text-white border-2 border-[#2F2F8A] dark:bg-[#ffffff] dark:text-[#000000] rounded-lg p-8 shadow-md max-w-[430px] w-full space-y-6 bg-opacity-70 backdrop-filter backdrop-blur-[9.23077px]">
                        <div className="flex justify-end">
                            <button onClick={toggleModal}>
                                <AiOutlineClose className="text-white text-2xl dark:text-[#000000]" />
                            </button>
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-bold mb-4">{message}</h2>
                            {okResponse ?
                                <div className="text-md mb-6">ご登録のメールアドレスに登録完了メールを送信しました。</div> :
                                <div className="text-md mb-6">もう一度お試しください</div>
                            }
                            <div className="flex flex-col">
                                <Link
                                    onClick={toggleModal}
                                    className="w-full py-2 rounded-full mb-4 text-white bg-[linear-gradient(107.21deg,_#9348A2_24.43%,_#2954A3_68.95%)] hover:bg-[linear-gradient(200.21deg,_#9348A2_24.43%,_#2954A3_68.95%)] shadow-md transition-all duration-1000 ease-in-out hover:ease-out" href={"signup"}>
                                    戻る
                                </Link>
                                {okResponse ?
                                    <Link href={"signin"} className="w-full text-center py-3 mb-4 text-[14px] font-semibold bg-[linear-gradient(160deg,_#665DCD_0%,_#5FA4E6_44.76%,_#D2AB67_100%)] hover:bg-[linear-gradient(200deg,_#665DCD_0%,_#5FA4E6_44.76%,_#D2AB67_100%)] rounded-[30px] shadow-md transition-all duration-1000 ease-in-out">
                                        SIGN IN
                                    </Link> : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
