'use client'

interface TitleProps {
    label: string;
}

const Title: React.FC<TitleProps> = ({
    label,
}) => {
    return (
        <div
            className="
                text-[32px]
                font-bold
                text-white
                dark:text-[#000000]
                mb-[48px]
                relative
                z-40
            "
        >
            {label}
        </div>
    )
}

export default Title;