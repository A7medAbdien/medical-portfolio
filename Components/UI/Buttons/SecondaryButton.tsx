import Link from 'next/link'
import { FC } from 'react'

interface SecondaryButtonProps {
    link: string;
    text: string;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ link = "/#", text }) => {
    return <Link
        href={link}
        className="hover:shadow-md hover:shadow-primary-500/50 px-7 py-3 text-base font-semibold hover:text-primary-500 border-primary-500 border-2 rounded-md text-primary-500 transition-all"
    >
        {text}
    </Link>
}

export default SecondaryButton