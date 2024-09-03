'use client'

interface MySettingProps {
    title: string;
    value: string;
    link: string;
    text?: boolean;
    psw?: boolean
}

const MySetting: React.FC<MySettingProps> = ({
    title,
    value,
    link,
    text, 
    psw
}) => {
    const inputType = text ? "text" : psw ? "password" : "text";
    return (
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
            "
        >
            <p className="text-left w-[50%]">{title}</p>
            <input
                type={inputType}
                value={value}
                readOnly
                className="text-left w-[50%] bg-transparent border-none outline-none"
            />
            <p className="w-[20%] text-right">
                <a href={link} className="text-[#D2AB67]">変更</a>
            </p>
        </div>
    )
}

export default MySetting;