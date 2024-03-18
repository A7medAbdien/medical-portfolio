import { FC } from 'react'
import { FaHeartbeat } from 'react-icons/fa'
import { CardBody, CardContainer, CardItem } from '../UI/3d-card';
import Image from 'next/image';

interface HomeCardProps {
    title: string;
    description: string;
    Icon: any;
}

const HomeCard: FC<HomeCardProps> = ({ title, description, Icon }) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group/card w-auto  h-auto rounded-xl p-6 shadow-lg shadow-primary-500/50">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-tertiary-600"
                >
                    Make things float in air
                </CardItem>

                <CardItem
                    translateZ="100"
                    className="w-full mt-4 rounded-xl shadow-md shadow-primary-500/50">
                    <Image
                        src="/img/tree.jpg"
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
                    Hover over this card to unleash the power of CSS perspective
                </CardItem>
            </CardBody>
        </CardContainer>
    )
}

export default HomeCard