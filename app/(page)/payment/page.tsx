import React from 'react';
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { PiCopy } from "react-icons/pi";
import { SiWalletconnect } from "react-icons/si";

export default function Payment() {
    return (
        <div className="mx-auto  text-white rounded-[24px] w-full shadow-lg">
            <div className='bg-[#2F2F8A] bg-opacity-80 w-full p-6 rounded-t-[24px] border-2 border-[#3333a5] rounded-tr-[24px]'>

                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <span className='w-[45px] h-[45px] text-[10px] bg-[#D9D9D9] flex justify-center items-center text-black text-center'>シンボル<br />ロゴ</span>
                    </div>
                    <div className="flex items-center h-full gap-2">
                        <div className='flex rounded-full  p-2 gap-2 bg-[#1C1C65] justify-center items-center'>
                            <span className='w-[25px] h-[25px] text-[5px] text-black flex justify-center items-center text-center bg-[#D9D9D9]'>シンボル<br />ロゴ</span>
                            <span className="text-[16px]">+ 0.001</span>
                            <span className="w-[15px] h-[15px]"><BsFillQuestionCircleFill /></span>
                        </div>
                        <span className='w-[41px] h-[41px] p-2 bg-[#1C1C65] rounded-full flex justify-center items-center'>
                            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 25.052C9.18479 25.052 6.00537 23.735 3.66117 21.3908C1.31696 19.0466 0 15.8672 0 12.552C0 9.2368 1.31696 6.05737 3.66117 3.71317C6.00537 1.36896 9.18479 0.052002 12.5 0.052002C15.8152 0.052002 18.9946 1.36896 21.3388 3.71317C23.683 6.05737 25 9.2368 25 12.552C25 15.8672 23.683 19.0466 21.3388 21.3908C18.9946 23.735 15.8152 25.052 12.5 25.052ZM22.1875 15.052C22.6109 13.4122 22.6109 11.6918 22.1875 10.052H17.4125C17.5276 11.7167 17.5276 13.3873 17.4125 15.052H22.1875ZM21.1625 17.552H17.1375C16.9287 19.0588 16.5296 20.5331 15.95 21.9395C18.1459 21.1295 19.9897 19.5775 21.1625 17.552ZM10.1 15.052H14.9C15.0357 13.3881 15.0357 11.7159 14.9 10.052H10.1C9.96427 11.7159 9.96427 13.3881 10.1 15.052ZM10.4125 17.552C10.925 20.552 11.825 22.552 12.5 22.552C13.175 22.552 14.075 20.552 14.5875 17.552H10.4125ZM2.8125 15.052H7.5875C7.47242 13.3873 7.47242 11.7167 7.5875 10.052H2.8125C2.38911 11.6918 2.38911 13.4122 2.8125 15.052ZM3.8375 17.552C5.01032 19.5775 6.8541 21.1295 9.05 21.9395C8.525 20.7395 8.125 19.2395 7.8625 17.552H3.8375ZM21.1625 7.552C19.9897 5.52651 18.1459 3.97455 15.95 3.1645C16.475 4.3645 16.875 5.8645 17.1375 7.552H21.1625ZM10.4125 7.552H14.5875C14.075 4.552 13.175 2.552 12.5 2.552C11.825 2.552 10.925 4.552 10.4125 7.552ZM3.8375 7.552H7.8625C8.1125 5.8645 8.525 4.3645 9.05 3.1645C6.8541 3.97455 5.01032 5.52651 3.8375 7.552Z" fill="white" />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="text-[32px] font-bold mb-4 flex gap-3">
                        <span>10.00 TRX</span>
                        <span className='w-[49px] h-[49px] bg-white rounded-full flex justify-center items-center'><PiCopy className='text-[#2E1367] w-[20px] h-[20px]' /></span>
                    </div>
                    <div className="text-sm flex items-center mb-[50px]">
                        TROX(TRC-20)
                    </div>
                    <div className=" flex items-center">
                        <span>
                            <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22" cy="22.302" r="20.5" stroke="#67D28B" stroke-opacity="0.2" stroke-width="3" />
                                <path d="M21.5 1.802C33 1.802 42.5 10.1517 42.5 22.302C42.5 34.4523 32.5 42.802 21.5 42.802C14 42.4687 1.5 37.302 1.5 21.302" stroke="#0ACF83" stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </span>
                        <div className='text-[16px] ml-3'>
                            <div className='text-white'>有効期限</div>
                            <div className="text-green-400">02:34:54</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="px-6 pt-3 border-2 border-[#3333a5] rounded-br-[24px] rounded-b-[24px]">
                <div className="mb-4">
                    <select className="w-full p-6 text-white rounded-lg text-white bg-white bg-opacity-0 rounded-[16px] border-2 border-[#252586]">
                        <option value="tron">TRON(TRC-20)</option>
                    </select>
                </div>

                <button className="mb-4 flex w-full rounded-xl gap-3 justify-center items-center py-4 bg-white">
                    <span className='w-[25px] h-[25px] text-[5px] text-black flex justify-center items-center text-center bg-[#D9D9D9]'>シンボル<br />ロゴ</span>
                    <div className="text-[#1C1C65]">Cryptomusで支払う</div>
                </button>

                <div className="flex items-center justify-center mb-4 gap-3">
                    <svg width="35%" height="2" viewBox="0 0 144 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.552002" x2="144" y2="0.552002" stroke="white" stroke-opacity="0.6" />
                    </svg>
                    <span>または</span>
                    <svg width="35%" height="2" viewBox="0 0 144 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.552002" x2="144" y2="0.552002" stroke="white" stroke-opacity="0.6" />
                    </svg>

                </div>

                <button className="mb-4 flex w-full text-[#1C1C65] rounded-xl gap-3 justify-center items-center py-4 bg-white">
                    <SiWalletconnect className='w-[40px] h-[29px]' />
                    <div>
                        ウォレットコネクト
                    </div>
                </button>
            </div>
        </div >
    );
};

