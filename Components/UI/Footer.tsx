import { Pages } from '@/data/strings'
import { FC } from 'react'
import TextButton from './Buttons/TextButton'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <footer className='px-0 md:px-[12vw] py-10 w-full h-auto text-white bg-primary-500 flex flex-col items-center justify-between'>
            <div className="w-full h-fit flex items-center justify-between">
                <div className="flex flex-col items-start justify-center">
                    {Pages.map((page, i) => <TextButton key={i} {...page} className='text-white' />)}
                </div>
                <div className="">

                </div>
            </div>
            <div className="w-full mt-10 flex items-center justify-between">
                <div className="w-1/2 text-center">
                    Lorem ipsum dolor sit amet &copy; consectetur adipisicing.
                </div>
            </div>
        </footer>
    )
}

export default Footer