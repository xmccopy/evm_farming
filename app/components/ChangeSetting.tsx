'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

interface ChangeSettingProps {
    title: string;
    subvalue: string;
}

const ChangeSetting: React.FC<ChangeSettingProps> = ({
    title,
    subvalue
}) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOnCancel = () => {
        router.push("/mypage")
    }

    const handleOnChange = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        router.push('/mypage')
    }

    return (
        <>
            <div
                className="
                text-[16px]
                font-bold
                text-white
                mb-[24px]
            "
            >
                {title}
            </div>
            <div
                className="
                w-full
                flex
                items-center
                justify-between
                text-[12px]
                px-6 
                py-2
              bg-[#4036C1] 
                bg-opacity-30
                text-white
                border-[1px]
                border-[#a7a3e0]
                border-opacity-10
                rounded-[5.5px]
                mb-[24px]
            "
            >
                <input
                    type="text"
                    value={subvalue}
                    readOnly
                    className="text-left w-[50%] bg-transparent border-none outline-none"
                />
            </div>
            <div className="flex items-center justify-around gap-[12px]">
                <button
                    onClick={handleOnChange}
                    className="
                        w-[155px]
                        h-[32px]
                        flex
                        items-center
                        justify-center
                        text-[12px]
                        font-bold
                        text-white
                        border-[1px]
                        border-white
                        bg-gradient-to-b
                      from-[#E5BB01] 
                      to-[#27230f]
                        rounded-full
                    "
                >
                    変更
                </button>
                <button
                    onClick={handleOnCancel}
                    className="
                        w-[155px]
                        h-[32px]
                        flex
                        items-center
                        justify-center
                        text-[12px]
                        font-bold
                        text-white
                        border-[1px]
                        border-white
                        bg-[#4036C1]
                        bg-opacity-30
                        rounded-full
                    "
                >
                    キャンセル
                </button>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-start pt-[150px] justify-center z-40">
                    <div className="bg-[#2F2F8A] bg-opacity-80 p-6 rounded-md text-white w-[400px]">
                        <h2 className="text-[20px] font-bold mb-[48px]">メールアドレスを変更しました</h2>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={closeModal}
                                className="bg-[#1C1C65] bg-opacity-50 text-white font-bold w-full h-[42px] border-[1px] border-white rounded-full text-[14px]"
                            >
                                戻る
                            </button>
                            {/* <button
                                onClick={() => {}}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                確認
                            </button> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ChangeSetting;