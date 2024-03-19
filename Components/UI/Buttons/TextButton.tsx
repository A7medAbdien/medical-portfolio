import Link from 'next/link';
import { FC } from 'react';

interface TextButtonProps {
    link: string;
    text: string;
    className?: string;
}

const TextButton: FC<TextButtonProps> = ({ link = "/#", text, className }) => {
    return <Link
        href={link}
        className={`${className} hover:tracking-[0.3rem] rounded-md py-3 text-xl font-semibold text-primary-500  transition-all group`}
    >
        {text}
        {/* <FaArrowRight className='inline-block -translate-y-[0.1rem]' /> */}
    </Link>
}

export default TextButton