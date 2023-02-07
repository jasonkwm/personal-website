import React from 'react'

type Props = {}

const projects = [
  {
    image: require("../assets/personal_website.png"),
    h3: "Personal Wesite",
    p: "Build using React Typescript & Tailwind CSS",
    link: "https://github.com/jasonkwm/personal-website"
  },
  {
    image: require("../assets/minishell.gif"),
    h3: "Minishell",
    p: "By creating your very own shell. Things to learn in this project includes, tokenizing input, parsing input, forking processes and file descriptors.",
    link: "https://github.com/jasonkwm/minishell"
  },
  {
    image: require("../assets/so_long.gif"),
    h3: "So Long",
    p: "Learn all about textures, sprites, and some other very basic gameplay elements by creating a 2D game in C programming language using the MiniLibX library.",
    link: "https://github.com/jasonkwm/so_long"
  },
  {
    image: require("../assets/crowd-funding-bamboo.jpg"),
    h3: "Crowdfunding Product Page",
    p: "Practising the basics of front-end by using HTML, SCSS and Javascript this project include building a responsive web design and creating a modal.",
    link: "https://github.com/jasonkwm/crowdfunding-product-page-main"
  },
  {
    image: require("../assets/philo.png"),
    h3: "Philosophers",
    p: "Learn the basics of threading a process and managing memory access among threads by using Mutex.",
    link: "https://github.com/jasonkwm/philo42"
  }
]

function ProjectsSection({}: Props) {
  return (
    <section id="projects">
      <div className='flex flex-col items-center py-20'>
        <h2 className='font-semibold text-3xl lg:text-4xl'>PROJECTS</h2>
        <div className='w-10 h-2 rounded-full bg-gray-400 my-8'></div>
        <p className='text-xl text-[#555] w-10/12 lg:w-6/12'>Explore a compilation of my personal projects and the things I have learned along the way in the world of programming</p>
      </div>
      <div className='project-content w-11/12 m-auto'>
        {
          projects.map( project => (
            <div key={project.h3} className='flex flex-col lg:flex-row justify-between m-auto py-10'>
              <img src={project.image} className=" max-w-3xl max-h-96 lg:py-10 lg:h-96 lg:px-24 lg:w-1/2 object-contain" alt={project.h3} />
              <div className='p-10 text-left flex flex-col justify-center items-start lg:w-1/2'>
                <h3 className='font-bold text-2xl lg:py-5'>{project.h3}</h3>
                <p className='py-5 text-[#666] text-lg w-10/12 lg:mb-10'>{project.p}</p>
                <a className='inline-block px-5 py-3 text-white bg-black transition-all duration-300 rounded-xl hover:-translate-y-1 hover:shadow-lg' href={project.link} target="_blank" rel="noreferrer">Github Repo</a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ProjectsSection


