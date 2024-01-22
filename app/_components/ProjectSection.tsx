import React from 'react';

const projects = [
	{
		image: '/projects/minishell.gif',
		h3: 'Minishell',
		p: 'By creating your very own shell. Things to learn in this project includes, tokenizing input, parsing input, forking processes and file descriptors.',
		link: 'https://github.com/jasonkwm/minishell',
	},
	{
		image: '/projects/so_long.gif',
		h3: 'So Long',
		p: 'Learn all about textures, sprites, and some other very basic gameplay elements by creating a 2D game in C programming language using the MiniLibX library.',
		link: 'https://github.com/jasonkwm/so_long',
	},
	{
		image: '/projects/philosopher.gif',
		h3: 'Philosophers',
		p: 'Learn the basics of threading a process and managing memory access among threads by using Mutex.',
		link: 'https://github.com/jasonkwm/philo42',
	},
	{
		image: '/projects/42-on-campus-stats.png',
		h3: '42 Campus Dashboard',
		p: 'Build a comprehensive dashboard for 42 Kuala Lumpur that offers real-time statistics on current students, empowering them to assess and understand the current status of their peers on campus.',
		link: 'https://github.com/jasonkwm/philo42',
	},
	{
		image: '/projects/42-status-generator.gif',
		h3: '42 Status Generator',
		p: "Assisting the Bocals in leveraging 42's internal API to gain a more comprehensive view of currently enrolled students on campus. Help to give a good guage on which Cadet is falling behind and on what projects do they need assistances.",
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
				{projects.map(project => (
					<article className="block" key={project.h3}>
						<img
							src={project.image}
							className=" max-w-3xl max-h-96 lg:py-10 lg:h-96 lg:px-24 lg:w-1/2 object-contain"
							alt={project.h3}
						/>
					</article>
				))}
			</section>
		</section>
	);
};

export default ProjectSection;
