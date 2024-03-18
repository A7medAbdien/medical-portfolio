import { FC } from 'react';
import { CardBody, CardContainer, CardItem } from '../UI/3d-card';
import Image from 'next/image';

interface HomeCardProps {
    title: string;
    description: string;
    img: string;
}

const HomeCard: FC<HomeCardProps> = ({ title, description, img }) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group/card w-auto  h-auto rounded-xl p-6 shadow-lg shadow-primary-500/50">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-tertiary-600"
                >
                    {title}
                </CardItem>

                <CardItem
                    translateZ="100"
                    className="w-full mt-4 rounded-xl shadow-md shadow-primary-500/50">
                    <Image
                        src={img}
                        height="500"
                        width="500"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-tertiary-400 text-lg max-w-sm mt-2"
                >
                    {description}
                </CardItem>
            </CardBody>
        </CardContainer>
    )
}

export default HomeCard