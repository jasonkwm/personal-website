import React from 'react';
import Image from 'next/image';
let socials = [
	{
		link: 'https://github.com/jasonkwm',
		image: '/social-media/github-white.png',
		alt: 'GitHub icon by Icons8',
		key: 0xaa,
	},
	{
		link: 'https://www.linkedin.com/in/jason-kwm',
		image: '/social-media/linkedin-white.png',
		alt: 'LinkedIn icon by Icons8',
		key: 0xcc,
	},
	{
		link: 'https://t.me/jasonkwm',
		image: '/social-media/telegram-white.png',
		alt: 'Telegram icon by Icons8',
		key: 0xbb,
	},

	{
		link: 'mailto: jasonkwm13@gmail.com',
		image: '/social-media/mail-white.png',
		alt: 'Mail icons by Icons8',
		key: 0xdd,
	},
];

const Footer = () => {
	return (
		<footer className="bg-black text-white flex flex-col-reverse lg:flex-row justify-between py-10 lg:py-20 px-5 lg:px-36">
			<div className="flex flex-col items-start mt-12 lg:mt-0">
				<h2 className="font-semibold text-lg tracking-wider mb-2 lg:mb-5">JASON KOH</h2>
				<p className="text-sm w-10/12 lg:w-2/3 text-left">
					A programmer with a talent for web development and software engineering
				</p>
			</div>
			<div className="flex flex-col items-start">
				<h3 className="font-semibold text-lg tracking-wider mb-2 lg:mb-5">SOCIAL</h3>
				<div className="footer-social-icon-div flex ">
					{socials.map((social) => (
						<a href={social.link} target="_blank" rel="noreferrer" key={social.key}>
							<Image
								src={social.image}
								alt={social.alt}
								width={40}
								height={40}
								className="w-10 h-10 mr-4 hover:scale-110 hover:rotate-6 transition-all duration-300"
							/>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
