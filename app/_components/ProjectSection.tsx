import React from 'react';
import Image from 'next/image';
import SectionHeading from './SectionHeading';

const projects = [
	{
		image: '/projects/42-on-campus-stats.png',
		title: '42 Campus Dashboard',
		description:
			'Build a comprehensive dashboard for 42 Kuala Lumpur that offers real-time statistics on current students, empowering them to assess and understand the current status of their peers on campus.',
		link: 'https://github.com/jasonkwm/philo42',
	},
	{
		image: '/projects/42-status-generator.gif',
		title: '42 Status Generator',
		description:
			"Assisting the Bocals in leveraging 42's internal API to gain a more comprehensive view of currently enrolled students on campus. Help to give a good guage on which Cadet is falling behind and on what projects do they need assistances.",
		link: 'https://github.com/jasonkwm/philo42',
	},
	{
		image: '/projects/minishell.gif',
		title: 'Minishell',
		description:
			'Creating a viable, basic implementation of a Shell/Bash application utilizing solely the C programming language',
		link: 'https://github.com/jasonkwm/minishell',
	},
	{
		image: '/projects/so_long.gif',
		title: 'So Long',
		description:
			'Learn all about textures, sprites, and some other very basic gameplay elements by creating a 2D game in C programming language using the MiniLibX library.',
		link: 'https://github.com/jasonkwm/so_long',
	},
	{
		image: '/projects/philosopher.gif',
		title: 'Philosophers',
		description:
			'Learn the basics of threading a process and managing memory access among threads by using Mutex.',
		link: 'https://github.com/jasonkwm/philo42',
	},
];

const ProjectSection = () => {
	return (
		<section id="projects">
			<SectionHeading
				heading="PROJECTS"
				divider={true}
				description="Discover my programming journey through various projects and lessons learned along the way."
			/>
			<section>
				{projects.map((project) => (
					<article
						className="flex flex-col lg:flex-row justify-between border-b-2 pb-10"
						key={project.title}
					>
						<Image
							src={project.image}
							width={684}
							height={384}
							alt={`A example image of ${project.title}`}
							className="max-w-3xl max-h-96 lg:py-10 lg:h-96 lg:w-1/2 w-[100%] px-4 lg:px-24 object-contain"
						/>
						<div className="p-10 text-left flex flex-col justify-center items-start lg:w-1/2">
							<h3 className="font-bold text-2xl lg:py-5">{project.title}</h3>
							<p className="py-5 text-[#666] lg:text-lg w-10/12 mb-5">
								{project.description}
							</p>
							<a
								className="inline-block text-sm lg:text-base px-5 py-3 text-white bg-black rounded-xl hover:scaleHover scaleHoverT"
								href={project.link}
								target="_blank"
								rel="noreferrer"
							>
								Project Link
							</a>
						</div>
					</article>
				))}
			</section>
		</section>
	);
};

export default ProjectSection;
