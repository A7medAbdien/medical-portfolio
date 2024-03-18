import Link from 'next/link'
import { FC } from 'react'

interface PrimaryButtonProps {
    link: string;
    text: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ link = "/#", text }) => {
    return <Link
        href={link}
        className="shadow-md shadow-tertiary-500/50 rounded-md bg-primary px-7 py-3 text-base font-medium bg-primary-500 text-white hover:bg-primary-500/70 transition-colors"
    >
        {text}
    </Link>
}

export default PrimaryButton