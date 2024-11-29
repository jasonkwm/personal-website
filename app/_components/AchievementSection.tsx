import React from 'react';
import SectionHeading from './SectionHeading';
import Image from 'next/image';

type ImageType = {
	path: string;
	width: number;
	height: number;
	alt: string;
	fill?: boolean;
};

type RewardImageType = {
	path: string;
	title: string;
};

type ItemType = {
	id: number;
	heading: string;
	description: string;
	pageLink: string;
	projectLink: string;
	image: ImageType;
	rewards: RewardImageType[];
};

const imgObj: ImageType = {
	path: '/achievements/42kl-gamejam-24-26nov2023/dialog.gif',
	width: 600,
	height: 337,
	alt: 'a simple dialog between gold knight and granny in lost knight game',
};

const achievements: ItemType[] = [
	{
		id: 0xa3,
		heading: 'Ethereum Kuala Lumpur 2024',
		description: '42Hour Hackathon + 42KM Marathon? Sign me up!',
		pageLink:
			'https://www.linkedin.com/posts/jasonkwm_klscm-ethkl-42kl-activity-7248973321864634368-5Uma/?utm_source=share&utm_medium=member_desktop',
		projectLink: 'https://devfolio.co/projects/crypto-survey-fa45',
		image: {
			path: '/achievements/ethkl24/medals.jpg',
			width: 805.2,
			height: 603.9,
			alt: 'medal of KLSCM and ETHKL24 pass',
			fill: false,
		},
		rewards: [
			{ path: '/rewards/gold-medal-freepik.png', title: 'First Place' },
			{ path: '/rewards/running-flaticon.png', title: 'Full Marathon Finisher!' },
			{ path: '/rewards/money-rain-flaticon.png', title: 'Won $800 USD' },
			{ path: '/rewards/shipment-freepik.png', title: 'Swag/Merch Rewards' },
		],
	},
	{
		id: 0xa2,
		heading: '42KL GameJam 2023',
		description:
			"Our challenge was to create a game within 55 hours, incorporating the theme of 'Lost' and utilizing the Godot Engine.",
		pageLink:
			'https://www.linkedin.com/posts/jasonkwm_champion-of-42kl-gamejam-2023-activity-7139911945616326656-erU-',
		projectLink: 'https://jasonkwm.itch.io/lost-knight',
		image: {
			path: '/achievements/42kl-gamejam/sample-trailer.gif',
			width: 600,
			height: 337,
			alt: 'a simple dialog between gold knight and granny in lost knight game',
		},
		rewards: [
			{ path: '/rewards/gold-medal-freepik.png', title: 'First Place' },
			{ path: '/rewards/shipment-freepik.png', title: 'Swag/Merch Rewards' },
		],
	},
	{
		id: 0xa1,
		heading: 'Ethereum Kuala Lumpur 2023',
		description:
			'Our winning entry was a fully functional dApp that showcased the incredible Zero Knowledge capabilities of Aleo.',
		pageLink:
			'https://www.linkedin.com/posts/jasonkwm_hackathon-aleo-ethkl-activity-7120019021671927808-CZUE?utm_source=share&utm_medium=member_desktop',
		projectLink: 'https://github.com/jasonkwm/leo-zakkarat',
		image: {
			path: '/achievements/ethkl23-hackathon/pitching.jpg',
			width: 805.2,
			height: 603.9,
			alt: 'bunyod, jason, how zheng, and alvin pitching about our zakkarat project to the aleo team',
		},
		rewards: [
			{ path: '/rewards/gold-medal-freepik.png', title: 'First Place' },
			{ path: '/rewards/grant-freepik.png', title: 'Grants Offering' },
			{ path: '/rewards/money-rain-flaticon.png', title: 'Won $3000 USD' },
			{ path: '/rewards/shipment-freepik.png', title: 'Swag/Merch Rewards' },
		],
	},
];

const AchievementSection = () => {
	return (
		<section id="achievements" className="bg-[#fafafa] py-20">
			<SectionHeading
				heading="ACHIEVEMENTS"
				divider={true}
				description="Browse through my hackathon journey, where each achievement reflects not just wins but the invaluable lessons learned in the heat of coding challenges."
			/>
			<section className="flex justify-center items-stretch flex-wrap gap-8 w-11/12 lg:w-10/12 m-auto">
				{achievements.map((item) => (
					<AchievementItem key={item.id} {...{ item }} />
				))}
			</section>
		</section>
	);
};

type AchievementItemProps = {
	item: ItemType;
};

const AchievementItem = ({ item }: AchievementItemProps) => {
	const buttonStyle =
		'text-sm lg:text-base text-center px-5 py-3 text-white bg-black rounded-xl hover:scaleHover scaleHoverT';
	return (
		<article className="flex grow flex-col max-w-md rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
			<Image
				src={item.image.path}
				width={item.image.width}
				height={item.image.height}
				alt={item.image.alt}
				className={`rounded-t-lg object-cover max-h-[340px]`}
				priority
			/>
			<div className="py-12 px-6 flex flex-col gap-4 h-full justify-between">
				<div className="flex flex-col gap-4">
					<h2 className="font-bold text-2xl">{item.heading}</h2>
					<p className="text-[#666] lg:text-lg w-11/12">{item.description}</p>
				</div>
				<div className="flex flex-col gap-3 w-11/12 lg:w-10/12">
					<div className="flex items-center gap-3">
						<h3 className="font-bold">Rewards:</h3>
						{item.rewards.map((reward, index) => (
							<Image
								key={index}
								src={reward.path}
								width={46}
								height={46}
								alt={reward.title}
								title={reward.title}
							/>
						))}
					</div>
					<a
						href={item.pageLink}
						className={`${buttonStyle}`}
						target="_blank"
						rel="noreferrer"
					>
						Read more
					</a>{' '}
					<a
						href={item.projectLink}
						className={`${buttonStyle}`}
						target="_blank"
						rel="noreferrer"
					>
						Checkout Project
					</a>
				</div>
			</div>
		</article>
	);
};

export default AchievementSection;
