'use client'

interface SubTitleProps {
    label: string;
}

const SubTitle: React.FC<SubTitleProps> = ({
    label,
}) => {
    return (
        <div
            className="
                text-[20px]
                font-bold
                text-white
                dark:text-[#000000]
                mb-[24px]
                relative
                z-30
            "
        >
            {label}
        </div>
    )
}

export default SubTitle;