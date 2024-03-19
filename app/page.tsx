import HomeCard from "@/Components/Cards/HomeCard";
import NumberCard from "@/Components/Cards/NumberCard";
import PrimaryButton from "@/Components/UI/Buttons/PrimaryButton";
import SecondaryButton from "@/Components/UI/Buttons/SecondaryButton";
import { HomePageContent } from "@/data/strings";

export default function Home() {
	return (
		<main className="w-full min-h-[90vh] flex flex-col items-start justify-center text-tertiary-500 p-5">

			{/* Intro */}
			<section className="w-full min-h-[90vh] flex flex-col items-start justify-center">
				<div className="w-1/2 flex flex-col items-start justify-center gap-10 py-10">
					<p className="text-primary-500 font-semibold">{HomePageContent.mutedText}</p>
					<h1 className="text-7xl font-semibold">{HomePageContent.title}</h1>
					<p className="text-xl">{HomePageContent.description}</p>

					{/* Buttons */}
					<div className="hidden justify-end pr-16 sm:flex lg:pr-0 gap-3">
						<PrimaryButton {...HomePageContent.primaryButton} />
						<SecondaryButton {...HomePageContent.secondaryButton} />
					</div>
				</div>

				{/* Cards */}
				<div className="w-full flex items-center justify-between gap-10 mt-10">
					{HomePageContent.cards.map((card, i) => <HomeCard key={i} {...card} />)}
				</div>
			</section>

			{/* Numbers Section */}
			<section className="w-full flex items-center justify-between gap-10 my-36 px">
				{HomePageContent.NumberCardContent.map((card, i) => <NumberCard key={i} {...card} />)}
			</section>

			{/* Tools Section */}

		</main>
	);
}

