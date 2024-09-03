
import React from 'react';
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiCopperCoinLine } from "react-icons/ri";

interface Table_IntroProps {
    data: {
        id: number;
        email: string;
        allprice: number;
    }[];
}

const Table_Intro: React.FC<Table_IntroProps> = ({ data }) => {
    return (
        <div className="w-full">
            <table className="min-w-full text-[12px] text-white">
                <thead className='bg-white bg-opacity-10 w-full'>
                    <tr>
                        <th className="py-2 text-left rounded-l-[4px]"></th>
                        <th className="px-3 py-2 text-left">
                            <p>メールアドレス</p>
                        </th>
                        <th className="py-2 text-left rounded-r-[4px]">
                            <div className='flex items-center gap-1'>
                                <p>合計</p>
                                <div className='flex flex-col'>
                                    <RiArrowUpSLine />
                                    <RiArrowDownSLine />
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="mt-4">{item.id}</td>
                            <td className="px-3 py-2">
                                <div className='flex items-center gap-1'>
                                    <RiCopperCoinLine />
                                    {item.email}
                                </div>
                            </td>
                            <td className="px-3 py-2">${item.allprice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table_Intro;
