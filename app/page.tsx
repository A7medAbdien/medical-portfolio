import CaseCard from "@/Components/Cards/CaseCard";
import IntoCard from "@/Components/Cards/IntroCard";
import NumberCard from "@/Components/Cards/NumberCard";
import PrimaryButton from "@/Components/UI/Buttons/PrimaryButton";
import SecondaryButton from "@/Components/UI/Buttons/SecondaryButton";
import TextButton from "@/Components/UI/Buttons/TextButton";
import { HomePageContent } from "@/data/strings";

export default function Home() {
	return (
		<main className="w-full min-h-[90vh] flex flex-col items-start justify-center text-tertiary-500">

			{/* Intro Section */}
			<section className="px-0 md:px-[12vw]  w-full min-h-[90vh] flex flex-col items-start justify-center mb-24">
				{/* Text */}
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
					{HomePageContent.cards.map((card, i) => <IntoCard key={i} {...card} />)}
				</div>
			</section>

			{/* Numbers Section */}
			<section className="px-0 md:px-[12vw] w-full flex items-center justify-between gap-10 my-24 px">
				{HomePageContent.NumberCardContent.map((card, i) => <NumberCard key={i} {...card} />)}
			</section>

			{/* Tools Section */}
			<section className="px-0 md:px-[12vw] w-full h-[70vh] flex items-start justify-between my-24">

				{/* Text */}
				<div className="w-1/2 h-full flex flex-col items-start justify-center gap-10 py-10">
					<div className="w-24 border-2 border-primary-500"></div>
					<h1 className="text-6xl font-semibold">{HomePageContent.ToolSectionContent.title}</h1>
					<p className="text-xl">{HomePageContent.ToolSectionContent.description}</p>

					{/* Buttons */}
					<div className="hidden justify-end pr-16 sm:flex lg:pr-0 gap-3">
						<TextButton {...HomePageContent.ToolSectionContent.button} />
					</div>
				</div>
				{/* Image */}
				<div className="w-1/2 h-full bg-tertiary-50/20"></div>
			</section>


			{/* Case Studies Section */}
			<section className="px-0 md:px-[12vw]  w-full flex flex-col items-start justify-between py-36 bg-secondary-50">

				{/* Text */}
				<div className="w-1/2 h-full flex flex-col items-start justify-center gap-5 mb-10">
					<p className="text-primary-500 font-semibold">{HomePageContent.CaseSectionContent.mutedText}</p>
					<h1 className="text-6xl font-semibold">{HomePageContent.CaseSectionContent.title}</h1>
					<p className="text-xl">{HomePageContent.CaseSectionContent.description}</p>
				</div>

				{/* Image */}

				{/* Cards */}
				<div className="w-full flex items-center justify-between gap-5 mt-10">
					{HomePageContent.CaseSectionContent.cards.map((card, i) => <CaseCard key={i} {...card} />)}
				</div>
			</section>
		</main>
	);
}

