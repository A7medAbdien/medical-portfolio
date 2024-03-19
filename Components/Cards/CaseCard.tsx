import Image from 'next/image';
import { FC } from 'react';
import SecondaryButton from '../UI/Buttons/SecondaryButton';

interface CaseCardProps {
    title: string;
    description: string;
    img: string;
    category: string;
    button: any;
}

const CaseCard: FC<CaseCardProps> = ({ title, category, description, img, button }) => {
    return <div className="group h-fit w-1/3 flex flex-col justify-center items-center bg-white">
        <div className="w-full">
            <Image
                src={img}
                height="500"
                width="500"
                className="h-full w-full object-cover"
                alt="thumbnail"
            />
        </div>
        <div className="flex flex-col justify-center items-start gap-4 p-5">
            <p className="text-primary-500 font-semibold uppercase">{category}</p>
            <p className='text-xl font-semibold'>{title}</p>
            <p>{description}</p>
            <SecondaryButton className='rounded-full my-5 group-hover:shadow-lg group-hover:shadow-primary-500/50' {...button} />
        </div>

    </div>
}

export default CaseCard