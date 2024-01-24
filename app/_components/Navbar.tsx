'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
	const LinkStyles = 'p-4 hover:scaleHover scaleHoverT';
	const [toggle, setToggle] = useState(false);
	const handleClick = () => setToggle((prevToggle: boolean) => !prevToggle);
	return (
		<>
			<header className="sticky flex justify-between items-center w-full p-5 md:px-20 md:py-5 font-bold shadow-lg bg-white top-0 z-10">
				<a
					href="#home"
					className="flex justify-around items-center hover:scaleHover scaleHoverT"
				>
					<Image
						src="/square-img.jpg"
						width={250}
						height={250}
						alt="a picture of me, jason."
						className="rounded-full w-14 h-14 hover:scaleHover scaleHoverT"
					/>
					<h2 className="p-4 tracking-wider">JASON KOH</h2>
				</a>
				<div>
					<nav className="hidden md:flex md:justify-around items-center">
						<a href="#about" className={LinkStyles}>
							ABOUT
						</a>
						<a href="#achievements" className={LinkStyles}>
							ACHIEVEMENTS
						</a>
						<a href="#projects" className={LinkStyles}>
							PROJECTS
						</a>
						<a href="#contact" className={LinkStyles}>
							CONTACT
						</a>
					</nav>
					<BurgerButton {...{ toggle, handleClick }} />
				</div>
			</header>
			<MobileNavList {...{ toggle, handleClick }} />
		</>
	);
};

type burgerButtonProps = {
	toggle: boolean;
	handleClick: () => void;
};

const BurgerButton = ({ toggle, handleClick }: burgerButtonProps) => {
	return (
		<div
			onClick={handleClick}
			className={`${toggle ? 'nav-menu' : ''} md:hidden transition-all duration-300`}
		>
			<div
				className={`w-8 h-1 rounded-full bg-black mb-2  transition-all duration-300 ${
					toggle ? 'translate-y-[12px] -rotate-45 ' : ''
				}`}
			></div>
			<div
				className={`w-8 h-1 rounded-full bg-black mb-2  transition-all duration-300 ${
					toggle ? 'opacity-0 ' : ''
				}`}
			></div>
			<div
				className={`w-8 h-1 rounded-full bg-black  transition-all duration-300 ${
					toggle ? 'translate-y-[-12px] rotate-45 ' : ''
				}`}
			></div>
		</div>
	);
};

const MobileNavList = ({ toggle, handleClick }: burgerButtonProps) => {
	const LinkStyles = 'py-6 px-8 text-right border-b-[1px] border-gray font-semibold text-sm';
	return (
		<nav
			className={`bg-white w-full mobile-nav-div fixed md:hidden z-10 flex flex-col justify-end ${
				toggle ? 'block' : 'hidden'
			}`}
		>
			<a className={`${LinkStyles} border-t-[1px]`} onClick={handleClick} href="#about">
				ABOUT
			</a>
			<a className={`${LinkStyles}`} onClick={handleClick} href="#achievements">
				ACHIEVEMENTS
			</a>
			<a className={`${LinkStyles}`} onClick={handleClick} href="#projects">
				PROJECTS
			</a>
			<a className={`${LinkStyles} shadow-xl`} onClick={handleClick} href="#contact">
				CONTACT
			</a>
		</nav>
	);
};
export default Navbar;
