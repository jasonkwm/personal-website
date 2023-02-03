import React from 'react'

type Props = {}

const projects = [
  {
    image: require("../assets/crowd-funding-bamboo.jpg"),
    h3: "Crowdfunding Product Page",
    p: "This challenge will test both your layout and state management skills. As visitors make pledges, your goal is to keep track of the changes.",
    link: "https://github.com/jasonkwm/crowdfunding-product-page-main"
  },
  {
    image: require("../assets/faq-accordion-card-main.jpg"),
    h3: "Faq Accordion Card",
    p: "The challenge is to build out this order summary card component and get it looking as close to the design above as possible.",
    link: "https://github.com/jasonkwm/faq-accordion-card-main"
  },
  {
    image: require("../assets/minishell.gif"),
    h3: "Minishell",
    p: "This project is about creating a simple shell. Yes, your own little bash. You will learn a lot about processes and file descriptors.",
    link: "https://github.com/jasonkwm/minishell"
  },
  {
    image: require("../assets/so_long.gif"),
    h3: "So Long",
    p: "This project is a very small 2D game. Its purpose is to make you work with textures, sprites, and some other very basic gameplay elements.",
    link: "https://github.com/jasonkwm/so_long"
  },
  {
    image: require("../assets/philo.png"),
    h3: "Philosophers",
    p: "In this project, you will learn the basics of threading a process. You will see how to create threads and you will discover mutexes.",
    link: "https://github.com/jasonkwm/philo42"
  }
]

function ProjectsSection({}: Props) {
  return (
    <section id="projects">
      <div className='flex flex-col items-center py-20'>
        <h2 className='font-semibold text-4xl'>PROJECTS</h2>
        <div className='w-10 h-2 rounded-full bg-amber-400 my-8'></div>
        <p className='font-large text-xl text-[#555] w-6/12'>Explore a compilation of my personal projects and the things I have learned along the way in the world of programming</p>
      </div>
      <div className='project-content w-11/12 m-auto'>
        {
          projects.map( project => (
            <div className='flex flex-col md:flex-row justify-between m-auto py-10'>
              <img src={project.image} className="py-10 px-24 w-1/2 h-96 max-w-3xl max-h-96" alt="project images" />
              <div className='w-1/2 p-10 text-left flex flex-col justify-center items-start'>
                <h3 className='font-bold text-2xl py-5'>{project.h3}</h3>
                <p className='py-5 mb-10 text-[#666] text-lg w-9/12'>{project.p}</p>
                <a className='inline-block px-5 py-3 text-white bg-black transition-all duration-300 rounded-xl hover:-translate-y-1 hover:shadow-lg' href={project.link} target="_blank">Github Repo</a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ProjectsSection


