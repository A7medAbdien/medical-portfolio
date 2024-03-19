import Link from 'next/link'
import { FC } from 'react'

interface PrimaryButtonProps {
    link: string;
    text: string;
    className?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ link = "/#", text, className }) => {
    return <Link
        href={link}
        className={`${className} hover:shadow-xl hover:shadow-tertiary-500/50 rounded-md bg-primary px-7 py-3 text-base font-medium bg-primary-500 text-white  transition-all`}
    >
        {text}
    </Link>
}

export default PrimaryButton