import HomeCard from "@/Components/Cards/HomeCard";
import { HomeCards } from "@/data/strings";
import Link from "next/link";

export default function Home() {
	return (
		<main className="w-full min-h-[90vh] flex flex-col items-start justify-center  p-5">
			<div className="w-1/2 text-tertiary-500  flex flex-col items-start justify-center gap-10 py-10">
				<p className="text-primary-500 font-semibold">Join Us</p>
				<h1 className="text-7xl font-semibold">Lorem ipsum dolor sit amet </h1>
				<p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium aspernatur facere quod amet! Voluptatum.</p>
				{/* Side Buttons */}
				<div className="hidden justify-end pr-16 sm:flex lg:pr-0 gap-3">
					<Link
						href="/#"
						className="px-7 py-3 text-base font-semibold hover:text-primary-500 border-primary-500 border-2 rounded-md text-primary-500"
					>
						Sign in
					</Link>

					<Link
						href="/#"
						className="rounded-md bg-primary px-7 py-3 text-base font-medium bg-primary-500 text-white hover:bg-primary-500/70 transition-colors"
					>
						Sign Up
					</Link>
				</div>
			</div>
			<div className="w-full flex items-center justify-center gap-10 mt-10">
				{HomeCards.map((card, i) => <HomeCard {...card} />)}
			</div>
		</main>
	);
}

