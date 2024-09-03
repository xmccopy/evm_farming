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
                mb-[48px]
            "
        >
            {label}
        </div>
    )
}

export default Title;