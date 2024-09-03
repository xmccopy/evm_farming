'use client'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div
            className="
                max-w-[430px]
                mx-auto
                m-6
            "
        >
            {children}
        </div>
    )
}

export default Container;