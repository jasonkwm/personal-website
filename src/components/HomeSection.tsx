import React from 'react'

type Props = {}

let socials = [
  {
    link: "https://github.com/jasonkwm",
    img: require("../assets/github-sign.png"),
    alt: "Github icons created by Dave Gandy"
  },
  {
    link: "https://www.linkedin.com/in/jason-kwm",
    img: require("../assets/linkedin.png"),
    alt: "Linkedin icons created by Freepik"
  },
  {
    link: "https://www.facebook.com/JasonKWM/",
    img: require("../assets/facebook.png"),
    alt: "Facebook icons created by Freepik"
  },
  {
    link: "https://www.instagram.com/jasonkwm/",
    img: require("../assets/instagram.png"),
    alt: "Instagram icons created by edt.im"
  }
]

function HomeSection({}: Props) {
  return (
    <section id='home' className='home-section h-[90vh] flex flex-col justify-between tracking-wider max-h-[120rem] min-h-[38rem]'>
        <div className='mt-20'>
            <h1 className='font-extrabold text-6xl'>HEY, I'M JASON KOH</h1>
            <p className='text-xl w-3/6 mx-auto my-10' >A Front-End focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
              <a className='inline-block px-16 py-5 bg-black rounded-lg text-white text-sm font-semibold tracking-wider hover:animate-expandButton transition-all duration-300' href="./#projects">PROJECTS</a>
        </div>
        <div className='h-12 w-8 mb-10 mx-auto border-solid border-2 border-black rounded-full relative 
        after:content-[""] after:absolute after:w-1 after:h-1 after:bg-black after:top-2 after:left-3 after:animate-movedown'>
          
        </div>
        <div className='hidden md:block absolute bg-white px-3 py-6 rounded-r-lg z-0 top-56'>
          {
            socials.map( social => (<a href={social.link} target="_blank"><img src={social.img} alt={social.alt} className="w-12 h-12 p-2 hover:scale-110 hover:rotate-6 transition-all duration-300"/></a>))
          }
        </div>
    </section>
  )
}

export default HomeSection