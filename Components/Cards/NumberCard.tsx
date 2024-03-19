import { FC } from 'react'

export interface NumberCardProps {
    title: string;
    number: number;
    numberUnit: string;
}

const NumberCard: FC<NumberCardProps> = ({ title, number, numberUnit }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-6xl font-semibold tracking-tighter text-primary-500">
                {number} {numberUnit}
            </div>
            <div className='text-center font-semibold translate-x-1'>
                {title}
            </div>
        </div>
    )
}

export default NumberCard