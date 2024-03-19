import { FC } from 'react';
import { CardBody, CardContainer, CardItem } from '../UI/3d-card';
import Image from 'next/image';

interface IntroCardProps {
    title: string;
    description: string;
    img: string;
}

const IntroCard: FC<IntroCardProps> = ({ title, description, img }) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="text-white relative group/card  rounded-xl p-2 shadow-lg shadow-primary-500/50 w-full h-96">
                <CardItem
                    translateZ="60"
                    className="w-full h-full rounded-xl flex flex-col justify-center items-center p-5">
                    <Image
                        src={img}
                        height="500"
                        width="500"
                        className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl absolute"
                        alt="thumbnail"
                    />
                    <CardItem
                        translateZ="100"
                        className="text-3xl font-bold"
                    >
                        {title}
                    </CardItem>

                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-lg max-w-sm mt-5"
                    >
                        {description}
                    </CardItem>
                </CardItem>

            </CardBody>
        </CardContainer>
    )
}

export default IntroCard