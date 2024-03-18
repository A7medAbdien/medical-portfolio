import { FC } from 'react'
import { FaHeartbeat } from 'react-icons/fa'

interface HomeCardProps {
    title: string;
    description: string;
    icon: any;
}

const HomeCard: FC<HomeCardProps> = ({ title, description, icon }) => {
    return <div className=" h-fit flex flex-col justify-center items-start gap-5 p-10 text-tertiary-500">
        <div className="w-24 h-24 rounded-full bg-primary-500 text-white flex flex-col justify-center items-center text-[2.5rem]">
            <FaHeartbeat />
        </div>
        <p className='text-xl font-semibold'>Home Card</p>
        <div className="border-2 border-primary-500 w-16"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur</p>
    </div>
}

export default HomeCard