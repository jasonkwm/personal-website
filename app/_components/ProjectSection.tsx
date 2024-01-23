import React from 'react';

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
			<div className="flex flex-col items-center py-20 text-center">
				<h2 className="font-semibold text-3xl lg:text-4xl">PROJECTS</h2>
				<div className="w-14 h-2 rounded-full bg-gray-500 my-8"></div>
				<p className="text-xl text-[#555] w-10/12 lg:w-6/12">
					Explore a compilation of my personal projects and the things I have learned
					along the way in the world of programming.
				</p>
			</div>
			<section>
				{projects.map((project) => (
					<article
						className="flex flex-col lg:flex-row justify-between mb-12  border-b-2 "
						key={project.title}
					>
						<img
							src={project.image}
							className="max-w-3xl max-h-96 lg:py-10 lg:h-96 px-4 lg:px-24 lg:w-1/2 object-contain"
							alt={`A example image of ${project.title}`}
						/>
						<div className="p-10 text-left flex flex-col justify-center items-start lg:w-1/2">
							<h3 className="font-bold text-2xl lg:py-5">{project.title}</h3>
							<p className="py-5 text-[#666] lg:text-lg w-10/12 mb-5">
								{project.description}
							</p>
							<a
								className="inline-block text-sm lg:text-base px-5 py-3 text-white bg-black transition-all duration-300 rounded-xl hover:translate-y-1 hover:shadow-lg"
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
