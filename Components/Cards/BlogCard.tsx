import Image from 'next/image';
import { FC } from 'react'

interface BlogCardProps {
    title: string;
    category: string;
    img: string;
    date: any;
}

const BlogCard: FC<BlogCardProps> = ({ title, date, category, img }) => {
    return <div className="group h-[25rem] w-[23%] flex flex-col justify-center items-center bg-white shadow-lg hover:shadow-2xl transition-all shadow-primary-500/50 hover:shadow-primary-500/70 rounded-3xl overflow-hidden relative">
        <div className="w-full h-full ">
            <Image
                src={img}
                height="500"
                width="500"
                className="h-full w-full object-cover"
                alt="thumbnail"
            />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-4 p-5">
            <div className="py-2 px-3 w-auto h-auto rounded-2xl shadow-md shadow-tertiary-500/50 group-hover:shadow-lg group-hover:shadow-tertiary-500/50 z-50 bg-white -translate-y-1/2 absolute top-[65%] right-5 lex flex-col justify-center items-center gap-0">
                <p className="uppercase text-2xl font-bold leading-none">{date.day}</p>
                <p className="uppercase text-sm font-medium leading-none">{date.month}</p>
            </div>
            <p className="text-primary-500 font-semibold uppercase">{category}</p>
            <p className='text-2xl font-bold'>{title}</p>
        </div>
    </div>
}

export default BlogCard