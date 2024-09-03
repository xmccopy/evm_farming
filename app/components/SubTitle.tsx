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