
import React from 'react';
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiCopperCoinLine } from "react-icons/ri";

interface TableProps {
    data: {
        id: number;
        name: string;
        category: string;
        price: number;
        allprice: number;
    }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <div className="w-full">
            <table className="min-w-full text-[12px] text-white">
                <thead className='bg-white bg-opacity-10 w-full'>
                    <tr>
                        <th className="py-2 text-left rounded-l-[4px]"></th>
                        <th className="px-3 py-2 text-left">
                            <p>名前</p>
                        </th>
                        <th className="py-2 text-left">
                            <div className='flex items-center gap-1'>
                                <p>カテゴリー</p>
                                <div className='flex flex-col'>
                                    <RiArrowUpSLine />
                                    <RiArrowDownSLine />
                                </div>
                            </div>
                        </th>
                        <th className="py-2 text-left">
                            <div className='flex items-center gap-1'>
                                <p>TVL</p>
                                <div className='flex flex-col'>
                                    <RiArrowUpSLine />
                                    <RiArrowDownSLine />
                                </div>
                            </div>
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
                                    {item.name}
                                </div>
                            </td>
                            <td className="px-3 py-2">{item.category}</td>
                            <td className="px-3 py-2">{item.price}</td>
                            <td className="px-3 py-2">{item.allprice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
