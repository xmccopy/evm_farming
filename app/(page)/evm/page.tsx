"use client"
import { FaArrowLeft } from "react-icons/fa";
import { IoKeyOutline, IoWarningOutline } from "react-icons/io5";
import { RiBarChart2Fill } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
export default function evm() {
    return (
        <div className="text-white dark:text-[#000000]">
            <div className="flex justify-between items-center pb-18">
                <FaArrowLeft className="w-[19px]" />
                <div className="flex gap-3 items-center">
                    <span className="font-[14px] flex items-center ">
                        Premium
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.21877 0.884933L2.97802 1.60807C2.88859 1.88291 2.73633 2.13272 2.53351 2.33735C2.3307 2.54198 2.08301 2.69569 1.81043 2.78608L1.0844 3.02876C1.05987 3.03677 1.03849 3.05241 1.02333 3.07342C1.00817 3.09444 1 3.11976 1 3.14575C1 3.17173 1.00817 3.19705 1.02333 3.21807C1.03849 3.23909 1.05987 3.25472 1.0844 3.26273L1.81043 3.50595C2.08041 3.59651 2.3257 3.74931 2.5268 3.95221C2.7279 4.1551 2.87926 4.4025 2.96884 4.67472L3.20959 5.40656C3.21754 5.43128 3.23305 5.45283 3.2539 5.46812C3.27475 5.4834 3.29987 5.49164 3.32565 5.49164C3.35143 5.49164 3.37655 5.4834 3.3974 5.46812C3.41825 5.45283 3.43376 5.43128 3.44171 5.40656L3.6911 4.68397C3.78083 4.41183 3.93224 4.16452 4.13332 3.96164C4.3344 3.75876 4.57961 3.60591 4.84951 3.5152L5.57554 3.27198C5.60007 3.26397 5.62144 3.24834 5.63661 3.22732C5.65177 3.2063 5.65994 3.18098 5.65994 3.155C5.65994 3.12901 5.65177 3.10369 5.63661 3.08267C5.62144 3.06166 5.60007 3.04602 5.57554 3.03801L4.85868 2.78608C4.58602 2.69584 4.33825 2.54218 4.13542 2.33754C3.93258 2.13289 3.78037 1.883 3.6911 1.60807L3.45034 0.875683C3.44148 0.851227 3.42514 0.830239 3.40368 0.815742C3.38222 0.801246 3.35675 0.793989 3.33094 0.795018C3.30513 0.796047 3.28031 0.805307 3.26005 0.821466C3.2398 0.837625 3.22515 0.859848 3.21823 0.884933M7.5701 3.75843L7.23327 4.77049C7.10791 5.15519 6.89463 5.50483 6.61062 5.7912C6.32661 6.07757 5.97982 6.29268 5.59821 6.41917L4.58231 6.75979C4.54806 6.77102 4.51822 6.79288 4.49706 6.82225C4.47589 6.85162 4.4645 6.88699 4.4645 6.92329C4.4645 6.95959 4.47589 6.99496 4.49706 7.02433C4.51822 7.05371 4.54806 7.07557 4.58231 7.0868L5.59821 7.42742C5.97621 7.55417 6.31966 7.76807 6.60125 8.0521C6.88285 8.33614 7.09482 8.68248 7.22031 9.06359L7.55769 10.0882C7.56922 10.1222 7.59104 10.1518 7.62008 10.1727C7.64912 10.1937 7.68392 10.2049 7.71963 10.2049C7.75533 10.2049 7.79014 10.1937 7.81918 10.1727C7.84822 10.1518 7.87003 10.1222 7.88157 10.0882L8.2319 9.0761C8.35758 8.6951 8.56961 8.34885 8.85118 8.06485C9.13275 7.78084 9.4761 7.56687 9.854 7.43993L10.8694 7.09986C10.9036 7.08863 10.9335 7.06676 10.9546 7.03739C10.9758 7.00802 10.9872 6.97265 10.9872 6.93635C10.9872 6.90005 10.9758 6.86468 10.9546 6.83531C10.9335 6.80594 10.9036 6.78407 10.8694 6.77284L9.86642 6.41917C9.48478 6.29284 9.13798 6.07778 8.85404 5.79138C8.5701 5.50497 8.35698 5.15526 8.2319 4.77049L7.89452 3.74537C7.8817 3.7117 7.85874 3.68294 7.82885 3.66312C7.79897 3.64329 7.76368 3.63341 7.72794 3.63485C7.6922 3.63629 7.6578 3.64898 7.62958 3.67115C7.60137 3.69332 7.58022 3.72384 7.5701 3.75843Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <IoKeyOutline />
                    <span className="px-3 py-2 bg-[#E5BB01] rounded-full bg-opacity-30 text-[12px]">支払い待ち</span>
                </div>
            </div>
            <div className="text-[20px] text-white dark:text-[#000000] mb-6">EVMウォレット #1</div>
            <div className="text-[14px] text-white dark:text-[#000000] mb-6 flex gap-2 items-center">
                <p>0x9023...529d</p>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_181_1293)">
                        <path d="M9.04462 4.83332C9.22915 3.58035 8.28034 2.91189 6.9732 2.45832L7.39701 0.769631L6.36486 0.513084L5.95355 2.16011L5.12974 1.96308L5.54701 0.304155L4.51546 0.0476074L4.09224 1.74225L3.4357 1.58749V1.58154L2.00951 1.2232L1.7351 2.32677C1.7351 2.32677 2.49879 2.50654 2.48689 2.51189C2.90474 2.61963 2.97617 2.89404 2.96427 3.10892L2.48689 5.04225L2.59403 5.07796L2.48093 5.05416L1.80653 7.75713C1.75891 7.88273 1.62736 8.0738 1.3351 7.99582C1.34701 8.01368 0.589267 7.81725 0.589267 7.81725L0.0761719 8.99285L1.41903 9.32618L2.15296 9.51784L1.7232 11.2303L2.75534 11.4863L3.1732 9.79225L4.00236 10.0065L3.57915 11.6952L4.61129 11.9524L5.0345 10.2399C6.79522 10.5732 8.12022 10.4422 8.67498 8.8488C9.1226 7.56665 8.65117 6.83213 7.72617 6.34285C8.40058 6.19404 8.90772 5.74642 9.03867 4.83332H9.04462ZM6.68748 8.13927C6.37081 9.42261 4.21129 8.7238 3.51308 8.55713L4.07974 6.28332C4.77736 6.46249 7.02141 6.80237 6.68689 8.13332L6.68748 8.13927ZM7.00355 4.81546C6.71724 5.97915 4.91486 5.38808 4.33629 5.24523L4.84879 3.1863C5.43391 3.32975 7.30712 3.60415 7.00355 4.81546Z" fill="#F7931A" />
                    </g>
                    <defs>
                        <clipPath id="clip0_181_1293">
                            <rect width="9.14286" height="12" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_181_1295)">
                        <path d="M8.9202 5.82925V5.32925H8.4202H1.04688C1.5196 2.77172 3.76518 0.833252 6.466 0.833252C9.50987 0.833252 11.9762 3.29641 11.9762 6.33325C11.9762 9.3701 9.50987 11.8333 6.466 11.8333C3.76571 11.8333 1.51967 9.89476 1.04689 7.33725H8.4202H8.9202V6.83725V5.82925Z" fill="white" stroke="#0052FF" />
                    </g>
                    <defs>
                        <clipPath id="clip0_181_1295">
                            <rect width="13" height="13" fill="white" transform="translate(0.142822)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
            <div className="w-[381px] h-[285px] mb-13 px-6 py-6 bg-[#2f2f8a]/40 dark:bg-[#ffffff] rounded-md border border-[#e5bb01] backdrop-blur-[18.46px] flex-col justify-start items-center gap-2 inline-flex mb-[48px]">
                <div className="flex-col justify-start items-center gap-4 flex">
                    <div className="flex-col justify-start items-center gap-4 flex">
                        <div className="flex-col justify-start items-center gap-4 flex">
                            <div className="text-[#e5bb01]  text-base font-bold font-['Noto Sans JP'] leading-relaxed">エアドロポイント</div>
                            <img src="/images/prise.png" alt="" />
                            <div className="text-[#e5bb01] text-base font-medium font-['Noto Sans JP'] leading-relaxed">1,000 POINT</div>
                        </div>
                        <div className="self-stretch h-3 flex-col justify-end items-end gap-4 flex">
                            <div className="w-[309px] h-3 relative">
                                <div className="w-[236px] h-[9.17px] left-[2px] top-[1.42px] absolute bg-[#ffb73b]/60 z-50 rounded-[18.33px] border border-[#e5bb01]" />
                                <div className="w-[309px] h-3 left-0 top-0 absolute bg-white/30 dark:bg-gray-200 rounded-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-4 mb-8 text-white dark:text-[#000000]">
                <div className="w-[calc(50%-10px)] flex gap-4 py-4 pl-5 items-center bg-[#2F2F8A] bg-opacity-40 dark:bg-[#ffffff] rounded-md border-indigo-800 border-2">
                    <RiBarChart2Fill className="w-[15px] h-[15px]" />
                    <div>
                        <div className="text-[20px] font-bold">$0</div>
                        <div className="text-[12px]">BASE上のボリューム</div>
                    </div>
                </div>
                <div className="w-[calc(50%-10px)] flex gap-4 py-4 pl-5 items-center bg-[#2F2F8A] bg-opacity-40 dark:bg-[#ffffff] rounded-md border-indigo-800 border-2">
                    <RxCalendar />
                    <div>
                        <div className="text-[20px] font-bold">0 Days</div>
                        <div className="text-[12px]">BASE上のボリューム</div>
                    </div>
                </div>
            </div>
            <div className='flex gap-3 rounded-md mb-4 w-full py-5 px-4 bg-[#E5BB01] bg-opacity-30 backdrop-filter backdrop-blur-[9.23077px]'>
                <IoWarningOutline className='' />
                <div className=''>
                    <p className='mb-2 font-bold text-[12px] li'>アクティベーション保留中</p>
                    <p className='mb-2 text-[12px]'>ファーミングを有効にするには、</p>
                    <p className='text-[12px]'> プレミアムのチェックアウトプロセスを完了してください。</p>
                </div>
            </div>
            <div className='flex gap-3 rounded-md mb-10 w-full py-5 px-4 bg-[#D50101] bg-opacity-35 backdrop-filter backdrop-blur-[9.23077px]'>
                <IoWarningOutline className='' />
                <div className=''>
                    <p className='mb-2 font-bold text-[12px] li'>残金が足りません</p>
                    <p className='text-[12px]'>ファーミングを有効にするには、ご入金ください。</p>
                </div>
            </div>
            <div className="text-[20px] text-white mb-6">EVMウォレット #1</div>
            <div className="border-2 border-indigo-700 rounded-md py-6 px-8 mb-20 border-indio w-full bg-[#2F2F8A] bg-opacity-40">
                <div className="mb-8 flex items-center gap-10">
                    <span className="text-[16px]">残高</span>
                    <span className="text-[30px] font-bold">1,000 <span className="text-[24px]">USD</span></span>
                </div>
                <div className="flex mb-8">
                    <div className="w-[calc(50%-10px)] flex gap-3">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 35.3076C7.83453 35.3076 0 27.4731 0 17.8076C0 8.14215 7.83453 0.307617 17.5 0.307617C27.1655 0.307617 35 8.14215 35 17.8076C35 27.4731 27.1655 35.3076 17.5 35.3076ZM26.2434 18.0471L18.0447 4.68262L9.84375 18.0482L18.0447 22.8093L26.2434 18.0471ZM26.25 19.5751L18.0447 24.334L9.84375 19.5762L18.0447 30.9271L26.25 19.5751Z" fill="white" />
                            <path d="M18.5292 6.05762V15.482L26.4947 19.0414L18.5292 6.05762ZM18.5292 25.1486V31.5523L26.5001 20.5246L18.5292 25.1486Z" fill="white" fill-opacity="0.298" />
                            <path d="M18.5292 23.6664L26.4947 19.0414L18.5292 15.4841V23.6664Z" fill="white" fill-opacity="0.801" />
                            <path d="M10.5625 19.0414L18.5291 23.6664V15.4841L10.5625 19.0414Z" fill="white" fill-opacity="0.298" />
                            <path d="M34.416 29.5516V29.0516H33.916H22.561C23.1693 24.9534 26.7078 21.8076 30.9847 21.8076C35.6882 21.8076 39.5 25.6139 39.5 30.3076C39.5 35.0014 35.6882 38.8076 30.9847 38.8076C26.7086 38.8076 23.1694 35.6618 22.561 31.5636H33.916H34.416V31.0636V29.5516Z" fill="white" stroke="#0052FF" />
                        </svg>
                        <div>
                            <div className="text-[20px] font-bold">Base</div>
                            <div className="text-[12px]">0.0000 ETH</div>
                        </div>
                    </div>
                    <div className="w-[calc(50%-10px)] flex gap-3">
                        <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 35.3076C7.83453 35.3076 0 27.4731 0 17.8076C0 8.14215 7.83453 0.307617 17.5 0.307617C27.1655 0.307617 35 8.14215 35 17.8076C35 27.4731 27.1655 35.3076 17.5 35.3076ZM26.2434 18.0471L18.0447 4.68262L9.84375 18.0482L18.0447 22.8093L26.2434 18.0471ZM26.25 19.5751L18.0447 24.334L9.84375 19.5762L18.0447 30.9271L26.25 19.5751Z" fill="white" />
                            <path d="M18.5292 6.05762V15.482L26.4947 19.0414L18.5292 6.05762ZM18.5292 25.1486V31.5523L26.5001 20.5246L18.5292 25.1486Z" fill="white" fill-opacity="0.298" />
                            <path d="M18.5292 23.6664L26.4947 19.0414L18.5292 15.4841V23.6664Z" fill="white" fill-opacity="0.801" />
                            <path d="M10.5625 19.0414L18.5291 23.6664V15.4841L10.5625 19.0414Z" fill="white" fill-opacity="0.298" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 39.3076C25.0292 39.3076 21 35.2784 21 30.3076C21 25.3368 25.0292 21.3076 30 21.3076C34.9708 21.3076 39 25.3368 39 30.3076C39 35.2784 34.9708 39.3076 30 39.3076ZM34.4966 30.4308L30.2801 23.5576L26.0625 30.4314L30.2801 32.8799L34.4966 30.4308ZM34.5 31.2166L30.2801 33.6641L26.0625 31.2172L30.2801 37.0548L34.5 31.2166Z" fill="#4036C1" />
                            <path d="M30.5293 24.2649V29.1117L34.6259 30.9422L30.5293 24.2649ZM30.5293 34.0831V37.3764L34.6286 31.7051L30.5293 34.0831Z" fill="#4036C1" fill-opacity="0.3" />
                            <path d="M30.5293 33.3206L34.6259 30.942L30.5293 29.1125V33.3206Z" fill="#4036C1" fill-opacity="0.8" />
                            <path d="M26.4321 30.942L30.5292 33.3206V29.1125L26.4321 30.942Z" fill="#4036C1" fill-opacity="0.3" />
                        </svg>
                        <div>
                            <div className="text-[20px] font-bold">Ethereum</div>
                            <div className="text-[12px]">0.0000 ETH</div>
                        </div>
                    </div>
                </div>
                <div className="flex mb-10">
                    <div className="w-[calc(50%-10px)]">
                        <div className="text-[14px] font-bold">Base上のトークン</div>
                        <div className="text-[12px]">トークンなし</div>
                    </div>
                    <div>
                        <div className="text-[14px] font-bold">Base上のプールトークン</div>
                        <div className="text-[12px]">プールポジションなし</div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-8">
                    <button className="py-[10px] px-8 text-[14px] font-semibold bg-[linear-gradient(107.21deg,_#9348A2_24.43%,_#2954A3_68.95%)] hover:bg-[linear-gradient(200.21deg,_#9348A2_24.43%,_#2954A3_68.95%)] rounded-[30px] shadow-md transition-all duration-1000 ease-in-out hover:ease-out">
                        ETHを入金
                    </button>
                    <span className="text-[12px] cursor-pointer">引き出す</span>
                </div>
            </div>

        </div>
    )
}