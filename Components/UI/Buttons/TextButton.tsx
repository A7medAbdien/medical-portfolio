import Link from 'next/link';
import { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface TextButtonProps {
    link: string;
    text: string;
}

const TextButton: FC<TextButtonProps> = ({ link = "/#", text }) => {
    return <Link
        href={link}
        className="hover:tracking-[0.3rem] rounded-md py-3 text-xl font-semibold text-primary-500  transition-all group"
    >
        {text}
        {/* <FaArrowRight className='inline-block -translate-y-[0.1rem]' /> */}
    </Link>
}

export default TextButton