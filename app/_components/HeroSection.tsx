import React from 'react';
import Image from 'next/image';

let socials = [
	{
		link: 'https://github.com/jasonkwm',
		img: '/social-media/github.png',
		alt: 'Github icons created by Dave Gandy',
		id: 0xaa,
	},
	{
		link: 'https://www.linkedin.com/in/jasonkwm',
		img: '/social-media/linkedin.png',
		alt: 'Linkedin icons created by Freepik',
		id: 0xbb,
	},
	{
		link: 'https://www.t.me/jasonkwm',
		img: '/social-media/telegram.png',
		alt: 'telegram icons created by Freepik',
		id: 0xcc,
	},
	{
		link: 'mailto: jasonkwm13@gmail.com',
		img: '/social-media/mail.png',
		alt: 'mail icons created by edt.im',
		id: 0xdd,
	},
];

const HeroSection = () => {
	return (
		<section
			id="home"
			className="h-[65vh] md:h-[80vh] flex flex-col justify-between text-center tracking-wider max-h-[120rem] min-h-[38rem]"
		>
			<h1 className="mt-32 font-bold text-3xl md:text-6xl">HEY, I&apos;M JASON KOH</h1>
			<p className="text-lg w-4/6 mx-auto my-10 md:text-xl md:w-3/6">
				A self-taught programmer with a passion for software development and a commitment to
				lifelong learning, I am motivated by the belief that technology can be a powerful
				force for positive change.
			</p>
			<div>
				<a
					className="inline-block px-12 py-5 mx-4 my-2 bg-black rounded-lg text-white text-sm font-semibold tracking-wider hover:scaleHover scaleHoverT"
					href="#achievements"
				>
					ACHIEVEMENTS
				</a>
				<a
					className="inline-block px-16 py-5 mx-4 my-2 bg-black rounded-lg text-white text-sm font-semibold tracking-wider hover:scaleHover scaleHoverT"
					href="#projects"
				>
					PROJECTS
				</a>
			</div>
			<div className='h-12 w-8 mb-10 mx-auto border-solid border-2 border-black rounded-full relative after:content-[""] after:absolute after:w-1 after:h-1 after:bg-black after:top-2 after:left-3 after:animate-movedown'></div>
			<div className="hidden md:block absolute bg-white px-3 py-6 rounded-r-lg z-0 top-56">
				{socials.map((social) => (
					<a href={social.link} target="_blank" rel="noreferrer" key={social.id}>
						<Image
							src={social.img}
							alt={social.alt}
							width={48}
							height={48}
							className="w-12 h-12 p-2 hover:scale-110 hover:rotate-6 transition-all duration-300"
						/>
					</a>
				))}
			</div>
		</section>
	);
};

export default HeroSection;
