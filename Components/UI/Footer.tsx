"use client"
import { FooterContent } from '@/data/strings'
import { FC } from 'react'
import TextButton from './Buttons/TextButton'
import { MdPhone } from 'react-icons/md'
import SocialMedea from './SocialMedea'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <footer className='px-0 md:px-[12vw] py-10 w-full h-auto text-white bg-primary-500 flex flex-col items-center justify-between'>
            <div className="w-full h-fit flex items-center justify-between">
                <div className="flex flex-col items-start justify-center">
                    {FooterContent.Pages.map((page, i) => <TextButton key={i} {...page} className='text-white' />)}
                </div>

                <div className="flex flex-col items-end justify-end">
                    {FooterContent.FooterContacts.map(({ text, Icon }, i) =>
                        <div key={i} className="py-3 w-3/4  flex items-center justify-end gap-5">
                            <div className="w-full">
                                <p className='text-xl font-semibold text-ellipsis text-end'>
                                    {text}
                                </p>
                            </div>
                            <MdPhone className='-translate-y-[0.1rem] text-3xl w-fit' />
                        </div>
                    )}
                </div>

            </div>
            <div className="w-full mt-10 flex items-center justify-between">
                <div className="w-1/2 text-center">
                    {FooterContent.copyRights}
                </div>
                <div className="w-1/2">
                    <SocialMedea className='text-white !justify-center' />
                </div>
            </div>
        </footer>
    )
}

export default Footer