import Link from 'next/link';
import { FC } from 'react'
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
interface SocialMedeaProps { }

const SocialMedea: FC<SocialMedeaProps> = ({ }) => {
    return <div className='flex justify-center items-center text-primary-500 text-3xl gap-3'>
        <Link href={"https://www.facebook.com"} target='_blank'>
            <FaInstagram />
        </Link>
        <Link href={"https://www.facebook.com"} target='_blank'>
            <FaFacebook />
        </Link>
        <Link href={"https://www.facebook.com"} target='_blank'>
            <FaWhatsapp />
        </Link>
    </div>
}

export default SocialMedea